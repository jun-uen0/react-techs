import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const TitleAndLogo: React.FC = () => {
  const titleClick = () => {
    console.log('isTitleClicked is called')
  }

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center", flexGrow: 1 }}>
        <Grid container justifyContent="center">
          <Button
            onClick={titleClick}
            sx={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "1.5rem" }}
            color="inherit"
          >
            Jun's blog
          </Button>
        </Grid>
      </Typography>
    </>
  )
}

export default TitleAndLogo