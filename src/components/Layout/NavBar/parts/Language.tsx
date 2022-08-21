import Button from '@material-ui/core/Button'
import language from '../../../../assets/language_icon_white.png'

const languageClick = () => {
  console.log('languageClick is called')
}

const Language: React.FC = () => {
  return (
    <>
      <Button
        color='inherit'
        onClick={languageClick}
      >
        <img
          src={language}
          alt='LeetCode logo'
          height={'25px'}
          width={'25px'}
        />
      </Button>
    </>
  )
}

export default Language