import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

interface ContentCardProps {
  isClicked: boolean
}

const ContentCard: React.FC = (props) => {

  const classes = useStyles()

  return (
    <>
      <Card className={classes.back}>
        <CardContent>
          <Typography variant="h5" component="div">
            File Name
          </Typography>
          <Typography>
            <br />
            Summary
          </Typography>
          <Typography variant="body2">
            <br />
            Some lines in the file
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            classes={{ text: classes.learnMore }}
            // onClick={() => {
            //   props.isClicked = !props.isClicked
            // }}
          >
            Read
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

export default ContentCard