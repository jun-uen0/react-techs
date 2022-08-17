import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'
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
    <>
      <p>fsが使えない。</p>
      <p>仕方ないから親コンポーネントで配列内に表示したいファイルを直接ぶち込む</p>
      <p>レポジトリの管理も変える。一つのレポジトリを参照し、ルートにあるフォルダを項目別にする</p>
      <p>← を→と同じ感じにする</p>
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