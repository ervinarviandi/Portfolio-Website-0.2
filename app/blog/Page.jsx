"use client"
import Link from 'next/link'
import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa"
import Navigation from '@/components/Navigation'



const page = () => {  

  return (
    <>
    <Navigation/>
    <div className='w-full pt-28'>
        <div className='lg:max-w-7xl mx-auto px-5'>
                  <h1 className='font-bold md:text-5xl text-2xl text-[#000] dark:text-[#fff] mt-4'>Blog</h1>
                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100 mt-4'>Exploring the world of code, creativity, and constant learning.</p>
                  <hr className=' border-dashed  border-gray-200 my-5' />
                  <div className='grid md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border border-[#272626]'>
                        <Link href="/astroBlog" className='font-bold dark:text-[#fff] text-[#000]'>Bikin web dengan cepat, simple ngebut pakai Astro</Link>
                        <div className='flex flex-end items-center dark:text-dark-100 text-white-100 mt-3 '>
                          <FaRegCalendarAlt />
                          <span className='text-xs ml-2'>Selasa, 12 Oktober 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border border-[#272626]'>
                        <Link href="" className='font-bold dark:text-[#fff] text-[#000]'>Tutorial Install Node js</Link>
                        <div className='flex items-center text-white-100 dark:text-dark-100 mt-3 '>
                          <FaRegCalendarAlt />
                          <span className='text-xs ml-2'>Selasa, 12 Oktober 2023</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border border-[#272626]'>
                        <Link href="/headless" className='font-bold dark:text-[#fff] text-[#000]'>Cara Menggunakan Headless UI</Link>
                        <div className='flex items-center text-white-100 dark:text-dark-100 mt-3 '>
                          <FaRegCalendarAlt />
                          <span className='text-xs ml-2'>Selasa, 12 Oktober 2023</span>
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