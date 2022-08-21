import makeStyles from '@material-ui/core/styles/makeStyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import leetCodeLogo from '../../../../assets/leetcode_white.png'
import Code from '@material-ui/icons/Code'
import CloudQueue from '@material-ui/icons/CloudQueue'

const Items: React.FC = () => {

  const classes = useStyles()

  return (
    <>
      <ListItem key={'React'}>
        <Button classes={{ text: classes.text }} >
          <ListItemIcon>
            <Code
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText primary={'React'} />
        </Button>
      </ListItem>
      <ListItem key={'LeetCode'}>
        <Button classes={{ text: classes.text }}>
          <ListItemIcon>
            <img
              src={leetCodeLogo}
              alt='LeetCode logo'
              height={'25px'}
              width={'25px'}
            />
          </ListItemIcon>
          <ListItemText primary={'LeetCode (not yet)'} />
        </Button>
      </ListItem>
      <ListItem key={'AWS'}>
        <Button classes={{ text: classes.text }} >
          <ListItemIcon>
            <CloudQueue 
              color='secondary'
            />
          </ListItemIcon>
          <ListItemText primary={'AWS (not yet)'} />
        </Button>
      </ListItem>
    </>
  )
}

const useStyles = makeStyles({
  text: {
    color: '#ffffff',
  },
})

export default Items