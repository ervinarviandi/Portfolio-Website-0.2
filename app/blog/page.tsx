"use client"
import Link from 'next/link'
import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa"
import {BsArrowLeftCircleFill} from "react-icons/bs"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'




const page = () => {

  const { systemTheme, theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);




const renderThemeChanger = () => {
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <button className=" p-2 rounded-lg" onClick={() => setTheme("light")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" strokeWidth="2" stroke="#facc15" className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button className=" p-2 rounded-lg " onClick={() => setTheme("dark")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#0284c7" viewBox="0 0 24 24" strokeWidth="0" stroke="currentColor" className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    );
  }
};
  return (
    <>
    <div className='w-full py-10'>
        <div className='lg:max-w-7xl mx-auto px-5'>
        <div className='flex justify-between items-center gap-2'>
            <Link href="/" className=' flex items-center gap-2  dark:text-dark-100 text-white-100 dark:hover:text-teal-300'>
                <BsArrowLeftCircleFill/>
                Back
            </Link>
            {renderThemeChanger()}
            </div >
                  <h1 className='font-bold md:text-5xl text-2xl text-[#000] dark:text-[#fff] mt-4'>Blog</h1>
                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100 mt-4'>Exploring the world of code, creativity, and constant learning.</p>
                  <hr className=' border-dashed  border-gray-200 my-5' />
                  <div className='grid md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col'>
                      <div className='p-4 dark:bg-[#1e1e1e] bg-[#fff] rounded-lg border border-[#272626]'>
                        <Link href="/astroBlog" className='font-bold dark:text-[#fff] text-[#000]'>Bikin web dengan cepat, simple
ngebut pakai Astro</Link>
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
                        <Link href="" className='font-bold dark:text-[#fff] text-[#000]'>Cara Menggunakan Headless UI</Link>
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