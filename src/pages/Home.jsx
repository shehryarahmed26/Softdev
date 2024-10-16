import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Counter from '../components/Counter'
import Expertise from '../components/Expertise'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <Counter/>
        <Expertise/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home