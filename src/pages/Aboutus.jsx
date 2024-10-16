import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import {Accordion, AccordionItem} from "@nextui-org/react";


const Aboutus = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Banner title={'ABOUT US'}/>
      <div className="intro flex flex-col md:flex-row  justify-between px-4  items-center">
        <video className='w-[700px]' autoPlay loop muted src="/Videos/intro.mp4" type="video/mp4"> </video>
        <div className="itro-details flex flex-col gap-8">
        <h3 className='text-3xl font-bold text-center md:text-left'>About Our Company</h3>
        <p className='mb-8 md:mb-0'>Softdev Innovations is a high-tech software development company with over 10 years of experience in the IT industry. Our team of experienced IT professionals strives to provide our customers with incredible software solutions and implement their ideas digitally to help them achieve unimaginable growth. With this deadly combination of dedicated personnel and state-of-the-art technology, we take up the challenges and ensure budget-friendly services and timely delivery of every project.</p>
        </div>
      </div>
      <div className="choose-section bg-blue-900 py-8">
        <h3 className='text-center text-white font-bold mb-10 text-3xl'>Why Choose Us?</h3>
        <div className="accordians w-full flex flex-wrap justify-center items-center gap-5">
       <div className="accordian">
       <Accordion className='flex w-full' variant="shadow">
      <AccordionItem className='w-[320px] md:w-[550]' key="1" aria-label="Accordion 1" title="Fast Services">
      <p>We, at Softdev Innovations, put your success first and craft tailored solutions to cover all your business needs. Our talented team is capable of delivering everything from strategic consultation to smashing software solutions, cloud migration, system advancements, and DevOps.</p>
      </AccordionItem>
    </Accordion>
       </div>
       <div className="accordian">
       <Accordion className='flex w-full' variant="shadow">
      <AccordionItem className='w-[320px] md:w-[550]' key="1" aria-label="Accordion 1" title="Quality Management">
        <p>We never settle for anything less than perfection, which is why we go the extra mile to meet the highest quality in our IT services. Our extreme focus on information security and regulatory compliance is an add-on to our top-notch software development services.</p>
      </AccordionItem>
    </Accordion>
       </div>
       <div className="accordian">
       <Accordion className='flex w-full ' variant="shadow ">
      <AccordionItem className='w-[320px] md:w-[550]' key="1" aria-label="Accordion 1" title="Top Expertise">
        <p>Our team of 50+ professional developers, designers, and business analysts has unrivaled expertise in domains such as AI/ML, big data, extended reality, and the cloud.</p>
      </AccordionItem>
    </Accordion>
       </div>
       <div className="accordian">
       <Accordion className='flex w-full' variant="shadow">
      <AccordionItem className='w-[320px] md:w-[550]' key="1" aria-label="Accordion 1" title="Agility">
        <p>Our experienced IT professionals live and breathe agile principles. This quality boosts our potential to deliver value to your company by adapting to your changing business needs and user requirements along the way regardless of the challenges.</p>
      </AccordionItem>
    </Accordion>
       </div>
       <div className="accordian">
       <Accordion className='flex w-full' variant="shadow">
      <AccordionItem className='w-[320px] md:w-[550]' key="1" aria-label="Accordion 1" title="Innovation">
        <p>Our futuristic approach keeps us at the forefront of emerging technologies, helping us craft exceptional products for each customer, offering them a competitive edge, and taking their revenues sky-high.</p>
      </AccordionItem>
    </Accordion>
       </div>
        </div>
        <button className='text-white bg-blue-950 block text-center mx-auto px-6 py-1 rounded-full my-5 border-blue-700 border-2 hover:bg-blue-500 hover:border-blue-500'>Lets Discuss</button>
          
      </div>
      <div className="quoates flex flex-col md:flex-row my-10 justify-center gap-10 px-5 md:px-10">
            <div className="quote p-5 md:p-10 border-dashed border-2 border-blue-700 rounded-lg">
              <h3 className='font-bold text-2xl'>Our Vision</h3>
              <p>Realizing the full digital potential of our country and leading the digital revolution by creating massive economic opportunities for our tech-enabled masses.</p>
            </div>
            <div className="quote p-5 md:p-10 border-dashed border-2 border-blue-700 rounded-lg">
              <h3 className='font-bold text-2xl'>Our Mission</h3>
              <p>We strive to reinvent and optimize technology-building processes that are safe for people and the planet.</p>
            </div>

          </div>
          <div className="technologies flex flex-col gap-6 justify-center items-center py-10">
            <h3 className='font-bold text-2xl md:text-4xl text-center'>Technologies We Use</h3>
            <img className='w-[350px] md:w-[700px]' src="/Images/Technologies.png" alt="" />
          </div>
    </div>
  )
}

export default Aboutus