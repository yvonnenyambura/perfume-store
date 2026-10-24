import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import CheckOutPage from './pages/CheckOutPage'
import OrderConfirmation from './pages/OrderConfirmation'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkoutpage" element={<CheckOutPage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/order-confirmation" element={<OrderConfirmation/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>
    </>
  )
}

export default App