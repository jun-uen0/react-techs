import { Dispatch, SetStateAction } from 'react'
import Button from '@mui/material/Button'
import language from '../../../../assets/language_icon_black.png'
import { LanguageProps } from '../../../types'

const Language: React.FC<LanguageProps> = (props) => {

  const languageClick = () => {
    props.setIsEnglish
      ? props.setIsEnglish(!props.isEnglish)
      : console.error("Can not change the language")
  }

  return (
    <>
      <Button
        color='primary'
        onClick={languageClick}
      >
        <img
          src={language}
          alt='language logo'
          height={'25px'}
          width={'25px'}
        />
      </Button>
    </>
  )
}

export default Language