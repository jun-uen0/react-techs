import { createTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import Button from '@mui/material/Button'

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

export const Back = styled('div')({
  background: "#ffffff",
  color: '#000000',
})

export const LearnMoreButton = styled(Button)({
  background: "#00a2ff",
  color: '#ffffff',
  margin: '10px',
})

export const Text = styled('p')({
  color: '#ffffff',
})
