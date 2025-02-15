import { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar'
import CardArea from './CardArea/CardArea'
import ContentsArea from "./ContentsArea/ContentsArea"
import { ThemeProvider } from '@mui/material/styles' // 修正 ✅
import { contents, LayoutProps } from '../types'
import { theme } from '../theme'
import useMediaQuery from '@mui/material/useMediaQuery'

const Layout: React.FC<LayoutProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [contentsType, setContentsType] = useState((): contents => {
    const contentsType = localStorage.getItem('contentsType')
    return JSON.parse(contentsType as string) ?? 'algorithms'
  })
  useEffect(() => {
    localStorage.setItem('contentsType', JSON.stringify(contentsType))
  }, [contentsType])

  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}> {/* 修正 ✅ */}
        <div className="header">
          <NavBar
            isEnglish={props.isEnglish}
            setIsEnglish={props.setIsEnglish}
            isMobile={isMobile}
            toggleDrawer={toggleDrawer}
          />
        </div>
        <div className="container">
          {!isMobile && (
            <div className="sideBar">
              <SideBar
                setContentsType={setContentsType}
                setShowCards={props.setShowCards}
                mobileOpen={mobileOpen}
                toggleDrawer={toggleDrawer}
              />
            </div>
          )}
          {isMobile && (
            <SideBar
              setContentsType={setContentsType}
              setShowCards={props.setShowCards}
              mobileOpen={mobileOpen}
              toggleDrawer={toggleDrawer}
            />
          )}
          <div className="contentsArea">
            <ContentsArea
              setShowCards={props.setShowCards}
              showCards={props.showCards}
              isEnglish={props.isEnglish}
              contentsType={contentsType}
            />
          </div>
          <div className="cardArea">
            <CardArea />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}
export default Layout