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
            className={classes.customFontButton}
            color="inherit"
          >
            Jun's blog
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
  customFontButton: {
    fontFamily: '"sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
}))

export default TitleAndlogo