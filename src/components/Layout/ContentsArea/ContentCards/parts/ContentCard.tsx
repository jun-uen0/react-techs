import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { ContentCardProps } from '../../../../types'

const ContentCard: React.FC<ContentCardProps> = (props) => {
  return (
    <>
      <Card sx={{ background: "#ffffff", color: "#000000", p: 2 , mb: 3}}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mt: 1 }}>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ background: "#00a2ff", color: "#ffffff", mt: 1 }}
            onClick={() => {
              props.setShowCards(false)
              props.setContentNumber(props.idx)
            }}
          >
            Read
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ContentCard