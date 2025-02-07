import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Items from './parts/Items'
import { SideBarProps } from '../../types'
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const SideBar: React.FC<SideBarProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={handleDrawerToggle}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              style: { backgroundColor: '#ffffff', color: '#000000' }
            }}
          >
            <Box sx={{ width: 240 }}>
              <Toolbar />
              <List>
                <Items
                  setContentsType={props.setContentsType}
                  setShowCards={props.setShowCards}
                />
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={{ width: 240 }}>
          <Toolbar />
          <List>
            <Items
              setContentsType={props.setContentsType}
              setShowCards={props.setShowCards}
            />
          </List>
        </Box>
      )}
    </>
  )
}

export default SideBar