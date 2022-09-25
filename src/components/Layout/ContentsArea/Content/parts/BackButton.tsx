import { BackButtontProps } from '../../../../types'
const BackButton: React.FC<BackButtontProps> = (props) => {
  return (
    <button
      onClick={() => {
        props.setShowCards(true)
      }}
    >
      ← Back
    </button>
  )
}

export default BackButton