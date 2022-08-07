import TitleAndLogo from './parts/TitleAndLogo'
import ProfilePic from './parts/ProfilePic'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'

const MenuBotton: React.FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <TitleAndLogo />
          <ProfilePic />
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    color: 'primary',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1,
  },
}))

export default MenuBotton