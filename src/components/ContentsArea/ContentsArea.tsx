import ContentCards from "./ContentCards/ContentCards"
import Content from "./Contents/Contents"

const ContentsArea: React.FC = () => {

  const handle = true

  return (
    <>
      {handle ? <ContentCards /> : <Content />}
    </>
  )
}
export default ContentsArea