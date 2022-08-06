import { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'
import HumbergerMenu from '@material-ui/icons/Menu'
import PermIdentity from '@material-ui/icons/PermIdentity'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'


const MenuBotton: React.FC = () => {

  const [openSideBar, setOpenSideBar] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setOpenSideBar(!openSideBar)
    // @todo: if open is true, display sidebar
  }
  const isProfilePicClicked = () => {
    console.log('Profile picture clicked')
  }
  const isTitleClicked = () => {
    console.log('Title clicked')
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
              >
              {openSideBar ? <ChevronLeft/> : <HumbergerMenu/>}
            </IconButton>
            <Typography variant="subtitle1" className={classes.title}>
              <Grid container direction="column" alignItems="center" onClick={isTitleClicked}>
                TITLE & LOGO
              </Grid>
            </Typography>
            <IconButton
              color='inherit'
              >
              <PermIdentity/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const theme = createTheme({
  palette: {
    primary: {
      main: '#60823c'
    }
  }
});

export default MenuBotton