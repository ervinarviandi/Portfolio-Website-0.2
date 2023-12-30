"use client"
import React from 'react'
import Link from 'next/link'
import LazyContent from "@/app/lazyBlog/components/LazyContent"
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'



const page = () => {

  return (
    <>
    <div className='w-full py-10 ' data-aos="fade-up">
        <div className='lg:max-w-5xl mx-auto lg:px-10 px-5'>
          <p className=''></p>
          <div className='flex justify-between items-center my-5'>
          <Link href="/myBlog" className=' flex items-center gap-2 dark:text-dark-100 text-white-100 hover:text-[#000] dark:hover:text-[#fff] '>
                <HiOutlineArrowCircleLeft size={20}/>
                Back
            </Link>
          </div>
          <div>
            <LazyContent/>
          </div>
        </div>
    </div>
    </>
  )
}

export default page