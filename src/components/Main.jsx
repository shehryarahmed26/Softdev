import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='flex justify-center items-center px-10 w-full'>
        <div className="left">
        <h2 className='text-7xl min-w-[530px] text-center text-gray-800'>We Create <span className='main-span font-bold'>Meaningful</span> Experiences</h2>
        </div>
        <div className="right flex flex-col gap-5 border bottom-2 px-4">
            <div className="ecommerce  flex flex-col gap-5 my-5 mt-10">
                <img className='w-[60px]' src="/Images/eCommerce.svg" alt="" />
            <h3 className='text-5xl'><span className='main-span'>Ecommerce</span> Development</h3>
            <p>Artificial Intelligence has become as essential part of every IT service in today’s world. In this dire situation, Aciano technologies provide unmatched AI development services. Our AI professionals specialize in developing custom AI solutions to meet your specific business requirements. Our services include:</p>
               <ul>
                <li>AI consulting and planning</li>
                <li>Machine learning solutions</li>
                <li>AI integration services</li>
                <li>AI integration services</li>
                <li>AI integration services</li>
                <li>AI integration services</li>
               </ul>
            </div>
            <div className="web flex flex-col gap-5 pb-10">
            <img className='w-[60px]' src="/Images/web-development.svg" alt="" />
            <h3 className='text-5xl'><span className='main-span'>Custom Web</span> Development</h3>
            <p>Artificial Intelligence has become as essential part of every IT service in today’s world. In this dire situation, Aciano technologies provide unmatched AI development services. Our AI professionals specialize in developing custom AI solutions to meet your specific business requirements. Our services include:</p>
            <p>As one of the best Outsourcing companies we ensure seamless onboarding of these resources with unbelievable costing that will blow your mind and ease your work to an unimaginable extent.</p>
            <p>Contact us now and let’s get started!</p>
            </div>
        </div>
    </div>
  )
}

export default Main