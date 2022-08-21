import { useState, useEffect } from "react"
import ContentCards from "./ContentCards/ContentCards"
import Content from "./Content/Content"

const ContentsArea: React.FC = () => {

  // @todo: 'contents' must be state value ([react,leetcode,aws, etc...]) with type def
  // Temporary only 'react'
  const contents = require('../../contents/react.json')
  
  // Get value of state showCards from local storage
  // Return true when local storage has nothing
  // @todo the codes must be in other file (Redux?)
  const [showCards, setShowCards] = useState(() => {
    const showCards = localStorage.getItem('showCards')
    return JSON.parse(showCards as string) as boolean ?? true
  })
  const [contentNumber, setContentNumber] = useState(() => {
    const contentNumber = localStorage.getItem('contentNumber')
    return JSON.parse(contentNumber as string) as number ?? -1
  })

  // Change value of showCards in local storage when state showCards is changed
  useEffect(() => {
    localStorage.setItem('showCards', JSON.stringify(showCards))
  }, [showCards])
  useEffect(() => {
    localStorage.setItem('contentNumber', JSON.stringify(contentNumber))
  }, [contentNumber])

  return (
    <>
      {showCards 
      ? <ContentCards
          setShowCards={setShowCards}
          setContentNumber={setContentNumber}
          contents={contents}
        />
      : <Content
          setShowCards={setShowCards}
          content={contents[contentNumber]}
        />}
    </>
  )
}

export default ContentsArea