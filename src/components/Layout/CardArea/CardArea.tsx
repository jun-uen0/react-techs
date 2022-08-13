import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/styles/useTheme'
import Box from '@material-ui/core/Box'
import Profile from './parts/Profile'

export default function ClippedDrawer() {

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