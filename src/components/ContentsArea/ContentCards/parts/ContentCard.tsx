import { Dispatch, SetStateAction } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

// @todo in other file
type ContentCardProps = {
  setShowCards: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  idx: number
  title: string
  description: string
}

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

// @todo: theme def must be in different file
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