import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/styles/useTheme'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Profile from './parts/Profile'

export default function ClippedDrawer() {

  const classes = useStyles()
  const theme = useTheme();

  return (
    <>
      <Box>
        <Profile />
      </Box>
    </>
  )
}

const useStyles = makeStyles({
  back: {
    background: "#091c33",
    color : '#ffffff',
  },
})