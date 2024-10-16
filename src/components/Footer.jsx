import React from 'react'

const Footer = () => {
  return (
    <div className='px-4 md:px-10 bg-gray-100 pt-5'>
      <div className='flex flex-wrap gap-10 md:gap-0 w-full justify-between '>
    <div className="logo flex flex-col md:w-[40%]">
        {/* <h2 className='text-1xl md:text-3xl font-semibold text-blue-700 mb-5'>Logo</h2> */}
        <img className='w-28 md:36 my-3' src="/Images/logo.jfif" alt="" />
        <p className='text-xs text-gray-500 md:text-sm md:w-[70%]'>Aciano Technologies specializes in AI development and IT staff augmentation, offering top talent and customized services in resource outsourcing, cloud automation, IoT solutions, and Microsoft D365 consultancy.</p>
    </div>
    <div className="services w-[40%] md:w-[30%]">
        <h3 className='text-1xl md:text-3xl font-semibold text-blue-700 mb-5'>Services</h3>
    <p className='text-gray-500 text-xs md:text-sm my-1'>Web Development</p>
    <p className='text-gray-500 text-xs md:text-sm my-1'>Ecommerce Solutions</p>
    <p className='text-gray-500 text-xs md:text-sm my-1'>Custom Application Development</p>
    <p className='text-gray-500 text-xs md:text-sm my-1'>Mobile App Development</p>
    <p className='text-gray-500 text-xs md:text-sm my-1'>Graphic Designing</p>
    <p className='text-gray-500 text-xs md:text-sm my-1'>Digital Marketing</p>
    </div>
    <div className="reach-us flex flex-col w-[40%] md:w-[30%]">
        <h3 className='text-1xl md:text-3xl font-semibold text-blue-700 mb-5'>Reach  us</h3>
    <p className='text-gray-500 text-xs md:text-sm my-1'>Suite No 801, Emarah Suites, Shahrah-e-Faisal, Opposite FTC, SMCHS Karachi</p>
    <p className='text-gray-500 text-xs md:text-sm my-1'>support@aciano.net</p>
    <p className='text-gray-500 text-xs md:text-sm my-1'>+1 (312) 809 0697</p>
    </div>
</div>
<div className='subfooter py-6 flex flex-col'>
  <div className="line w-full h-[1px]  mb-3 bg-slate-500"></div>
    <p className='text-gray-500 text-center text-sm'>Copyright © 2024 – Aciano Technologies. All rights reserved</p>
</div>
</div>
  )
}

export default Footer