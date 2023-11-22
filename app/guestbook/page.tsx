"use client"
import React from 'react'
import Navigation from '@/components/Navigation'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Page = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    })
  }, []) 


  return (
    <>
        <Navigation/>
    <div className='w-full pt-28  h-screen' data-aos="fade-up">
        <div className='md:max-w-7xl mx-auto px-5'>
            <h1 className='md:text-5xl text-2xl font-bold'>Guestbook</h1>
            <p className='mt-4 md:text-md text-sm'>Hey, leave a little message to let me and other visitors know you were here. You can write whatever you want, <br /> maybe some appreciation, a friendly message, a joke, or just a quick hello.🤪👋🙏</p>
           
        </div>
    </div>
   
    </>
  )
}

export default Page