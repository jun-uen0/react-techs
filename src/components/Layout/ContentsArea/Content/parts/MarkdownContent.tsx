import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MarkdownContentProps } from './../../../../types'

const MarkdownContent: React.FC<MarkdownContentProps> = (props) => {
  return (
    <div className="content">
      <ReactMarkdown
        children={props.read}
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
  )
}

export default MarkdownContent