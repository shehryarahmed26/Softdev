import React from 'react'
import CountUp from 'react-countup';

import './Counter.css'

const Counter = () => {
  return (
    <div className='counter-sec flex flex-wrap items-center px-4 md:px-10 justify-between'>
        <div className='flex w-[120px] flex-col gap-3 items-center justify-center text-center'>
        <h3 className='text-5xl md:text-[80px] counter font-semibold '><CountUp end={50} enableScrollSpy={true} />+</h3>
        <p className='text-1xl text-white md:text-3xl '>Projects Deliverd</p>
        </div>
        <div className='flex flex-col w-[120px] gap-3 items-center justify-center text-center'>
        <h3 className=' text-5xl md:text-[80px] counter font-semibold '><CountUp end={40} enableScrollSpy={true} />+</h3>
        <p className='text-1xl text-white md:text-3xl '>Happy Clients</p>
        </div>
        <div className='flex flex-col w-[120px] gap-3 items-center justify-center text-center'>
        <h3 className='text-5xl md:text-[80px] counter font-semibold '><CountUp end={20} enableScrollSpy={true} />+</h3>
        <p className='text-1xl text-white md:text-3xl '>Staff Members</p>
        </div>
        <div className='flex flex-col w-[120px] gap-3 items-center justify-center text-center'>
        <h3 className=' text-5xl md:text-[80px] counter font-semibold '>0<CountUp end={4} enableScrollSpy={true} />+</h3>
        <p className='text-1xl text-white md:text-3xl '>Years of Experience</p>
        </div>
    </div>
  )
}

export default Counter