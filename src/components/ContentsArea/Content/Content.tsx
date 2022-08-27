import axios from "axios"
import { useEffect, useState, Dispatch, SetStateAction } from "react"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

// @todo: date type must be other file 
type contentType = {
  title: string
  path: string
  description: string
}

// @todo in other file
type ContentProps = {
  setShowCards: Dispatch<SetStateAction<boolean>>
  content: contentType
  isEnglish: boolean
}

const Content: React.FC<ContentProps> = (props) => {

  // @todo show "Loading" till done rendering

  const splitedPath = (props.content.path).split('/')
  const fileName = splitedPath[splitedPath.length -1] // file name is as directory name + '_' + language
  splitedPath.splice(1,0,'main') // Add branch name after repogitory name
  const pathWithBranch = splitedPath.join('/') // Put together them again

  // @todo handle language with icon
  const language = () => {
    if (props.isEnglish) return 'en'
    return 'jp'
  }
  
  // console.log(`https://raw.githubusercontent.com/jun-uen0/${pathWithBranch}/${fileName}_${language}.md`)
  
  // Get the contents of the markdown file from GitHub
  const url = `https://raw.githubusercontent.com/jun-uen0/${pathWithBranch}/${fileName}_${language()}.md`

  const [read, setRead] = useState('')
  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setRead(res.data);
    })
    .catch((err) => {
      console.log('Error occured when fetching markdown data' + err)
    })
  }, [props.isEnglish])

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