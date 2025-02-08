import Box from '@material-ui/core/Box'
import Profile from './parts/Profile'

type CardAreaProps = {
  isMobile: boolean
}

const CardArea: React.FC<CardAreaProps> = (props) => {

  return (
    <Box
      sx={{
        order: props.isMobile ? 2 : 0,
        width: props.isMobile ? '100%' : '400px',
        maxWidth: '100%',
        margin: props.isMobile ? '01 auto' : '30px',
        overflow: 'hidden',
      }}
    >
      <Profile />
    </Box>
  )
}

export default CardArea