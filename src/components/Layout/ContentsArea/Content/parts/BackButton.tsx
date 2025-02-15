import { BackButtontProps } from '../../../../types'
const BackButton: React.FC<BackButtontProps> = (props) => {
  return (
    <button
      onClick={() => {
        if (props.setShowCards) props.setShowCards(true)
      }}
    >
      ← Back
    </button>
  )
}

export default BackButton