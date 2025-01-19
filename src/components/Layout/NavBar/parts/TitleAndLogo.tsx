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
            className={classes.customFontButton} // 特別なスタイルを適用
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
  customFontButton: {
    fontFamily: '"Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Std", "Arial", sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem', // 必要に応じて調整
  },
}))

export default TitleAndlogo