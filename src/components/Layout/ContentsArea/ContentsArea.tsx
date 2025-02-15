import { useState } from "react"
import { useParams } from "react-router-dom"
import ContentCards from "./ContentCards/ContentCards"
import Content from "./Content/Content"
import { ContentsAreaProps, contentType } from "../../types"

const ContentsArea: React.FC<ContentsAreaProps> = ({ setShowCards, showCards, isEnglish, contentsType }) => {
  const { categoryName } = useParams()
  const contents: contentType[] = require(`../../../contents/${categoryName}.json`)

  const [contentNumber, setContentNumber] = useState<number>(-1)

  return (
    <>
      {!showCards ? (
        <Content
          setShowCards={setShowCards}
          content={contents[contentNumber] ?? contents[0]}
          isEnglish={isEnglish}
        />
      ) : (
        <ContentCards
          contents={contents}
          setShowCards={setShowCards}
          setContentNumber={setContentNumber}
        />
      )}
    </>
  )
}

export default ContentsArea