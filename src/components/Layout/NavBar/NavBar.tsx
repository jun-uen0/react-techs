import { Dispatch, SetStateAction } from 'react'
import TitleAndLogo from './parts/TitleAndLogo'
import Language from './parts/Language'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'

type NavBarProps = {
  isEnglish: boolean
  setIsEnglish: Dispatch<SetStateAction<boolean>>
  isMobile: boolean
}

const NavBar: React.FC<NavBarProps> = (props) => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <TitleAndLogo />
          <Language
           isEnglish={props.isEnglish}
           setIsEnglish={props.setIsEnglish}
           />
           {props.isEnglish ? <p>English</p> : <p>日本語</p>}
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

export default NavBar