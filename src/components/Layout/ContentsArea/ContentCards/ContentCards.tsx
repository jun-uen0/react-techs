import { Dispatch, SetStateAction } from 'react'
import Box from '@material-ui/core/Box'
import ContentCard from './parts/ContentCard'

// @todo: date type must be other file 
type contentType = {
  title: string
  user: string
  repo: string
  branch: string
  file: string
  description: string
}

// @todo in other file
type ContentCardsProps = {
  setShowCards: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  contents: Array<contentType>
}

const ContentCards: React.FC<ContentCardsProps> = (props) => {
  return (
    <>
      <Box>
        {props.contents.map((content:contentType, idx:number) =>{
          return (
            <ContentCard
              key={idx} // To avoid warning
              idx={idx}
              title={content.title}
              description={content.description}
              setShowCards={props.setShowCards}
              setContentNumber={props.setContentNumber}
            />
          )
        })}
      </Box>
    </>
  )
}

export default ContentCards