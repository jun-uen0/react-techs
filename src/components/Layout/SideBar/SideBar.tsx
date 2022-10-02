import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Items from './parts/Items'
import { SideBarProps } from '../../types'

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <Items
            setContentsType={props.setContentsType}
            setShowCards={props.setShowCards}
          /> 
        </List>
      </Box>
    </>
  )
}

export default SideBar