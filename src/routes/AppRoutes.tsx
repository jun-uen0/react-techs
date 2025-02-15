import {  useState, useEffect, Dispatch, SetStateAction } from "react"
import { Routes, Route, Navigate, useParams } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { contentType } from "../components/types"
import contentsData from "../contents"

const AppRoutes = () => {
  const [showCards, setShowCards] = useState(() => {
    const showCards = localStorage.getItem('showCards')
    return JSON.parse(showCards as string) as boolean ?? true
  })
  useEffect(() => {
    localStorage.setItem('showCards', JSON.stringify(showCards))
  }, [showCards])
  const [isEnglish, setIsEnglish] = useState(() => {
    const isEnglish = localStorage.getItem('isEnglish')
    return JSON.parse(isEnglish as string) as boolean ?? true
  })
  useEffect(() => {
    localStorage.setItem('isEnglish', JSON.stringify(isEnglish))
  }, [isEnglish])

  return (
    <Routes>
      <Route path="/category/:categoryName" element={<Layout />} />
      <Route path="/category/:categoryName/*" element={<ContentWrapper />} />
      <Route path="*" element={<Navigate to="/category/about" />} />
    </Routes>
  )
}

export default AppRoutes

const ContentWrapper = ({
  showCards,
  setShowCards,
  isEnglish,
  setIsEnglish
}: {
  showCards?: boolean
  setShowCards?: Dispatch<SetStateAction<boolean>>
  isEnglish?: boolean
  setIsEnglish?: Dispatch<SetStateAction<boolean>>
}) => {
  const { categoryName, "*": contentPath } = useParams()
  const decodedContentName = decodeURIComponent(contentPath || "")

  if (!categoryName || !decodedContentName) {
    return <Navigate to="/category/about" />
  }

  const contents: contentType[] = contentsData[categoryName] || []
  const content = contents.find(c => c.path === decodedContentName)

  if (!content) {
    return <Navigate to={`/category/${categoryName}`} />
  }

  return (
    <Layout
      showCards={showCards}
      setShowCards={setShowCards}
      isEnglish={isEnglish}
      content={content}
      setIsEnglish={setIsEnglish}
    />
  )
}