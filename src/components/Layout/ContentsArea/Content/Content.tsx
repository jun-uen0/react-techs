import axios from "axios"
import { useEffect, useState } from "react"
import { ContentProps } from '../../../types'
import MarkdownContent from './parts/MarkdownContent'
import BackButton from './parts/BackButton'
import convertPath from './parts/convertPath'

const Content: React.FC<ContentProps> = (props) => {
  const language = () => props.isEnglish ? 'en' : 'jp'
  const noContent = (<h3>This page is not available in {language()}.</h3>)
  const [read, setRead] = useState('')
  const url =`https://raw.githubusercontent.com/jun-uen0/${convertPath(props.content.path)}_${language()}.md`

  useEffect(() => {
    axios.get(url)
    .then((res) => {setRead(res.data)})
    .catch(() => {setRead('')})
  }, [props.isEnglish])

  return (
    <>
      <BackButton setShowCards={props.setShowCards} />
        {read === '' ? <div>{noContent}</div> : <MarkdownContent read={read} />}
    </>
  )
}

export default Content