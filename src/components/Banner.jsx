import React from 'react'
import './Banner.css'


const Banner = ({title}) => {

  return (
    <div className='banner flex h-[100px] md:h-[170px] items-center justify-center'>
        <h3 className='text-center text-2xl md:text-5xl font-bold text-white relative z-10'>{title}</h3>
    </div>
  )
}

export default Banner