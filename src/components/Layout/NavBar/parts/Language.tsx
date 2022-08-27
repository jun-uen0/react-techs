import { Dispatch, SetStateAction } from 'react'
import Button from '@material-ui/core/Button'
import language from '../../../../assets/language_icon_white.png'

type LanguageProps = {
  isEnglish: boolean
  setIsEnglish: Dispatch<SetStateAction<boolean>>
}

const Language: React.FC<LanguageProps> = (props) => {

  const languageClick = () => {
    console.log('languageClick is called')
    props.setIsEnglish(!props.isEnglish)
  }

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