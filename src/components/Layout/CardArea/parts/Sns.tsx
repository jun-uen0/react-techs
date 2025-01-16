import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Twitter from '@material-ui/icons/Twitter'
import GitHub from '@material-ui/icons/GitHub'
import YouTube from '@material-ui/icons/YouTube'

const SnsList = [<YouTube />, <GitHub />]

const SNS = () => {

  return (
    <>
      <Grid container justifyContent="center">
        <Button
          href="https://www.youtube.com/@JunTechJPN"
          target="_blank"
          color="secondary"
        >
          {SnsList[0]}
        </Button>
        <Button
          href="https://github.com/jun-uen0"
          target="_blank"
          color="secondary"
        >
          {SnsList[1]}
        </Button>
      </Grid>
    </>
  )
}

export default SNS