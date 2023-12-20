"use client"
import React from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import LazyContent from "@/app/lazyBlog/components/LazyContent"



const page = () => {

  return (
    <>
    <div className='w-full py-10 ' data-aos="fade-up">
        <div className='lg:max-w-5xl mx-auto lg:px-10 px-5'>
          <p className=''></p>
          <div className='flex justify-between items-center my-5'>
          <Link href="/myBlog" className=' flex items-center gap-2 dark:text-dark-100 text-white-100 dark:hover:text-[#fff] '>
                <BsArrowLeftCircleFill/>
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