import Layout from './components/Layout/Layout'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={< Layout />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App