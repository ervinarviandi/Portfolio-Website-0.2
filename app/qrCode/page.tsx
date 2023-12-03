import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import JavascriptLogo from '@/components/Tech Stack/icons small/JavascriptLogo'
import NextJs from '@/components/Tech Stack/icons small/NextJs'
import ReactLogo from '@/components/Tech Stack/icons small/ReactLogo'
import TailwindLogo from '@/components/Tech Stack/icons small/TailwindLogo'
import { FaGithub } from "react-icons/fa";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import ImageCard from "@/app/qrCode/components/imageCard"
import "../../app/globals.css"

const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full py-10 pt-[96px]'>
        <div className="md:max-w-7xl mx-auto px-10 ">
            <div className='flex items-center gap-2'>
            <Link href="/" className=' flex items-center gap-2  dark:text-dark-100 text-white-100  dark:hover:text-[#fff] hover:text-[#000]'>
                <BsArrowLeftCircleFill/>
                Back
            </Link>
            </div>
            <h1 className='md:text-2xl text-xl mt-10 '>QR Code Generator</h1>
            <p className='dark:text-dark-100 text-white-100 mt-3'>Personal website was built originally from scratch using several powerful stacks.</p>
            <hr className=' border-dashed  dark:border-[#525252] border-1 border-white-100  my-5 rounded-full' />
            <div className='md:flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <span>Tech Stack :</span>
                        <NextJs/>
                        <ReactLogo/>
                        <JavascriptLogo/>
                        <TailwindLogo/> 
                </div>
                <div className='flex items-center gap-2 md:mt-0 mt-5'>
                    <Link href="https://github.com/ervinarviandi/QRCode-Generator" className='flex items-center gap-3 link link-underline link-underline-black dark:border-[#525252] border-white-100 py-3 border-b border-dashed ' target='_blank'>
                        <FaGithub/>
                        Source Code
                    </Link>
                    <Link href="https://qr-ervinarviandi.vercel.app/" className='flex items-center gap-2  px-2 link-underline link-underline-black py-3 border-b dark:border-[#525252] border-white-100 border-dashed' target='_blank'>
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