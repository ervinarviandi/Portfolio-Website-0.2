import React from 'react'
import Link from 'next/link';

export default function slug() {
  return (
    <div> 

      <h1 className='text-lg mt-7'># Introduction</h1>
      <p className='md:text-base text-md dark:text-dark-100 text-white-100 mt-4'>Welcome to the Next.js App Router Starter Kit! This template is designed to help you kickstart your Next.js project with ease. It includes popular libraries like Tailwind CSS, Zustand 🔮 for state management, and SWR for data fetching.</p>
      <h2 className='text-md mt-4'>How to Start this project</h2>

      <h1 className='md:text-base text-md my-4'>1. Clone using git</h1>

      <div className='bg-[#1e1e1e] flex items-center p-4 overflow-hidden overflow-x-scroll  myScrollbar rounded-md'>
        <p className='text-[#fff]'>https://github.com/ervinarviandi/ervin-starterKit-next-app-router</p>
      </div>

   <h1 className='my-4 md:text-base text-md'>2. Install dependencies</h1>
   
   <div className='bg-[#1e1e1e] flex items-center p-4 overflow-hidden overflow-x-scroll  myScrollbar rounded-md'>
        <p className='text-[#fff]'>npm install #or yarn</p>
      </div>

   <h1 className='my-4 md:text-base text-md'>3. Run development server</h1>

   <div className='bg-[#1e1e1e] flex items-center p-4 overflow-hidden overflow-x-scroll  myScrollbar rounded-md'>
        <p className='text-[#fff]'>npm run dev
#or
yarn dev
#or
pnpm dev
#or
bun dev</p>
      </div>
  

   <h3 className='my-4 md:text-base text-md'>Open <Link href="http://localhost:3000 " className='text-teal-400'>
     http://localhost:3000 </Link> with your browser to see the result.</h3>
  </div>
  )
}
