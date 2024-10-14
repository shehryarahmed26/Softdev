import React from 'react'
import './Counter.css'

const Counter = () => {
  return (
    <div className='counter-sec flex items-center px-10 justify-between'>
        <div>
        <h3 className='text-[110px] counter font-semibold '>500+</h3>
        <p className='text-white text-3xl '>Projects Deliverd</p>
        </div>
        <div>
        <h3 className='text-[110px] counter font-semibold '>20+</h3>
        <p className='text-white text-3xl '>Apps Published</p>
        </div>
        <div>
        <h3 className='text-[110px] counter font-semibold '>25+</h3>
        <p className='text-white text-3xl '>Industries Serverd</p>
        </div>
        <div>
        <h3 className='text-[110px] counter font-semibold '>70+</h3>
        <p className='text-white text-3xl '>Tribe Strength</p>
        </div>
    </div>
  )
}

export default Counter