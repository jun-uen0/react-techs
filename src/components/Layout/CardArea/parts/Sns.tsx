import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import YouTube from '@mui/icons-material/YouTube'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import LeetCodeLogo from '../../../../assets/leetcode_black.png'
import X from '../../../../assets/x.png'
import Threads from '../../../../assets/threads.png'
import Note from '../../../../assets/note.png'

const snsLinks = [
  { icon: <GitHub />, link: "https://github.com/jun-uen0" },
  { icon: <LinkedIn />, link: "https://www.linkedin.com/in/jun-uen0" },
  { icon: <img src={LeetCodeLogo} alt="LeetCode" height="25px" />, link: "https://leetcode.com/u/jun-uen0" },
  { icon: <YouTube />, link: "https://www.youtube.com/@JunTechJPN" },
  { icon: <img src={Threads} alt="Threads" height="25px" />, link: "https://www.threads.net/@jun__ueno" },
  { icon: <img src={X} alt="X" height="25px" />, link: "https://x.com/jun_uen0" },
  { icon: <img src={Note} alt="Note" height="25px" />, link: "https://note.com/jun_uen0" },
]

const SNS = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ textAlign: 'center' }}>
      {snsLinks.map((sns, index) => (
        <Grid item xs={3} sm={3} key={index}>
          <Button
            href={sns.link}
            target="_blank"
            color="secondary"
            style={{ minWidth: '50px' }}
          >
            {sns.icon}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default SNS