"use client"
import React from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import AstroContent from "@/app/astroBlog/components/AstroContent"



const page = () => {

  return (
    <>
    <div className='w-full py-10 '>
        <div className='lg:max-w-5xl mx-auto px-10'>
          <p className=''></p>
          <div className='flex justify-between items-center my-5'>
          <Link href="/myBlog" className=' flex items-center gap-2  dark:text-dark-100 text-white-100 dark:hover:text-[#fff] '>
                <BsArrowLeftCircleFill/>
                Back
            </Link>
          </div>
          <div>
            <AstroContent/>
          </div>
        </div>
    </div>
    </>
  )
}

export default page