import axios from "axios"
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

const fileName = '01_useState.md'

const Content: React.FC = () => {
  
  // Get the contents of the markdown file from GitHub
  const url =
  `https://raw.githubusercontent.com/jun-uen0/react-hooks/main/${fileName}`
  const [read, setRead] = useState('Could not fetch markdown file')
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
    </>
  )
}

export default Content