import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark,prism,xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {docco,androidstudio} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useEffect, useState } from "react"
import axios from "axios"

const ContentsArea: React.FC = () => {

  // Get the contents of the markdown file from GitHub
  const url =
  "https://raw.githubusercontent.com/jun-uen0/react-hooks/main/01_useState.md"

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
    <div>
      {/* <MuiThemeProvider theme={themeDark}> */}
        {/* <Box
          sx={{}}
        > */}
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
        {/* </Box> */}
      {/* </MuiThemeProvider> */}
    </div>
  )
}

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  },
})

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222",
    }
  },
})

export default ContentsArea