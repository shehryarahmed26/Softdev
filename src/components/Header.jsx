import React, { useState } from 'react'
import './Header.css'
const Header = () => {
  const [navcolor, setnavcolor] = useState(false)
  window.addEventListener('scroll', () => {
    if(window.scrollY > 30 ) {
      setnavcolor('bg-white')      
    }
    else {
      setnavcolor(false)
    }
  })
  return (
    <div className='header pb-10 '>
      <nav className={`flex px-14 justify-between fixed w-full ${navcolor ? 'text-black shadow' : 'text-white shadow-none'} top-0 z-40 ${navcolor} ${navcolor ? 'h-12' : 'h-16'} transition-all duration-75 ease-in-out items-center mb-5`}>
    <div className="logo relative z-50">Logo</div>      
    <div className="links flex gap-8 relative">
        <p>Home</p>
        <p>Aboutus</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>Contactus</p>
    </div>
    </nav>
    <div className="hero-section px-10 relative z-10">
      <h1 className='text-7xl max-w-[400px] font-bold text-white pt-24'>Empowering <span className='header-span'>Innovation</span> with latest technologies</h1>
      <p className='text-white my-4'>Scale up your development teams with reliable, friendly, and proactive experts.
</p>
      <button className='text-white bg-black px-6 py-1 rounded-full my-3 border-blue-700 border-2 hover:bg-blue-500 hover:border-none'>Lets Discuss</button>
    </div>

    </div>
  )
}

export default Header