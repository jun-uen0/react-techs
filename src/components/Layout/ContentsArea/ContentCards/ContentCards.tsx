import Box from '@material-ui/core/Box'
import ContentCard from './parts/ContentCard'

const ContentCards: React.FC = () => {

  return (
    <>
      <Box>
        {/* @todo For next task, get data by using forEach */}
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </Box>
    </>
  )
}

export default ContentCards