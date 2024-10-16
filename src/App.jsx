import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Services from './pages/Services'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
  )
}

export default App