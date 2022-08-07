import NavBar from './Layout/NavBar/NavBar'
import SideBar from './Layout/SideBar/SideBar'
import ContentsArea from './Layout/ContentsArea/ContentsArea'
import CardArea from './Layout/CardArea/CardArea'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div className="header">
          <NavBar />
        </div>
        <div className="container">
          <aside className="sideBar">
            <SideBar />
          </aside>
          <main className="main">
            <ContentsArea />
          </main>
          <div className="cardArea">
            <CardArea />
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#091c33'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

export default App

