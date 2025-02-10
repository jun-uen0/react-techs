import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#091c33'
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
    background: "#ffffff",
    color: '#000000',
  },
  learnMore: {
    background: "#00a2ff",
    color: '#ffffff',
    margin: '10px',
  },
  text: {
    color: '#ffffff',
  },
})