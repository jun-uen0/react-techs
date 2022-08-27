import { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import CardArea from './CardArea/CardArea'
import ContentsArea from "../ContentsArea/ContentsArea"
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

const Layout: React.FC = () => {

  const [isEnglish, setIsEnglish] = useState(() => {
    const isEnglish = localStorage.getItem('isEnglish')
    return JSON.parse(isEnglish as string) as boolean ?? true
  })
  useEffect(() => {
    localStorage.setItem('isEnglish', JSON.stringify(isEnglish))
  }, [isEnglish])

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div className="header">
          <NavBar
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
          />
        </div>
        <div className="container">
          <div className="sideBar">
            <SideBar />
          </div>
          <div className="contentsArea">
            <ContentsArea
              isEnglish={isEnglish}
            />
          </div>
          <div className="cardArea">
            <CardArea />
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  )
}

// @todo: theme def must be different file
const theme = createTheme({
  palette: {
    primary: {
      main: '#091c33'
    },
    secondary: {
      main: '#ffffff'
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
})

export default Layout