import Box from '@material-ui/core/Box'
import ContentCard from './parts/ContentCard'
import { contentType, ContentCardsProps } from '../../../types'

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