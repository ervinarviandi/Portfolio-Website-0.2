import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { FaGithub } from "react-icons/fa";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import ImageCard from "@/app/bookshelf/components/ImageCard"
import "../../app/globals.css"
import CodeigniterLogo from '@/components/Tech Stack/icons small/CodeigniterLogo'
import BootstrapLogo from '@/components/Tech Stack/icons small/BootstrapLogo'


const Tittle = "Bookshelf Apps"
const Description = "A bookshelf app that can show, search, add, delete, update book and move book to other shelf. ✨"

const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full py-10 pt-[96px]' data-aos="fade-up">
        <div className="md:max-w-7xl mx-auto lg:px-10 px-5 ">
            <div className='flex items-center gap-2'>
            <Link href="/" className=' flex items-center gap-2  dark:text-dark-100 text-white-100 dark:hover:text-[#fff] hover:text-[#000]'>
                <BsArrowLeftCircleFill/>
                Back
            </Link>
            </div>
            <h1 className='md:text-2xl text-xl mt-10 '>{Tittle}</h1>
            <p className='dark:text-dark-100 text-white-100 mt-3'>{Description}.</p>
            <hr className='dark:border-[#525252] border-white-100 border-1 border border-dashed my-5 rounded-full' />
            <div className='md:flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <span>Tech Stack :</span>
                        <CodeigniterLogo/>
                        <BootstrapLogo/> 
                </div>
                <div className='flex items-center gap-2 md:mt-0 mt-5'>
                    <Link href="https://github.com/ervinarviandi/Bookself" className='flex items-center gap-3 link link-underline link-underline-black py-3 border-1 dark:border-[#525252] border-white-100 border-b border-dashed ' target='_blank'>
                        <FaGithub/>
                        Source Code
                    </Link>
                    <Link href="/studio" className='flex items-center gap-2  px-2 link-underline link-underline-black py-3 border-1 dark:border-[#525252] border-white-100 border-b border-dashed' target='_blank'>
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