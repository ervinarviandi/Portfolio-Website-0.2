"use client"
import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import NextLogo from '@/components/Tech Stack/icons small/NextJs'
import TailwindLogo from '@/components/Tech Stack/icons small/TailwindLogo'
import { FaGithub } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import ImageCard from "@/app/starterTemplate/components/ImageCard"
import Typescript from '@/components/Tech Stack/icons small/Typescript'
import "../../app/globals.css"
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'
import Slug from "@/app/starterTemplate/components/Slug"

const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full py-10 pt-[96px]' data-aos="fade-up">
        <div className="md:max-w-7xl mx-auto lg:px-10 px-5 ">
            <div className='flex items-center gap-2'>
            <Link href="/" className=' flex items-center gap-2  dark:text-dark-100 text-white-100  dark:hover:text-[#fff] hover:text-[#000]'>
                <BsArrowLeftCircleFill/>
                Back
            </Link>
            </div>
            <h1 className='md:text-2xl text-xl mt-10 '>Next App Router Starter Kit</h1>
            <p className='dark:text-dark-100 text-white-100 mt-3'>Next js 14.0.2 starter kit using Tailwind CSS, Zustand, SWR, Lint and Formatter</p>
            <hr className=' border-dashed  dark:border-[#525252] border-1 border-white-100  my-5 rounded-full' />
            <div className='md:flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <span>Tech Stack :</span>
                        <NextLogo/>
                        <Typescript/>
                        <TailwindLogo/> 
                </div>
                <div className='flex items-center gap-2 md:mt-0 mt-5'>
                    <Link href="https://github.com/ervinarviandi/ervin-starterKit-next-app-router" className='flex items-center gap-3 link link-underline link-underline-black dark:border-[#525252] border-white-100 py-3 border-b border-dashed ' target='_blank'>
                        <FaGithub/>
                        Source Code
                    </Link>
                    <Link href="https://ervin-starter-kit-next-app-router.vercel.app/" className='flex items-center gap-2  px-2 link-underline link-underline-black py-3 border-b dark:border-[#525252] border-white-100 border-dashed' target='_blank'>
                        <HiMiniArrowTopRightOnSquare/>
                        Live Demo
                    </Link>
                </div>
            </div>
                <div>
                    <ImageCard/>
                    <Slug/>
                </div>
        </div>
    </div>
    </>
  )
}

export default page