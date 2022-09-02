import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import profilePic from '../../../../assets/profile_with_round.png'
import Sns from './Sns'

const ClippedDrawer: React.FC = () => {

  const classes = useStyles()

  return (
    <>
      <Card className={classes.back}>
        <CardContent>
          <Typography>
            <img 
              src={profilePic}
              style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
              }}
            />
          </Typography>
          <span style={{ marginLeft: 16}} />
          <Typography variant="h5" component="div">
            Jun Ueno
          </Typography>
          <span style={{ marginLeft: 16}} />
          <Sns />
          <Typography>
            <br />
            Web Software Developer / Project Manager
          </Typography>
          <span style={{ marginLeft: 16}} />
          <Typography variant="body2">
            "If you feel like the dumbest person in the room then you're in the correct room."
          </Typography>
        </CardContent>
        <span style={{ marginLeft: 16}} />
      </Card>
      <span style={{ marginLeft: 16}} />
    </>
  )
}

const useStyles = makeStyles({
  back: {
    background: "#091c33",
    color : '#ffffff',
  },
  learnMore: {
    background: "#ffffff",
    color : '#091c33',
    margin: '10px',
  },
})

export default ClippedDrawer