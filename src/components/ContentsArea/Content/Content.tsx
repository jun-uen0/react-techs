import axios from "axios"
import { useEffect, useState, Dispatch, SetStateAction } from "react"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

// @todo: date type must be other file 
type contentType = {
  title: string
  user: string
  repo: string
  branch: string
  file: string
  description: string
}

// @todo in other file
type ContentProps = {
  setShowCards: Dispatch<SetStateAction<boolean>>
  content: contentType
}

const Content: React.FC<ContentProps> = (props) => {
  
  const content = props.content

  // @todo show "Loading" till done rendering
  
  // Get the contents of the markdown file from GitHub
  const url =
  `https://raw.githubusercontent.com/${content.user}/${content.repo}/${content.branch}/${content.file}`
  const [read, setRead] = useState('')
  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setRead(res.data);
    })
    .catch((err) => {
      console.log('Error occured when fetching markdown data' + err)
    })
  }, [])

  return (
    <>
      <button
        onClick={() => {
          props.setShowCards(true)
        }}
      >
        ← Back
      </button>
      <div className="content">
        <ReactMarkdown
          children={read}
          components={{
            code({inline, className, children}) {
              const match = /language-(\w+)/.exec(className || '')
              // If text is inline, use the inline language
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={xonokai as any}
                  language={match[1]}
                  PreTag="div"
                />
                // If text is not inline, use the markdown language
                ) : (
                  <code className={className}>
                </code>
              )
            }
          }}
        />
      </div>
    </>
  )
}

export default Content