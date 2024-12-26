import './style.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Carts from './carts'
import Contacts from './Contacts'
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Body/>} />
      <Route path='/carts' element={<Carts/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
