import { Dispatch, SetStateAction } from 'react'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Items from './parts/Items'

type contentType = 'algorithms' | 'react' | 'leetcode' | 'aws'

type SideBarProps = {
  setContentsType: Dispatch<SetStateAction<contentType>>
  setShowCards: Dispatch<SetStateAction<boolean>>
}

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