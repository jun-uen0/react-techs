import Box from '@material-ui/core/Box'
import ContentCard from './parts/ContentCard'

type contentType = {
  title: string
  description: string
}

const ContentCards: React.FC = () => {

  const contents = require('../../../contents/react.json')

  return (
    <>
      <Box>
        {contents.map((content:contentType) =>{
          return (
            <ContentCard
              title={content.title}
              description={content.description}
            />
          )
        })}
      </Box>
    </>
  )
}

export default ContentCards