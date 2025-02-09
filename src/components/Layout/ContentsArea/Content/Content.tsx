import axios from "axios"
import { useEffect, useState } from "react"
import { ContentProps } from '../../../types'
import MarkdownContent from './parts/MarkdownContent'
import BackButton from './parts/BackButton'
import convertPath from './parts/convertPath'
import RadixConversion from '../Original/Math/RadixConversion'

const Content: React.FC<ContentProps> = (props) => {
  const language = () => props.isEnglish ? 'Japanese' : 'English'
  const noContent = (<h3>This page is not available in {language()}.</h3>)
  const [read, setRead] = useState('')
  const [showNoContent, setShowNoContent] = useState(false)
  const url = `https://raw.githubusercontent.com/jun-uen0/${convertPath(props.content.path)}_${language()}.md`

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setRead(res.data)
      })
      .catch(() => {
        setRead('')
        setTimeout(() => setShowNoContent(true), 1000)
      })
  }, [props.isEnglish])

  const showNomal = () => {
    return read === '' ? (showNoContent ? <div>{noContent}</div> : null) : <MarkdownContent read={read} />
  }

  const showOriginal = (item: string) => {
    return item === "math" ? <RadixConversion /> : <RadixConversion />
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '30px',
    }}>
      <BackButton setShowCards={props.setShowCards} />
      {props.content.original
        ? showOriginal(props.content.original)
        : showNomal()
      }
    </div>
  )
}

export default Content