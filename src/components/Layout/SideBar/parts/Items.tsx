import { useSearchParams } from 'react-router-dom'
import LeetCodeLogo from '../../../../assets/leetcode_black.png'
import LaptopLogo from '../../../../assets/laptop.png'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Code from '@mui/icons-material/Code'
import CloudQueue from '@mui/icons-material/CloudQueue'
import InfoIcon from '@mui/icons-material/Info'
import { SideBarProps } from '../../../types'

const Items: React.FC<SideBarProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
      <ListItem key={'About Me'}>
        <Button
          onClick={() => {
            props.setContentsType('about')
            props.setShowCards(false)
            setSearchParams({ item: 'about' })
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <InfoIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'About Me'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>

      <ListItem key={'Algorithms'}>
        <Button
          onClick={() => {
            props.setContentsType('algorithms')
            props.setShowCards(true)
            setSearchParams({ item: 'algorithms' })
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <Code color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'Algorithms'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>

      <ListItem key={'LeetCode'}>
        <Button
          onClick={() => {
            props.setContentsType('leetcode')
            props.setShowCards(true)
            setSearchParams({ item: 'leetcode' })
            props.toggleDrawer() // ← 追加
          }}
        >
          <ListItemIcon>
            <img src={LeetCodeLogo} alt='LeetCode logo' height={'25px'} width={'25px'} />
          </ListItemIcon>
          <ListItemText primary={'LeetCode'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>

      <ListItem key={'AWS'}>
        <Button
          onClick={() => {
            props.setContentsType('aws')
            props.setShowCards(true)
            setSearchParams({ item: 'aws' })
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <CloudQueue color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'AWS'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>

      <ListItem key={'Others'}>
        <Button
          onClick={() => {
            props.setContentsType('others')
            props.setShowCards(true)
            setSearchParams({ item: 'others' })
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <img src={LaptopLogo} alt='Laptop logo' height={'25px'} width={'25px'} />
          </ListItemIcon>
          <ListItemText primary={'Others'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>
    </>
  )
}

export default Items