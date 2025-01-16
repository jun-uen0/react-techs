import { useSearchParams } from 'react-router-dom'
import leetCodeLogo from '../../../../assets/leetcode_white.png'
import reactLogo from '../../../../assets/react-logo-white_transparent.png'
import rustLogo from '../../../../assets/rust-logo-white.png'
import sigma from '../../../../assets/sigma-white.png'
import LPICLogo from '../../../../assets/lpic_grayscale.png'
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
          classes={{ text: classes.text }}
          onClick={() => {
            console.log('Algorithms clicked')
            props.setContentsType('algorithms')
            props.setShowCards(true)
            setSearchParams({item: 'algorithms'})
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
          classes={{ text: classes.text }}
          onClick={() => {
            console.log('LeetCode clicked')
            props.setContentsType('leetcode')
            props.setShowCards(true)
            setSearchParams({item: 'leetcode'})
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
          classes={{ text: classes.text }}
          onClick={() => {
            console.log('AWS clicked')
            props.setContentsType('aws')
            props.setShowCards(true)
            setSearchParams({item: 'aws'})
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
    </>
  )
}

export default Items