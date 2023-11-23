 "use client"
import { useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Logo from "../public/ervinarviandi.jpg"
import Hands from "../public/image.webp"
import { CgFileDocument } from "react-icons/cg";
import AOS from 'aos'
import 'aos/dist/aos.css'




const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    })
  })

  return (
    <div className='h-screen w-full pt-[96px] myHero'data-aos="fade-up">
        <div className='md:max-w-6xl mx-auto px-5'>
          <Image src={Logo} alt="mobileImage" className='md:hidden block' width={160} height={160}/>
            <div className='grid md:grid-cols-2 mt-16 mx-auto '>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                    <h5 className='text-3xl font-sora2 text-blue-300 '>Hi! </h5>
                    <Image src={Hands} width={40} height={40} alt='iconshand'/>
                    </div>
                    <h1 className='md:text-7xl text-3xl font-bold dark:text-[#cbd5e1] text-[#334155] '>I&apos;m <span className='text-[#05b6d3] vin'> Ervin </span><span className='text-[#334155] dark:text-[#cbd5e1]'>Arviandi</span></h1>
                    <p className='font-sora text-md  my-7 md:w-10/12'>a <span className='font-bold '> front-end developer </span> who loves intuitive, clean and work with react ecosystem.</p>

                    <div className='flex items-center gap-3'>
                        <button className='font-bold text-white  bg-[#05b6d3] py-3 px-6 rounded-xl'>Get In Touch</button>
                        <button className='font-bold dark:text-dark-100 text-white-100 py-3 px-6 rounded-xl flex items-center gap-2'>
                          <CgFileDocument/>
                        Resume
                        </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='md:block hidden flex-end'>
                    <Image src={Logo} width={350} height={350} alt="Profile" priority={true} placeholder='blur'  />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero