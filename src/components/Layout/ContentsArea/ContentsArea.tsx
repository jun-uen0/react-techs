import { useEffect, useState, Dispatch, SetStateAction } from "react"
import ContentCards from "./ContentCards/ContentCards"
import Content from "./Content/Content"

// @todo mv type declaration to types.ts
type ContentsAreaProps = {
  setShowCards: Dispatch<SetStateAction<boolean>>
  showCards: boolean
  isEnglish: boolean
  contentsType: 'algorithms' | 'react' | 'leetcode' | 'aws'
}

const ContentsArea: React.FC<ContentsAreaProps> = (props) => {

  const contents = require(`../../../contents/${props.contentsType}.json`)

  const [contentNumber, setContentNumber] = useState(() => {
    const contentNumber = localStorage.getItem('contentNumber')
    return JSON.parse(contentNumber as string) as number ?? -1
  })
  useEffect(() => {
    localStorage.setItem('contentNumber', JSON.stringify(contentNumber))
  }, [contentNumber])

  return (
    <>
      {props.showCards 
      ? <ContentCards
          setShowCards={props.setShowCards}
          setContentNumber={setContentNumber}
          contents={contents}
        />
      : <Content
          setShowCards={props.setShowCards}
          content={contents[contentNumber]}
          isEnglish={props.isEnglish}
        />}
    </>
  )
}

export default ContentsArea