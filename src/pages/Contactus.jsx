import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import './Contact.css'

const Contactus = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  
  return (
    <div>
      <Banner title={'CONTACT US'}/>
      <h3 className='text-center text-2xl md:text-4xl font-bold my-6'>Please Fill the Foam Below</h3>
      
      <div className="form mx-auto pt-3 md:pt-8 pb-10 my-6 block max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
  <form action='https://formspree.io/f/movqqyrg' method='POST'>
    <div className=" gap-4">
      {/*First name input*/}
      <div className="relative mb-6" data-twe-input-wrapper-init="">
        <input value={username} onChange={(e) => setusername(e.target.value)}
          type="text"
          className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput123"
          aria-describedby="emailHelp123"
          placeholder="Username"
          name='username'
        /> { username ? '' :
        <label
          htmlFor="emailHelp123"
          className="pointer-events-none absolute left-3  top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
        >
          Username
        </label>
          } 

      </div>
      {/*Last name input*/}
      <div className="relative mb-6" data-twe-input-wrapper-init="">
        {/* <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput124"
          aria-describedby="emailHelp124"
          placeholder="Last name"
        /> */}
        {/* <label
          htmlFor="exampleInput124"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
        >
          Last name
        </label> */}
      </div>
    </div>
    {/*Email input*/}
    <div className="relative mb-6" data-twe-input-wrapper-init="">
      <input value={email} onChange={(e) => setemail(e.target.value)}
        type="email"
        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput125"
        placeholder="Email address"
        name='email'
      /> { email ? '' :
      <label
        htmlFor="exampleInput125"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
      >
        Email
      </label>
      }
    </div>
    {/*Password input*/}
    <div className="relative mb-6" data-twe-input-wrapper-init="">
      {/* <
        type=""
        id="exampleInput126"
        placeholder="Password"
      /> */}
      <textarea value={message} onChange={(e) => setmessage(e.target.value)} className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    name="message" id="exampleInput126"></textarea>
    {message ? '' :
      <label
        htmlFor="exampleInput126"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
      >
        Message
      </label>
      }
    </div>
    {/*Subscribe newsletter checkbox*/}
    <div className="mb-6 flex items-center justify-center">
      {/* <input
        className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
        type="checkbox"
        defaultValue=""
        id="exampleCheck25"
      /> */}
      {/* <label
        className="inline-block ps-[0.15rem] pt-[0.15rem] hover:cursor-pointer"
        htmlFor="exampleCheck25"
      >
        Subscribe to our newsletter
      </label> */}
    </div>
    {/*Submit button*/}
    <button
      type="submit"
      className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init=""
      data-twe-ripple-color="light"
    >
      Send
    </button>
  </form>
</div>

    </div>
  )
}

export default Contactus