import React, { useEffect } from 'react'
import Banner from '../components/Banner'
const Services = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      <Banner title={'SERVICES'}/>
      <h3 className='text-2xl md:text-4xl text-center font-bold my-10'>Web Development</h3>
      <div className="web flex flex-col md:flex-row justify-between px-10">
        <div className="web-details flex flex-col gap-5  items-center md:items-start max-w-[550px]">
      <h3 className='text-2xl md:text-3xl font-bold text-center'>Build Your Websites Faster, Better & More Affordable</h3>
      <p className='text-xs text-center'>At SoftDev Innovations, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into lead generating machine that will boost your revenues.</p>
      <button className='text-xs hover:bg-blue-950 hover:text-white md:text-base px-3  md:px-6 rounded-lg border-blue-600 border-2 py-1 font-bold'>Get Free Consultation</button>
        </div>
        <img className='py-6' src="/Images/web-poster.png" alt="" />
      </div>
      <h3 className='text-2xl md:text-4xl text-center font-bold my-10 '>Ecommerce Solutions</h3>
      <div className="ecommerce flex flex-col md:flex-row justify-between px-10">
        <div className="ecommerce-details flex flex-col gap-5 items-center md:items-start max-w-[550px]">
      <h3 className='text-2xl md:text-3xl font-bold text-center'>Ecommerce Website Development Services to Boost your Online Sales</h3>
      <p className='text-xs text-center'>Looking for visually appealing and robust eCommerce websites that sell? Try Us! We offer secure and scalable eCommerce website development and maintenance services with unrivaled customization and seamless integrations. Our eCommerce solutions excellently tailored to your business needs and expectations. Whether you want to build a brand new store or modify the existing one into robust, sales-driven, and Intuitive online store, discuss with us!</p>
      <button className='text-xs hover:bg-blue-950 hover:text-white md:text-base px-3  md:px-6 rounded-lg border-blue-600 border-2 py-1 font-bold'>Get Free Consultation</button>
        </div>
        <img className='w-[500px] py-6' src="/Images/ecommerce-poster.png" alt="" />
      </div>
      <h3 className='text-2xl md:text-4xl text-center font-bold my-10'>Custom Software Solutions</h3>
      <div className="ecommerce flex flex-col md:flex-row justify-between px-10">
        <div className="ecommerce-details py-5 md:py-0 flex flex-col gap-5 items-center md:items-start max-w-[550px]">
      <h3 className='text-2xl md:text-3xl font-bold text-center'>Custom Software Management System According to your Busines</h3>
      <p className='text-xs text-center'>Looking for visually appealing and robust eCommerce websites that sell? Try Us! We offer secure and scalable eCommerce website development and maintenance services with unrivaled customization and seamless integrations. Our eCommerce solutions excellently tailored to your business needs and expectations. Whether you want to build a brand new store or modify the existing one into robust, sales-driven, and Intuitive online store, discuss with us!</p>
      <button className='text-xs hover:bg-blue-950 hover:text-white md:text-base px-3  md:px-6 rounded-lg border-blue-600 border-2 py-1 font-bold'>Get Free Consultation</button>
        </div>
        <img className='w-[300px] md:w-[500px]' src="/Images/claud.png" alt="" />
      </div>
    </div>
  )
}

export default Services