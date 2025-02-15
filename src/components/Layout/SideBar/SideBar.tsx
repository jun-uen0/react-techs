import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Items from "./parts/Items"
import { SideBarProps } from "../../types"
import Drawer from "@mui/material/Drawer"
import { useMediaQuery } from "@mui/material"

const SideBar: React.FC<SideBarProps> = ({ setContentsType, setShowCards, mobileOpen, toggleDrawer }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ style: { backgroundColor: "#ffffff", color: "#000000" } }}
        >
          <Box sx={{ width: 240 }}>
            <Toolbar />
            <List>
              <Items
                setContentsType={setContentsType}
                setShowCards={setShowCards}
                mobileOpen={mobileOpen}
                toggleDrawer={toggleDrawer}
              />
            </List>
          </Box>
        </Drawer>
      ) : (
        <Box sx={{ width: 240 }}>
          <Toolbar />
          <List>
            <Items
              setContentsType={setContentsType}
              setShowCards={setShowCards}
              mobileOpen={mobileOpen}
              toggleDrawer={toggleDrawer}
            />
          </List>
        </Box>
      )}
    </>
  )
}

export default SideBar