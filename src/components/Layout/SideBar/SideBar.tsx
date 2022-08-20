import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Items from './parts/Items'
import Sns from './parts/Sns'

const SideBar = () => {
  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <Items />
          <Divider />
          <span style={{ marginLeft: 16}} />
          <Sns />
        </List>
      </Box>
    </>
  )
}

export default SideBar