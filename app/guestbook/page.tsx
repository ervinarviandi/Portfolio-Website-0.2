"use client"
import React from 'react'
import Navigation from '@/components/Navigation'
import Comments from '@/app/guestbook/Comments'



const page = () => {

  


  return (
    <>
        <Navigation/>
    <div className='w-full pt-20 guestbook h-screen' data-aos="fade-up">
        <div className='md:max-w-7xl mx-auto lg:px-10 px-5'>
            <h1 className='md:text-5xl text-2xl font-bold'>Guestbook</h1>
            <p className='mt-4 md:text-md dark:text-dark-100 text-white-100 text-sm'>Hey, leave a little message to let me and other visitors know you were here. You can write whatever you want, <br /> maybe some appreciation, a friendly message, a joke, or just a quick hello.🤪👋🙏</p>
            <hr className='my-5 dark:border-dark-100 border-[#525252] border-1 border-dashed' />
            <div>
            <Comments/>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default page