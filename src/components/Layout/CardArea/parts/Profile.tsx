import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import profilePic from '../../../../assets/profile.jpeg'

export default function ClippedDrawer() {

  const classes = useStyles()

  return (
    <>
      <Card className={classes.back}>
        <CardContent>
          <Typography variant="h5" component="div">
            Jun Ueno
          </Typography>
          <Typography>
            <img 
              src={profilePic}
              style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
                overflow: 'hidden',
                borderWidth: 3,
                borderColor: 'red',
              }}
            />
          </Typography>
          <Typography>
            <br />
            Web Software Developer / Project Manager
          </Typography>
          <Typography variant="body2">
            "If you feel like the dumbest person in the room then you're in the correct room."
          </Typography>
        </CardContent>
        <CardActions>
          <Button classes={{ text: classes.learnMore }} >
            Learn More
          </Button>
        </CardActions>
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