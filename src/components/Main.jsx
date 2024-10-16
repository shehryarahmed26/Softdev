import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center px-2 w-full'>
        <div className="left">
        <h2 className='text-3xl mt-10 md:my-0 md:text-7xl md:min-w-[530px] text-center text-gray-800'>We Create <span className='main-span font-bold'>Meaningful</span> Experiences</h2>
        </div>
        <div className="right flex flex-col gap-2 md:gap-5 md:border bottom-2 px-4">
            <div className="ecommerce  flex flex-col gap-2 md:gap-5 my-5 mt-10">
                <img className='w-[40px] md:w-[60px]' src="/Images/eCommerce.svg" alt="" />
            <h3 className='text-2xl md:text-5xl'><span className='main-span'>Ecommerce</span> Development</h3>
            <p className='text-gray-500'>Artificial Intelligence has become as essential part of every IT service in today’s world. In this dire situation, Aciano technologies provide unmatched AI development services. Our AI professionals specialize in developing custom AI solutions to meet your specific business requirements. Our services include:</p>
               {/* <ul>
                <li>AI consulting and planning</li>
                <li>Machine learning solutions</li>
                <li>AI integration services</li>
                <li>AI integration services</li>
                <li>AI integration services</li>
                <li>AI integration services</li>
               </ul> */}
            </div>
            <div className="web flex flex-col gap-2 md:gap-5 pb-10">
            <img className='w-[40px] md:w-[60px]' src="/Images/web-development.svg" alt="" />
            <h3 className='text-2xl md:text-5xl'><span className='main-span'>Custom Web</span> Development</h3>
            <p className='text-gray-500'>Artificial Intelligence has become as essential part of every IT service in today’s world. In this dire situation, Aciano technologies provide unmatched AI development services. Our AI professionals specialize in developing custom AI solutions to meet your specific business requirements. Our services include:</p>
            <p className='text-gray-500'>Contact us now and let’s get started!</p>
            </div>
        </div>
    </div>
  )
}

export default Main