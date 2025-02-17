import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import Items from './parts/Items'
import { SideBarProps } from '../../types'

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
                  selectedLanguage={props.selectedLanguage}
                  setSelectedLanguage={props.setSelectedLanguage}
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
              selectedLanguage={props.selectedLanguage}
              setSelectedLanguage={props.setSelectedLanguage}
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