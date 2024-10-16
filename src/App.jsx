import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Services from './pages/Services'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Nav from './components/Nav'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App