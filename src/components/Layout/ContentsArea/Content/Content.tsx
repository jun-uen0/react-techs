import axios from "axios"
import { useEffect, useState } from "react"
import { ContentProps } from '../../../types'
import MarkdownContent from './parts/MarkdownContent'
import BackButton from './parts/BackButton'
import convertPath from './parts/convertPath'
import RadixConversion from '../Original/Math/RadixConversion'

const Content: React.FC<ContentProps> = (props) => {
  const defaultContent = {
    title: "Content Not Found",
    path: "",
    description: "The requested content does not exist."
  }

  const content = props.content || defaultContent;

  const language = () => props.isEnglish ? 'jp' : 'en'
  const languageText = language() === 'jp' ? 'Japanese' : 'English'
  const noContent = (<h3>This page is not available in {languageText}.</h3>)

  const [read, setRead] = useState('')
  const [showNoContent, setShowNoContent] = useState(false)
  const url = content.path ? `https://raw.githubusercontent.com/jun-uen0/${convertPath(content.path)}_${language()}.md` : null

  useEffect(() => {
    if (!url) {
      setShowNoContent(true)
      return;
    }

    axios.get(url)
      .then((res) => {
        setRead(res.data)
      })
      .catch(() => {
        setRead('')
        setTimeout(() => setShowNoContent(true), 1000)
      })
  }, [props.isEnglish])

  return read === ''
    ? (showNoContent ? <div>{noContent}</div> : null)
    : <div style={{backgroundColor: '#ffffff', minHeight: '100vh', padding: '30px' }}>
        <BackButton setShowCards={props.setShowCards} />
        <MarkdownContent read={read} />
      </div>
}

export default Content
