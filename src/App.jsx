import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
function App() {
 

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
