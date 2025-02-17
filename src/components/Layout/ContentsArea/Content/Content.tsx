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

  const content = props.content || defaultContent

  const language = () => props.selectedLanguage ?? 'en'
  const getLanguageLabel = (lang: string): string => {
    switch (lang) {
      case "en":
        return "English";
      case "jp":
        return "日本語";
      case "th":
        return "Thai";
      default:
        return "Unknown";
    }
  }
  const noContent = (<h3>This page is not available in {getLanguageLabel(language())}.</h3>)

  const [read, setRead] = useState('')
  const [showNoContent, setShowNoContent] = useState(false)
  const url = content.path ? `https://raw.githubusercontent.com/jun-uen0/${convertPath(content.path)}_${language()}.md` : null

  useEffect(() => {
    if (!url) {
      setShowNoContent(true)
      return
    }

    axios.get(url)
      .then((res) => {
        setRead(res.data)
      })
      .catch(() => {
        setRead('')
        setTimeout(() => setShowNoContent(true), 1000)
      })
  }, [props.selectedLanguage])

  const showNormal = () => {
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
      {content.original
        ? showOriginal(content.original)
        : showNormal()
      }
    </div>
  )
}

export default Content
