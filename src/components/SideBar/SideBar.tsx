import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Items from './parts/Items'
import Sns from './parts/Sns'

const drawerWidth = 240

export default function ClippedDrawer() {

  const classes = useStyles()

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{ paper: classes.paper }}
        >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Items />
            <Divider />
            <span style={{ marginLeft: 16}} />
            <Sns />
          </List>
        </Box>
      </Drawer>
    </>
  )
}

const useStyles = makeStyles({
  paper: {
    background: "#091c33",
    width: drawerWidth,
  },
})