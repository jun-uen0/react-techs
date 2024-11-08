import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import profilePic from '../../../../assets/profile_with_round.png'
import Sns from './Sns'
import { useStyles } from '../../../theme'

const Profile: React.FC = () => {

  const classes = useStyles()

  return (
    <>
      <Card className={classes.back}>
        <CardContent>
          <Typography>
            <img
              alt='profile'
              src={profilePic}
              style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
              }}
            />
          </Typography>
          <span style={{ marginLeft: 16 }} />
          <Typography variant="h5" component="div">
            Jumpei Ueno
          </Typography>
          <Typography>
            Cloud Architect
          </Typography>
          <span style={{ marginLeft: 16 }} />
          <Sns />
          <Typography>
            <br />
            #AWS #DevOps
          </Typography>
          <span style={{ marginLeft: 16 }} />
          <Typography variant="body2">
            "If you feel like the dumbest person in the room,
            <br />
            you're in the right room."
          </Typography>
        </CardContent>
        <span style={{ marginLeft: 16 }} />
      </Card>
      <span style={{ marginLeft: 16 }} />
    </>
  )
}

export default Profile