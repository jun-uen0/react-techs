import axios from "axios"
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

const fileName = 'react.md'

const ContentsArea: React.FC = () => {

  const [content, setContent] = useState('Could not fetch markdown file')

  useEffect(() => {
    import('../../../../contents/' + fileName)
    .then(res => {
      fetch(res.default)
          .then(res => res.text())
          .then(res => setContent(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))

    axios.get(content)
    .then((res) => {
      setContent(res.data);
    })
    .catch((err) => {
      console.log('Error occured when fetching markdown data' + err)
    })
  }, [])

  return (
    <>
      <ReactMarkdown
        children={content}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={xonokai as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </>
  )
}

export default ContentsArea