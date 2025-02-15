import { useNavigate, useParams } from 'react-router-dom'
import ContentCard from './parts/ContentCard'
import { contentType, ContentCardsProps } from '../../../types'

const ContentCards: React.FC<ContentCardsProps> = ({ contents, setShowCards, setContentNumber }) => {
  const navigate = useNavigate()
  const { categoryName } = useParams<{ categoryName: string }>()

  return (
    <>
      {contents.map((content: contentType, idx: number) => (
        <ContentCard
          key={idx}
          idx={idx}
          title={content.title}
          description={content.description}
          setShowCards={setShowCards}
          setContentNumber={setContentNumber}
          onClick={() => {
            if(setShowCards) setShowCards(false)
            setContentNumber(idx)
            navigate(`/category/${categoryName}/${content.path}`)
          }}
        />
      ))}
    </>
  )
}

export default ContentCards