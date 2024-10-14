import React from 'react'
import './Expertise.css'

const Expertise = () => {
  return (
    <div>
        <h3 className='text-7xl font-semibold px-10 my-10'>Our <span className='expertise-span'>Expertise</span></h3>
        <div className="services flex flex-col">
            <div className="service border flex w-full py-3 px-10 justify-between  items-center">
                <div className="title flex items-center gap-10 w-[80%]"><img src="/Images/azure.svg" alt="" /> <span className='expertise-span text-3xl font-semibold'>AI Development</span></div>
                <p className=' text-gray-800'>Aciano Technologies provides AI solutions using the latest platforms like ChatGPT4, Claude and DALL-E to stay ahead of the curve.</p>
            </div>
            <div className="service flex border w-full py-3 px-10 justify-between  items-center">
                <div className="title flex items-center gap-10 w-[80%]"><img src="/Images/azure.svg" alt="" /> <span className='expertise-span text-3xl font-semibold'>AI Development</span></div>
                <p className='text-gray-800'>Aciano Technologies provides AI solutions using the latest platforms like ChatGPT4, Claude and DALL-E to stay ahead of the curve.</p>
            </div>
            <div className="service flex border w-full  py-3 px-10 justify-between  items-center">
                <div className="title flex items-center gap-10 w-[80%]"><img src="/Images/azure.svg" alt="" /> <span className='expertise-span text-3xl font-semibold'>AI Development</span></div>
                <p className=' text-gray-800'>Aciano Technologies provides AI solutions using the latest platforms like ChatGPT4, Claude and DALL-E to stay ahead of the curve.</p>
            </div>
            <div className="service flex border w-full  py-3 px-10 justify-between  items-center">
                <div className="title flex items-center gap-10 w-[80%]"><img src="/Images/azure.svg" alt="" /> <span className='expertise-span text-3xl font-semibold'>AI Development</span></div>
                <p className=' text-gray-800'>Aciano Technologies provides AI solutions using the latest platforms like ChatGPT4, Claude and DALL-E to stay ahead of the curve.</p>
            </div>
        </div>
    </div>
  )
}

export default Expertise