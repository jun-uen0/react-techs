import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { ContentCardProps } from '../../../../types'
import { useStyles } from '../../../../theme'

const ContentCard: React.FC<ContentCardProps> = (props) => {

  const classes = useStyles()

  return (
    <>
      <Card className={classes.back}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography>
            <br />
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            classes={{ text: classes.learnMore }}
            onClick={() => {
              props.setShowCards(false)
              props.setContentNumber(props.idx)
            }}
          >
            Read
          </Button>
        </CardActions>
      </Card>
      <span style={{ marginLeft: 16}} />
    </>
  )
}

export default ContentCard