import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Items from './parts/Items'
import { SideBarProps } from '../../types'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

const SideBar: React.FC<SideBarProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isMobile ? (
        <>
          <Drawer
            variant="temporary"
            open={props.mobileOpen}
            onClose={props.toggleDrawer}
            ModalProps={{ keepMounted: true }}
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
                  mobileOpen={props.mobileOpen}
                  toggleDrawer={props.toggleDrawer}
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
              mobileOpen={props.mobileOpen}
              toggleDrawer={props.toggleDrawer}
            />
          </List>
        </Box>
      )}
    </>
  )
}

export default SideBar