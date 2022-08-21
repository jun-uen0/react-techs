import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Twitter from '@material-ui/icons/Twitter'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'

const SnsList = [<Twitter />, <GitHub />, <LinkedIn />]

const SNS = () => {

  return (
    <>
      <Grid container justifyContent="center">
        <Button
          href="https://twitter.com/jun_uen0"
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
        <Button
          href="https://www.linkedin.com/in/jun-uen0"
          target="_blank"
          color="secondary"
        >
          {SnsList[2]}
        </Button>
      </Grid>
    </>
  )
}

export default SNS