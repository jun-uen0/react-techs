import { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import HumbergerMenu from '@material-ui/icons/Menu'

const Drawer: React.FC = () => {

  const [openSideBar, setOpenSideBar] = useState(false)
  const classes = useStyles()

  const menuClick = () => {
    console.log('handleClick is called')
    setOpenSideBar(!openSideBar)
    // @todo: if open is true, display sidebar
  }
  return (
    <>
      <IconButton
        aria-label="menu"
        className={classes.menuButton}
        color="inherit"
        edge="start"
        onClick={menuClick}
        >
        {openSideBar ? <ChevronLeft/> : <HumbergerMenu/>}
      </IconButton>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default Drawer