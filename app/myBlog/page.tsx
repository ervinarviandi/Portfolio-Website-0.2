
import Link from 'next/link'
import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa"
import Navigation from '@/components/Navigation'




const page = () => {  

  return (
    <>
    <Navigation/>
    <div className='w-full pt-20 MyBlog' data-aos="fade-up">
        <div className='lg:max-w-7xl mx-auto lg:px-10 px-5'>
                  <h1 className='font-bold md:text-5xl text-2xl text-[#000] dark:text-[#fff] mt-4'>Blog</h1>
                  <p className='md:text-lg text-sm dark:text-dark-100 text-white-100 mt-4'>Exploring the world of code, creativity, and constant learning.</p>
                  <hr className=' border-dashed  dark:border-dark-100 border-[#525252] border-1 my-5' />
                  <div className='grid md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border dark:border-[#525252] border-white-100'>
                        <Link href="/astroBlog" className='font-bold dark:text-[#fff] text-[#000]'>Bikin web dengan cepat, simple ngebut pakai Astro</Link>
                        <div className='flex flex-end items-center dark:text-dark-100 text-white-100 mt-3 '>
                          <FaRegCalendarAlt />
                          <span className='text-xs ml-2'>Selasa, 12 Oktober 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border dark:border-[#525252] border-white-100'>
                        <Link href="/nextjsBlog" className='font-bold dark:text-[#fff] text-[#000]'>Tutorial Install Next js</Link>
                        <div className='flex items-center text-white-100 dark:text-dark-100 mt-3 '>
                          <FaRegCalendarAlt />
                          <span className='text-xs ml-2'>Minggu, 3 Desember 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border dark:border-[#525252] border-white-100'>
                        <Link href="/headless" className='font-bold dark:text-[#fff] text-[#000]'>Cara Menggunakan Headless UI</Link>
                        <div className='flex items-center text-white-100 dark:text-dark-100 mt-3 '>
                          <FaRegCalendarAlt />
                          <span className='text-xs ml-2'>Selasa, 12 Oktober 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border dark:border-[#525252] border-white-100'>
                        <Link href="/lazyBlog" className='font-bold dark:text-[#fff] text-[#000]'>Membuat Lazy Load Image dengan Efek blur</Link>
                        <div className='flex items-center text-white-100 dark:text-dark-100 mt-3 '>
                          <FaRegCalendarAlt />
                          <span className='text-xs ml-2'>Minggu, 17 Desember 2023</span>
                        </div>
                      </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default page