import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <div className='bg-slate-900'>
         <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}
