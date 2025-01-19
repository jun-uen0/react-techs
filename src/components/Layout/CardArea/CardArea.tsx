import Box from '@material-ui/core/Box'
import Profile from './parts/Profile'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const CardArea = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Box
      sx={{
        order: isMobile ? 2 : 0,
        width: isMobile ? '100%' : '400px',
        maxWidth: '100%',
        margin: isMobile ? '0 auto' : '30px',
        overflow: 'hidden',
      }}
    >
      <Profile />
    </Box>
  )
}

export default CardArea