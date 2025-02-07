import axios from "axios"
import { useEffect, useState } from "react"
import { ContentProps } from '../../../types'
import MarkdownContent from './parts/MarkdownContent'
import BackButton from './parts/BackButton'
import convertPath from './parts/convertPath'
import RadixConversion from '../Original/Math/RadixConversion'

const Content: React.FC<ContentProps> = (props) => {
  const language = () => props.isEnglish ? 'jp' : 'en'
  const noContent = (<h3>This page is not available in {language()}.</h3>)
  const [read, setRead] = useState('')
  const url =`https://raw.githubusercontent.com/jun-uen0/${convertPath(props.content.path)}_${language()}.md`

  useEffect(() => {
    axios.get(url)
    .then((res) => {setRead(res.data)})
    .catch(() => {setRead('')})
  }, [props.isEnglish])

  const showNomal = () => {
    return read === '' ? <div>{noContent}</div> : <MarkdownContent read={read} />
  }
  const showOriginal = (item: string) => {
    return item === "math" ? <RadixConversion /> : <RadixConversion />
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '30px', // ← 追加
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