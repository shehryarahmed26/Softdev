import React from 'react'
import './Expertise.css'

const Expertise = () => {
  return (
    <div>
        <h3 className='text-3xl md:text-7xl font-semibold px-5 text-center md:text-left md:px-10 my-10'>Our <span className='expertise-span'>Expertise</span></h3>
        <div className="services flex flex-col justify-center items-center">
            <div className="service md:border flex flex-col md:flex-row w-full py-3 px-5 md:px-10 justify-between  items-center">
                <div className="title flex items-center gap-2 md:gap-10 w-[100%]"><img className='w-[40px] md:w-[60px]' src="/Images/web-development.svg" alt="" /> <span className='expertise-span text-lg md:text-2xl font-semibold'>Website Development</span></div>
                <p className='text-sm md:text-base text-gray-800'>SoftDev specializes in creating responsive, high-performance websites using modern technologies like React and Next.js. We deliver dynamic, scalable solutions.</p>
            </div>
            <div className="service flex flex-col md:flex-row md:border w-full py-3 px-5 md:px-10 justify-between  items-center">
                <div className="title flex items-center gap-2 md:gap-10 w-[100%]"><img className='w-[40px] md:w-[60px]' src="/Images/qa.svg" alt="" /> <span className='expertise-span text-lg md:text-2xl font-semibold'>Custom web Application Development</span></div>
                <p className='text-sm md:text-base text-gray-800'>SoftDev specializes in creating custom web applications that are scalable, secure, and tailored to meet specific business needs, delivering a seamless user experience.</p>
            </div>
            <div className="service flex flex-col md:flex-row md:border w-full  py-3 px-5 md:px-10 justify-between  items-center">
                <div className="title flex items-center gap-2 md:gap-10 w-[100%]"><img className='w-[40px] md:w-[60px]' src="/Images/eCommerce.svg" alt="" /> <span className='expertise-span text-lg md:text-2xl font-semibold'>Ecommerce Solutions</span></div>
                <p className='text-sm md:text-base text-gray-800'>SoftDev provides robust eCommerce solutions, ensuring secure transactions, user-friendly interfaces, and features that drive conversions and optimize business operations.</p>
            </div>
            <div className="service flex flex-col md:flex-row md:border w-full  py-3 px-5 md:px-10 justify-between  items-center">
                <div className="title flex items-center gap-2 md:gap-10 w-[100%]"><img className='w-[40px] md:w-[60px]' src="/Images/azure.svg" alt="" /> <span className='expertise-span text-lg md:text-2xl font-semibold'>Software Management System</span></div>
                <p className='text-sm md:text-base text-gray-800'>SoftDev develops software management systems that streamline processes, enhance productivity, and provide real-time data insights for better decision-making and efficiency.</p>
            </div>
        </div>
    </div>
  )
}

export default Expertise