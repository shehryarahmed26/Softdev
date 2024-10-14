import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full justify-between px-10 bg-gray-200 py-8'>
        <div className="logo flex flex-col w-[30%]">
            <h2 className='text-3xl font-semibold text-blue-700 mb-5'>Logo</h2>
            <p className='text-gray-800'>Aciano Technologies specializes in AI development and IT staff augmentation, offering top talent and customized services in resource outsourcing, cloud automation, IoT solutions, and Microsoft D365 consultancy.</p>
        </div>
        <div className="services w-[30%]">
            <h3 className='text-3xl font-semibold text-blue-700 mb-5'>Services</h3>
        <p className='text-gray-800'>Web Development</p>
        <p className='text-gray-800'>Ecommerce Solutions</p>
        <p className='text-gray-800'>Custom Application Development</p>
        <p className='text-gray-800'>Mobile App Development</p>
        <p className='text-gray-800'>Graphic Designing</p>
        <p className='text-gray-800'>Digital Marketing</p>
        </div>
        <div className="reach-us flex flex-col w-[30%]">
            <h3 className='text-3xl font-semibold text-blue-700 mb-5'>Reach  us</h3>
        <p className='text-gray-800'>Suite No 801, Emarah Suites, Shahrah-e-Faisal, Opposite FTC, SMCHS Karachi</p>
        <p className='text-gray-800'>support@aciano.net</p>
        <p className='text-gray-800'>+1 (312) 809 0697</p>
        </div>
    </div>
  )
}

export default Footer