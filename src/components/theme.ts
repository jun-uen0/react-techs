import { createTheme } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const theme = createTheme({
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
    },
  },
})

export const useStyles = makeStyles({
  back: {
    background: "#091c33",
    color : '#ffffff',
  },
  learnMore: {
    background: "#ffffff",
    color : '#091c33',
    margin: '10px',
  },
})