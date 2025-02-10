import { useSearchParams } from 'react-router-dom'
import LeetCodeLogo from '../../../../assets/leetcode_black.png'
import LaptopLogo from '../../../../assets/laptop.png'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import Code from '@material-ui/icons/Code'
import CloudQueue from '@material-ui/icons/CloudQueue'
import InfoIcon from '@material-ui/icons/Info'
import { useStyles } from '../../../theme'
import { SideBarProps } from '../../../types'

const Items: React.FC<SideBarProps> = (props) => {
  const classes = useStyles()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
      <ListItem key={'About Me'}>
        <Button
          onClick={() => {
            props.setContentsType('about')
            props.setShowCards(false)
            setSearchParams({ item: 'about' })
          }}
        >
          <ListItemIcon>
            <InfoIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'About Me'} />
        </Button>
      </ListItem>
      <ListItem key={'Algorithms'}>
        <Button
          onClick={() => {
            props.setContentsType('algorithms')
            props.setShowCards(true)
            setSearchParams({ item: 'algorithms' })
          }}
        >
          <ListItemIcon>
            <Code color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'Algorithms'} />
        </Button>
      </ListItem>
      <ListItem key={'LeetCode'}>
        <Button
          onClick={() => {
            props.setContentsType('leetcode')
            props.setShowCards(true)
            setSearchParams({ item: 'leetcode' })
          }}
        >
          <ListItemIcon>
            <img src={LeetCodeLogo} alt='LeetCode logo' height={'25px'} width={'25px'} />
          </ListItemIcon>
          <ListItemText primary={'LeetCode'} />
        </Button>
      </ListItem>
      <ListItem key={'AWS'}>
        <Button
          onClick={() => {
            props.setContentsType('aws')
            props.setShowCards(true)
            setSearchParams({ item: 'aws' })
          }}
        >
          <ListItemIcon>
            <CloudQueue color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'AWS'} />
        </Button>
      </ListItem>
      <ListItem key={'Others'}>
        <Button
          onClick={() => {
            props.setContentsType('others')
            props.setShowCards(true)
            setSearchParams({ item: 'others' })
          }}
        >
          <ListItemIcon>
            <img src={LaptopLogo} alt='Laptop logo' height={'25px'} width={'25px'} />
          </ListItemIcon>
          <ListItemText primary={'Others'} />
        </Button>
      </ListItem>
    </>
  )
}

export default Items