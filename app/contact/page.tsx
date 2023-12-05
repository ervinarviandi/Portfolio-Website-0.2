"use client"

import Navigation from '@/components/Navigation'
// import Table from '@/components/Table'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/app/Assets/Icons/GitHub.svg"
import Logo1 from "@/app/Assets/Icons/Instagram.svg"
import Logo2 from "@/app/Assets/Icons/Gmail.svg"
import Logo3 from "@/app/Assets/Icons/500 Px.svg"


const contact = () => {
  return (
    <>
    <div>
        <Navigation/>
        <div className='w-full pt-20 contact'>
            <div className='md:max-w-7xl mx-auto lg:px-10 px-5'>
                <h1 className='md:text-5xl text-2xl font-bold '>Contact </h1>
                <p className='md:text-xl text-lg mt-4'> 👋 Get in touch with me anytime, through social media, e-mail, or phone number.</p>
                <hr className='my-5 dark:border-dark-100 border-[#525252] border-1 border-dashed' />
                <div>
                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100'>Just a friendly reminder that the information provided here is for business purposes only. <br /> If you have any questions, feel free to chat with me directly on my social media.</p>
                </div>
                <div>
                  <h3 className='md:text-3xl text-2xl font-bold mt-5'>Contact</h3>
               {/* <Table/> */}
                </div>
                <div className=''>
                  <hr className='my-5 dark:border-dark-100 border-[#525252] border-1 border-solid' />

                  <h3 className='md:text-3xl text-2xl font-bold mt-5'>Social Media</h3>
                  <p className='dark:text-dark-100 text-white-100 md:text-md text-sm mt-4'>If you want to find me on social media, just search for <span className='font-bold text-lime-300'> @ervinarviandi.</span> That&apos;s my username on almost all platforms, so it should be easy to find me.</p>

                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100 mt-7'>But if you&apos;re short on time, I&apos;ve included some links to the social media platforms I use most frequently below.</p>
                </div>
                <div className='flex items-center gap-2 my-5'>
        <Link href="https://github.com/ervinarviandi" >
         <Image src={Logo} width={30} height={30} alt='github'/>
        </Link>
        <Link href="https://www.instagram.com/ervinarviandi/" >
         <Image src={Logo1} width={30} height={30} alt='Instagram'/>
        </Link>
        <Link href="mailto:muhamadervin34@gmail.com" >
         <Image src={Logo2} width={30} height={30} alt='Gmail'/>
        </Link>
        <Link href="https://500px.com/p/muhamadervin34?view=photos" >
         <Image src={Logo3} width={30} height={30} alt='500px'/>
        </Link>
    </div>
                <h4 className='dark:text-dark-100 text-white-100 text-md'>
                Click 
                <span className='px-2'>
                <Link href="/location" className='font-bold text-lime-300 mr-2'>here</Link>
                to see location
                </span>
                </h4>
            
             
            </div>
        </div>
    </div>
    </>
  )
}

export default contact