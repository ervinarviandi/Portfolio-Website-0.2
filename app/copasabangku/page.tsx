import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ReactLogo from '@/components/Tech Stack/icons small/ReactLogo'
import TailwindLogo from '@/components/Tech Stack/icons small/TailwindLogo'
import NextLogo from "@/components/Tech Stack/icons small/NextJs"
import FramerLogo from "@/components/Tech Stack/icons small/FramerLogo"
import { FaGithub } from "react-icons/fa";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import ImageCard from "@/app/copasabangku/components/ImageCard"
import "../../app/globals.css"
import Typescript from '@/components/Tech Stack/icons small/Typescript'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'

const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full py-10 pt-[96px]' data-aos="fade-up">
        <div className="md:max-w-7xl mx-auto lg:px-10 px-5 ">
            <div className='flex items-center gap-2'>
            <Link href="/" className=' flex items-center gap-2  dark:text-dark-100 text-white-100  dark:hover:text-[#fff] hover:text-[#000]'>
                <HiOutlineArrowCircleLeft size={20}/>
                Back
            </Link>
            </div>
            <h1 className='md:text-2xl text-xl mt-10 '>Copas Abangkuu</h1>
            <p className='dark:text-dark-100 text-white-100 mt-3  '>A simple words list application that you can copy and paste, words that are currently trending on social media 🔮.</p>
            <hr className=' border-dashed  dark:border-[#525252] border-1 border-white-100  my-5 rounded-full' />
            <div className='md:flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <span>Tech Stack :</span>
                        <ReactLogo/>
                        <Typescript/>
                        <TailwindLogo/> 
                        <NextLogo/>
                        <FramerLogo/>
                </div>
                <div className='flex items-center gap-2 md:mt-0 mt-5'>
                    <Link href="https://github.com/ervinarviandi/Copas-Abangkuu" className='flex items-center gap-3 link link-underline link-underline-black dark:border-[#525252] border-white-100 py-3 border-b border-dashed ' target='_blank'>
                        <FaGithub/>
                        Source Code
                    </Link>
                    <Link href="https://copas-abangkuu.vercel.app/" className='flex items-center gap-2  px-2 link-underline link-underline-black py-3 border-b dark:border-[#525252] border-white-100 border-dashed' target='_blank'>
                        <HiMiniArrowTopRightOnSquare/>
                        Live Demo
                    </Link>
                </div>
            </div>
                <div>
                    <ImageCard/>
                </div>
        </div>
    </div>
    </>
  )
}

export default page