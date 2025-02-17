import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import SideBar from "./SideBar/SideBar"
import CardArea from "./CardArea/CardArea"
import ContentsArea from "./ContentsArea/ContentsArea"
import { ThemeProvider } from "@mui/material/styles"
import { contents } from "../types"
import { theme } from "../theme"
import useMediaQuery from "@mui/material/useMediaQuery"

const Layout: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { categoryName } = useParams<{ categoryName: string }>()

  const [isEnglish, setIsEnglish] = useState(() => {
    return JSON.parse(localStorage.getItem("isEnglish") as string) ?? true
  })

  const [contentsType, setContentsType] = useState<contents>(() => {
    return JSON.parse(localStorage.getItem("contentsType") as string) ?? "algorithms"
  })
  useEffect(() => {
    if (categoryName) {
      setContentsType(categoryName as contents)
    }
  }, [categoryName])
  const [showCards, setShowCards] = useState(() => {
    return JSON.parse(localStorage.getItem("showCards") as string) ?? true
  })

  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="header">
          <NavBar
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
            isMobile={isMobile}
            toggleDrawer={toggleDrawer}
          />
        </div>
        <div className="container">
          {!isMobile && (
            <div className="sideBar">
              <SideBar
                setContentsType={setContentsType}
                setShowCards={setShowCards}
                mobileOpen={mobileOpen}
                toggleDrawer={toggleDrawer}
              />
            </div>
          )}
          {isMobile && (
            <SideBar
              setContentsType={setContentsType}
              setShowCards={setShowCards}
              mobileOpen={mobileOpen}
              toggleDrawer={toggleDrawer}
            />
          )}
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
      </ThemeProvider>
    </div>
  )
}
export default Layout