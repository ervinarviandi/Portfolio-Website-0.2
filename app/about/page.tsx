"use client"

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Profile from "@/app/Assets/Profile/Profile.png"
import Link from 'next/link'
import { HiOutlineArrowCircleLeft } from "react-icons/hi"
import YoutubeEmbed from "@/app/about/components/YoutubeEmbed"
import Skills from "@/components/Skills"


const Page = () => {

  const [isLoading, setLoading] = useState(true);

  return (
    <>
    <Navigation/>
    <div className='w-full pt-20 myAbout' data-aos="fade-up">
        <div className='md:max-w-7xl mx-auto px-5'>
          <div className='flex '>
          <Link href="/" className=' flex items-center gap-2  dark:text-dark-100 text-white-100 dark:hover:text-[#fff] hover:text-[#000] '>
                <HiOutlineArrowCircleLeft size={20}/>
                Back
            </Link>
          </div>
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
            <h1 className='font-bold md:text-6xl text-3xl mt-7 '>I&apos;m <span className='text-transparent bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text'> Ervin Arviandi </span>. I live in Dompu, where I build the future.
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
          <p className='mt-5 md:text-base text-sm '>Hello👋, I&apos;m Ervin. With over 2+ years of experience in Web Development, covering both frontend. I&apos;m particularly passionate about frontend side, where I focus on creating web applications that are not only precise but also user-friendly experiences.</p>
            <p className='mt-5 md:text-base text-sm  '>FYI, I really like and enjoy learning new things related to technology, as a <span className='text-transparent bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text'> front-end developer</span>, I have to keep up with technological developments. In the future there will definitely be many new features, tools and programming languages that will make it easier for us to create and develop 🔨🔮 a website application. 💻📱</p>

            <p className='mt-5 md:text-base text-sm'>I&apos;am passionate about <span className='text-transparent bg-gradient-to-r from-blue-300 to-teal-500 bg-clip-text '> Frontend Developer </span> and enjoy working on the Web. I love combining my technical knowledge and creativity to build engaging and user-friendly websites and applications. 🔮</p>

            <p className='mt-5 md:text-base text-sm '>I&apos;m very interested with Frontend Architecture, Frontend Accessibility, and User Experience, and also interested in mobile development with flutter. 💻📱</p>

            <h3 className='mt-10 font-bold text-lg'>What I Believe In</h3>
            <p className='dark:text-dark-100 text-white-100 md:text-base text-sm mt-3'>I want to live a life that goes beyond mere existence. I dedicate myself to being beneficial.</p>

            <div className='my-5 border-l-2  border-[#22d3ee] p-4 md:w-6/12'>
            <p className='md:text-base text-sm italic dark:text-dark-100 text-white-100 '>Again, you can&apos;t connect the dots looking forward&#59; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something &#45; your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. &#45; <span className='font-bold'> Steve Jobs</span>
              </p>
            </div>

            <p className='md:text-base text-sm my-5 md:w-7/12'>The tools I have used to build website applications are Framer Motion, AOS Animation, Tailwind, Bootstrap, NPM packages & yarn and many other tools. 🔮🚀</p>
            <div>
              <p className='md:text-base text-sm'>For me, writing code is the activity that requires the most focus. The slightest annoying sound, Boom! all the program flow that I was thinking in my head was gone.</p>

              <p className='mt-5 md:text-base text-sm'>When coding, I always listen to some lofi music videos, because for me the music is comfortable, relaxing, and increases our focus when coding, I usually prefer coding at night, because at night, the atmosphere is calmer, below is one music videos that I listen to while coding</p>
            <YoutubeEmbed/>
            <Skills/>
           
            </div>
        </div>
    </div>
    </>
  )
}

export default Page