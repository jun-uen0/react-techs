import { useEffect, useState } from "react"
import ContentCards from "./ContentCards/ContentCards"
import Content from "./Content/Content"
import { ContentsAreaProps } from "../../types"

const ContentsArea: React.FC<ContentsAreaProps> = (props) => {
  const contents = require(`../../../contents/${props.contentsType}.json`)

  const [contentNumber, setContentNumber] = useState(() => {
    if (props.contentsType === "about") {
      return 0
    }
    const savedContentNumber = localStorage.getItem('contentNumber')
    return JSON.parse(savedContentNumber as string) as number ?? -1
  })

  useEffect(() => {
    localStorage.setItem('contentNumber', JSON.stringify(contentNumber))
  }, [contentNumber])

  const validContentNumber = contentNumber >= 0 && contentNumber < contents.length ? contentNumber : 0
  const selectedContent = contents[validContentNumber]

  return (
    <>
      {props.contentsType === "about" || !props.showCards
        ? <Content
          setShowCards={props.setShowCards}
          content={selectedContent}
          selectedLanguage={props.selectedLanguage}
        />
        : <ContentCards
          setShowCards={props.setShowCards}
          setContentNumber={setContentNumber}
          contents={contents}
        />
      }
    </>
  )
}

export default ContentsArea