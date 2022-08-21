import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
import Items from './parts/Items'

const SideBar = () => {
  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <Items />
          {/* <Divider /> */}
        </List>
      </Box>
    </>
  )
}

export default SideBar