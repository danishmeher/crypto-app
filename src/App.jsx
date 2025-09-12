import React from 'react'
import Navbar from './components/navbar'
import {Routes , Route} from "react-router-dom"
import Home from "./components/home"
import Footer from './components/footer'
import Coin from './components/coin'
const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinid' element={<Coin/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App