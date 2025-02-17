import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout/Layout"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:language/:categoryName" element={<Layout />} />
        <Route path="*" element={<Navigate replace to="/en/about" />} />
      </Routes>
    </Router>
  )
}

export default App
