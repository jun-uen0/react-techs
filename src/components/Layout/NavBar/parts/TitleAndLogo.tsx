import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const TitleAndlogo: React.FC = () => {

  const classes = useStyles()

  const titleClick = () => {
    console.log('isTitleClicked is called')
  }

  return (
    <>
      <Typography variant="subtitle1" className={classes.title}>
        <Grid container justifyContent="center">
          <Button
            onClick={titleClick}
            color="inherit"
          >
            Jun Tech
          </Button>
        </Grid>
      </Typography>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
}))

export default TitleAndlogo