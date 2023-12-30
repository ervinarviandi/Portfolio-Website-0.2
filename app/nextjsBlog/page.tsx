import React from 'react'
import Link from 'next/link'
import NextjsblogContent from "@/app/nextjsBlog/components/NextjsblogContent"
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'

const page = () => {
  return (
    <div className='w-full py-10' data-aos="fade-up">
        <div className='md:max-w-5xl mx-auto lg:px-10 px-5'>
        <div className='flex justify-between items-center my-5'>
          <Link href="/myBlog" className=' flex items-center gap-2  dark:text-dark-100 text-white-100 dark:hover:text-[#fff] hover:text-[#000] '>
                <HiOutlineArrowCircleLeft size={20}/>
                Back
            </Link>
          </div>
            <div>
                <NextjsblogContent/>
            </div>
        </div>
    </div>
  )
}

export default page