
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './Components/navBar'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Home from './Pages/Home'


function App() {


  return (

    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

      

    </div>
    
  )
}

export default App