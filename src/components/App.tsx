// import './App.css'
import NavBar from './Layout/NavBar/NavBar'
import SideBar from './Layout/SideBar/SideBar'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <SideBar />
      </MuiThemeProvider>
    </>
  )
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

export default App;
