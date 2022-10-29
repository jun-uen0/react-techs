import Layout from './components/Layout/Layout'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// input onChange handler
// return argument with space every 4 digits
const formatCardNumber = (value: string) => {
  const cardNumber = value.replace(/\s/g, '')
  console.log(cardNumber)
  const cardNumberArray = cardNumber.match(/.{1,4}/g)
  console.log(cardNumberArray)
  console.log(cardNumberArray?.join(' '))
  return cardNumberArray ? cardNumberArray.join(' ') : ''
}

const App: React.FC = () => {
  return (
    <>
    <input
      type="number"
      onChange={(e) => {
        console.log(e.target.value)
      }}
    >
    </input>
    <button>
      button
    </button>


      <Router>
        <Routes>
          <Route path='/' element={< Layout />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App