"use client"

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Profile from "@/app/Assets/Profile/Profile.png"
import Link from 'next/link'
import { BsArrowLeftCircleFill } from 'react-icons/bs'


const page = () => {

  const [isLoading, setLoading] = useState(true)
  return (
    <>
    <Navigation/>
    <div className='w-full pt-20 myAbout'>
        <div className='md:max-w-7xl mx-auto px-5'>
        <Link href="/" className=' flex items-center gap-2  dark:text-dark-100 text-white-100 dark:hover:text-[#fff] '>
                <BsArrowLeftCircleFill/>
                Back
            </Link>
          <div className='md:flex lg:flex justify-between gap-5'>
            <div className='md:w-7/12'>
            <Image  className={`
              duration-700 ease-in-out group-hover:opacity-75  rounded-full border-2 lg:hidden md:hidden block dark:border-[#1e1e1e] border-gray-300  mb-5 mt-4
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} src={Profile} width={150} height={150} alt='ProfileAboutMobile'/>
            <h1 className='font-bold md:text-5xl text-2xl mt-7 '>I&apos;m <span className='text-transparent bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text'> Ervin Arviandi </span>. I live in Dompu, where I build the future.
            </h1>
            </div>
            <div className='md:w-5/12'>
              <Image className={`
              duration-700 ease-in-out group-hover:opacity-75  rounded-full border-2 lg:block md:block hidden dark:border-[#1e1e1e] border-gray-300 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} src={Profile} width={250} height={250} alt='ProfileAbout'/>
            </div>
          </div>
            <p className='mt-5 text-md  '>Hello👋, My name is Moh Ervin Arviandi , or you can call me Ervin. I focus on studying web application development and web design. The main programming language I'm exploring is Javascript, as well as the React framework (and the environment in general). I love learning 📚 things, and always want to learn new things. I am enthusiastic, reliable, responsible 📱 and hardworking person.</p>

            <p className='mt-5'>I&apos;am passionate about <span className='text-transparent bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text '> Frontend Developer </span> and enjoy working on the Web. I love combining my technical knowledge and creativity to build engaging and user-friendly websites and applications. 🔮</p>

            <p className='mt-5 '>I&apos;m very interested with Frontend Architecture, Frontend Accessibility, and User Experience, and also interested in mobile development with flutter. 💻📱</p>

            <h3 className='mt-10 font-bold text-lg'>What I Believe In</h3>
            <p className='dark:text-dark-100 text-white-100 text-md mt-3'>I want to live a life that goes beyond mere existence. I dedicate myself to being beneficial.</p>

            <div className='my-5 border-l-2  border-[#22d3ee] p-4 md:w-6/12'>
            <p className='text-md italic dark:text-dark-100 text-white-100 '>Again, you can&apos;t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. - <span className='font-bold'> Steve Jobs</span>
              </p>
            </div>

            <p className='text-md my-5 md:w-7/12'>The tools I have used to build website applications are Framer Motion, AOS Animation, Tailwind, Bootstrap, NPM packages & yarn and many other tools. 🔮🚀</p>
        </div>
    </div>
    </>
  )
}

export default page