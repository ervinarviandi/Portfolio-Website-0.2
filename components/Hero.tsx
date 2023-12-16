 "use client"
import { useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Logo from "../public/ervinarviandi.jpg"
import Hands from "../public/image.webp"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PiArrowFatDownFill } from "react-icons/pi";



const Hero = () => {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    })
  })

  return (
    <div className='h-screen w-full  pt-[96px] myHero'data-aos="fade-up">
        <div className='md:max-w-6xl mx-auto lg:px-10 px-5'>
          <Image src={Logo} alt="mobileImage"  width={160} height={160}  className={`
              duration-700 ease-in-out group-hover:opacity-75 md:hidden block
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)} priority={true}/>
            <div className='grid md:grid-cols-2 mt-16 mx-auto '>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                    <h5 className='text-3xl font-sora2 text-[ #60a5fa] '>Hi! </h5>
                    <Image src={Hands} width={40} height={40} alt='iconshand'/>
                    </div>
                    <h1 className='md:text-7xl text-3xl font-bold dark:text-[#fff] text-[#000] '>I&apos;m <span className='text-violet-500 vin'> Ervin </span><span className='text-[#000] dark:text-[#fff]'>Arviandi</span></h1>
                    <p className='font-sora text-md  my-7 md:w-10/12 dark:text-dark-100 text-white-100'>a happy <span className='font-bold'> Front-End Developer </span> who strives to help others grow in web development</p>

                    <div className='flex items-center gap-3'>
                        <button className='font-bold text-[#fff]  bg-violet-500 py-3 px-6 rounded-xl'>Get In Touch</button>
                        <button className='font-bold dark:text-dark-100 text-white-100 py-3 px-6 rounded-xl flex items-center gap-2'>
                          <span className='p-1 border-b-4 dark:border-b-dark-100 border-b-white-100 overflow-hidden w-[50%] border-dark-100 '>
                          < PiArrowFatDownFill  className="animate-rain-arrow "/>
                          </span>
                        Resume
                        </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='md:block hidden flex-end'>
                    <Image src={Logo} width={350} height={350} alt="Profile" priority={true} placeholder='blur'  className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}
        /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero