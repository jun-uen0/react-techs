import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import NavBar from "./NavBar/NavBar"
import SideBar from "./SideBar/SideBar"
import CardArea from "./CardArea/CardArea"
import ContentsArea from "./ContentsArea/ContentsArea"
import { contents } from "../types"
import { theme } from "../theme"

// Language
const SUPPORTED_LANGUAGES = ["en", "jp"]

const Layout: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { language, categoryName } = useParams<{ language: string; categoryName: string }>()

  // Set English as default
  const currentLanguage = language ?? 'en'

  const navigate = useNavigate()

  const validLanguage = SUPPORTED_LANGUAGES.includes(language || "") ? language! : "en"

  useEffect(() => {
    if (!SUPPORTED_LANGUAGES.includes(language || "")) {
      navigate(`/en/${categoryName}`, { replace: true })
    }
  }, [language, categoryName, navigate])

  const [selectedLanguage, setSelectedLanguage] = useState(validLanguage)
  const [contentsType, setContentsType] = useState<contents>(categoryName as contents)
  const [showCards, setShowCards] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="header">
          <NavBar
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
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
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                mobileOpen={mobileOpen}
                toggleDrawer={toggleDrawer}
              />
            </div>
          )}
          {isMobile && (
            <SideBar
              setContentsType={setContentsType}
              setShowCards={setShowCards}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              mobileOpen={mobileOpen}
              toggleDrawer={toggleDrawer}
            />
          )}
          <div className="contentsArea">
            <ContentsArea
              setShowCards={setShowCards}
              showCards={showCards}
              selectedLanguage={selectedLanguage}
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