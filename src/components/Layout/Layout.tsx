import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import CardArea from './CardArea/CardArea'
import ContentsArea from "../ContentsArea/ContentsArea"
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

// @todo: store in other file
type Language = 'English' | 'Japanese'

const Layout: React.FC = () => {

  // @todo: handle language mode with this
  const [language, setLanguage] = useState<Language>('English')

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div className="header">
          <NavBar />
        </div>
        <div className="container">
          <div className="sideBar">
            <SideBar />
          </div>
          <div className="contentsArea">
            <ContentsArea />
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