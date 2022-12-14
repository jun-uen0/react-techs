import { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import CardArea from './CardArea/CardArea'
import ContentsArea from "./ContentsArea/ContentsArea"
import { MuiThemeProvider } from '@material-ui/core/styles'
import { contents } from '../types'
import { theme } from '../theme'

const Layout: React.FC = () => {

  const [isEnglish, setIsEnglish] = useState(() => {
    const isEnglish = localStorage.getItem('isEnglish')
    return JSON.parse(isEnglish as string) as boolean ?? true
  })
  useEffect(() => {
    localStorage.setItem('isEnglish', JSON.stringify(isEnglish))
  }, [isEnglish])

  const [contentsType, setContentsType] = useState(():contents => {
    const contentsType = localStorage.getItem('contentsType')
    return JSON.parse(contentsType as string) ?? 'algorithms'
  })
  useEffect(() => {
    localStorage.setItem('contentsType', JSON.stringify(contentsType))
  }, [contentsType])

  const [showCards, setShowCards] = useState(() => {
    const showCards = localStorage.getItem('showCards')
    return JSON.parse(showCards as string) as boolean ?? true
  })
  useEffect(() => {
    localStorage.setItem('showCards', JSON.stringify(showCards))
  }, [showCards])

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div className="header">
          <NavBar
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
          />
        </div>
        <div className="container">
          <div className="sideBar">
            <SideBar
              setContentsType={setContentsType}
              setShowCards={setShowCards}
            />
          </div>
          <div className="contentsArea">
            <ContentsArea
              setShowCards={setShowCards}
              showCards={showCards}
              isEnglish={isEnglish}
              contentsType={contentsType}
            />
          </div>
          <div className="cardArea">
            <CardArea />
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  )
}

export default Layout