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
      <ListItem key={'React'}>
        <Button
          classes={{ text: classes.text }}
          onClick={() => {
            console.log('React clicked')
            props.setContentsType('react')
            props.setShowCards(true)
            setSearchParams({item: 'react'})
          }}
        >
          <ListItemIcon>
            <img
              src={reactLogo}
              alt='React logo'
              height={'25px'}
              width={'25px'}
            />
          </ListItemIcon>
          <ListItemText primary={'React'} />
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
      <ListItem key={'Rust'}>
        <Button
          classes={{ text: classes.text }}
          onClick={() => {
            console.log('Rust clicked')
            props.setContentsType('rust')
            props.setShowCards(true)
            setSearchParams({item: 'rust'})
          }}
        >
          <ListItemIcon>
          <img
              src={rustLogo}
              alt='Rust logo'
              height={'25px'}
              width={'25px'}
            />
          </ListItemIcon>
          <ListItemText primary={'Rust'} />
        </Button>
      </ListItem>
      <ListItem key={'Math'}>
        <Button
          classes={{ text: classes.text }}
          onClick={() => {
            console.log('Math clicked')
            props.setContentsType('math')
            props.setShowCards(true)
            setSearchParams({item: 'math'})
          }}
        >
          <ListItemIcon>
          <img
              src={sigma}
              alt='Math logo'
              height={'25px'}
              width={'25px'}
            />
          </ListItemIcon>
          <ListItemText primary={'Math'} />
        </Button>
      </ListItem>
      <ListItem key={'LPIC'}>
        <Button
          classes={{ text: classes.text }}
          onClick={() => {
            console.log('LPIC clicked')
            props.setContentsType('lpic')
            props.setShowCards(true)
            setSearchParams({ item: 'lpic' })
          }}
        >
          <ListItemIcon>
            <img
              src={LPICLogo}
              alt='LPIC logo'
              height={'25px'}
              width={'25px'}
            />
          </ListItemIcon>
          <ListItemText primary={'LPIC'} />
        </Button>
      </ListItem>
    </>
  )
}

export default Items