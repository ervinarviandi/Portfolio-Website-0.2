import React from 'react'
import Certificate from "@/app/myCertificate/components/Certificate"
import Navigation from '@/components/Navigation'


const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full pt-20' data-aos="fade-up">
        <div className='md:max-w-7xl mx-auto lg:px-10 px-5'>
            <h1 className='md:text-5xl text-2xl font-bold'>Certificate</h1>
            <p className='mt-4 md:text-md dark:text-dark-100 text-white-100 text-sm'>This is a collection of several certificates that I have received while participating in events & webinars.</p>
            <hr className='my-5 dark:border-dark-100 border-[#525252] border-1 border-dashed' />

           <div>
            <Certificate/>
           </div>
        </div>
    </div>
    </>
  )
}

export default page