import { Dispatch, SetStateAction, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import TitleAndLogo from "./parts/TitleAndLogo"
import Language from "./parts/Language"
import { NavBarProps } from "../../types"

const NavBar: React.FC<NavBarProps> = (props) => {

  const { categoryName } = useParams<{ categoryName: string }>()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = (lang: string) => {
    props.setSelectedLanguage(lang);
    navigate(`/${lang}/${categoryName}`);
    setAnchorEl(null);
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: "relative", zIndex: 1201 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {props.isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={props.toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <TitleAndLogo />
          <IconButton color="inherit" onClick={handleMenuOpen}>
            🌍
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => handleMenuClose("en")}>English</MenuItem>
            <MenuItem onClick={() => handleMenuClose("jp")}>日本語</MenuItem>
            <MenuItem onClick={() => handleMenuClose("th")}>ไทย</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar