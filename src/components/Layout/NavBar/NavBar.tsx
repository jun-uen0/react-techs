import { Dispatch, SetStateAction } from "react";
import TitleAndLogo from "./parts/TitleAndLogo";
import Language from "./parts/Language";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

type NavBarProps = {
  isEnglish: boolean;
  setIsEnglish: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  toggleDrawer: () => void;
};

const NavBar: React.FC<NavBarProps> = (props) => {
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
          <Language isEnglish={props.isEnglish} setIsEnglish={props.setIsEnglish} />
          {props.isEnglish ? <p>English</p> : <p>日本語</p>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;