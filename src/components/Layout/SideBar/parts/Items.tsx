import { useSearchParams } from 'react-router-dom'
import leetCodeLogo from '../../../../assets/leetcode_black.png'
import LaptopLogo from '../../../../assets/laptop.png'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import Code from '@material-ui/icons/Code'
import CloudQueue from '@material-ui/icons/CloudQueue'
import { useStyles } from '../../../theme'
import { SideBarProps } from '../../../types'

const Items: React.FC<SideBarProps> = (props) => {

  const classes = useStyles()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
      <ListItem key={'Algorithms'}>
        <Button
          onClick={() => {
            console.log('Algorithms clicked')
            props.setContentsType('algorithms')
            props.setShowCards(true)
            setSearchParams({ item: 'algorithms' })
          }}
        >
          <ListItemIcon>
            <Code
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText primary={'Algorithms'} />
        </Button>
      </ListItem>
      <ListItem key={'LeetCode'}>
        <Button
          onClick={() => {
            console.log('LeetCode clicked')
            props.setContentsType('leetcode')
            props.setShowCards(true)
            setSearchParams({ item: 'leetcode' })
          }}
        >
          <ListItemIcon>
            <img
              src={leetCodeLogo}
              alt='LeetCode logo'
              height={'25px'}
              width={'25px'}
            />
          </ListItemIcon>
          <ListItemText primary={'LeetCode'} />
        </Button>
      </ListItem>
      <ListItem key={'AWS'}>
        <Button
          onClick={() => {
            console.log('AWS clicked')
            props.setContentsType('aws')
            props.setShowCards(true)
            setSearchParams({ item: 'aws' })
          }}
        >
          <ListItemIcon>
            <CloudQueue
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText primary={'AWS'} />
        </Button>
      </ListItem>
      <ListItem key={'Others'}>
        <Button
          onClick={() => {
            console.log('Others clicked')
            props.setContentsType('others')
            props.setShowCards(true)
            setSearchParams({ item: 'others' })
          }}
        >
          <ListItemIcon>
            <img
              src={LaptopLogo}
              alt='Laptop logo'
              height={'25px'}
              width={'25px'}
            />
          </ListItemIcon>
          <ListItemText primary={'Others'} />
        </Button>
      </ListItem>
    </>
  )
}

export default Items