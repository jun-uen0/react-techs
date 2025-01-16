import Box from '@material-ui/core/Box'
import Profile from './parts/Profile'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const CardArea = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Box
      sx={{
        order: isMobile ? 2 : 0,
        width: isMobile ? '80%' : '400px', // スマホでは幅を100%に設定
        margin: isMobile ? '0 auto' : '30px', // スマホで中央寄せ
      }}
    >
      <Profile />
    </Box>
  )
}

export default CardArea