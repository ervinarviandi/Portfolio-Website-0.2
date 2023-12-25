"use client"

import Navigation from '@/components/Navigation'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/app/Assets/Icons/GitHub.svg"
import Logo1 from "@/app/Assets/Icons/Instagram.svg"
import Logo2 from "@/app/Assets/Icons/Gmail.svg"
import Logo3 from "@/app/Assets/Icons/500 Px.svg"
import Logo4 from "@/app/Assets/Icons/Linkedin.svg"
import Logo5 from "@/app/Assets/Icons/Discord.svg"
import Location from '@/app/location/page'
import Form from "@/app/contact/components/Form"




const contact = () => {

  
  
  return (
    <>
    <div>
        <Navigation/>
        <div className='w-full pt-20 contact' data-aos="fade-up">
            <div className='md:max-w-7xl mx-auto lg:px-10 px-5'>
                <h1 className='md:text-5xl text-2xl font-bold '>Contact </h1>
                <p className='md:text-lg text-md  mt-4'> 👋 Get in touch with me anytime, through social media, e-mail, or phone number.</p>
                <div>
                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100 my-4'>Just a friendly reminder that the information provided here is for business purposes only. <br /> If you have any questions, feel free to chat with me directly on my social media.</p>
                </div>
                <hr className='my-5 dark:border-dark-100 border-[#525252] border-1 border-dashed' />
                
                
                  

                <div className='md:flex lg:flex justify-between gap-5 mt-5 '>
                  <div className='md:w-6/12 '>
                  <div>
                  <h3 className='md:text-3xl text-2xl font-bold '>Social Media</h3>
                  <p className='dark:text-dark-100 text-white-100 md:text-md text-sm mt-4'>If you want to find me on social media, just search for <span className='font-bold text-[#2bccb8]'> @ervinarviandi.</span> That&apos;s my username on almost all platforms, so it should be easy to find me.</p>

                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100 mt-7'>But if you&apos;re short on time, I&apos;ve included some links to the social media platforms I use most frequently below.</p>
                </div>

                <h2 className='text-md mt-5'>Find me on social media</h2>
               

                <div className='md:flex items-center gap-2 py-2 md:overflow-hidden overflow-x-scroll myScrollbar'>
                  <Link href="https://github.com/ervinarviandi" className='bg-gray-600 rounded-md p-2 flex justify-center items-center text-center gap-2 my-2'>
                      <Image src={Logo} width={20} height={20} alt='Github'/>
                      <p className='text-[#fff]'>Github</p>
                    </Link>
                  <Link href="https://www.instagram.com/ervinarviandi/" className='bg-purple-500 rounded-md p-2 flex justify-center items-center text-center gap-2 my-2'>
                      <Image src={Logo1} width={20} height={20} alt='Instagram'/>
                      <p className='text-[#fff]'>Instagram</p>
                    </Link>
                  <Link href="mailto:muhamadervin34@gmail.com" className='bg-yellow-500 rounded-md p-2 flex justify-center items-center text-center gap-2 my-2'>
                      <Image src={Logo2} width={20} height={20} alt='Email'/>
                      <p className='text-[#fff]'>Email</p>
                    </Link>
                  <Link href="" className='bg-blue-500 rounded-md p-2 flex justify-center items-center text-center gap-2 my-2'>
                      <Image src={Logo4} width={20} height={20} alt='Linkedin'/>
                      <p className='text-[#fff]'>Linkedin</p>
                    </Link>
                    <Link href="https://500px.com/p/muhamadervin34?view=photos" className='bg-green-500 rounded-md p-2 flex justify-center items-center text-center gap-2 my-2'>
                      <Image src={Logo3} width={20} height={20} alt='500px'/>
                      <p className='text-[#fff]'>500px</p>
                    </Link>
                  <Link href="https://discord.com/channels/@me" className='bg-[#5361f8] rounded-md p-2 flex justify-center items-center text-center gap-2 my-2 md:hidden lg:hidden '>
                      <Image src={Logo5} width={20} height={20} alt='Discord'/>
                      <p className='text-[#fff]'>Discord</p>
                    </Link>
                </div> 
                <hr className=' dark:border-dark-100 border-[#525252] border-1 border-solid' />
                <div>
                  <h2 className='text-md mt-7'>Or send me a message</h2>
                  <Form/>
                </div>
                <hr className=' dark:border-dark-100 border-[#525252] border-1 border-solid' />
                </div>
                <div className='md:w-6/12'>
                  <h1 className='md:text-5xl text-2xl font-bold mt-5 md:hidden block'>Location</h1>
                  <p className='md:hidden block md:text-md text-sm dark:text-dark-100 text-white-100 mb-4 mt-2'>find me by looking at the location map below</p>
                <Location/>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default contact