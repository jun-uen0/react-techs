import { useState } from 'react'
import Layout from './Layout/Layout'
import ContentsArea from './ContentsArea/ContentsArea'

const App: React.FC = () => {

  const [isClicked, setIsClicked] = useState(false)
  const [fileName, setFileName] = useState('')

  return (
    <>
      <Layout />
    </>
  )
}

export default App