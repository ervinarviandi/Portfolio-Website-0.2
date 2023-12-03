"use client"
import Navigation from '@/components/Navigation';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
// import ThemeInput from ""; 

const page = () => {

  const explicitTheme:any = {
    light: ['#1e1e1e', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };
 
  return (
    <>
    <Navigation/>
    <div className='w-full pt-20'>
        <div className='md:max-w-7xl  mx-auto px-10'>
        <h1 className='font-bold md:text-5xl text-2xl text-[#000] dark:text-[#fff] mt-4'>Dashboard</h1>
        <p className='md:text-lg text-sm dark:text-dark-100 text-white-100 mt-4'>My contributions from last year on github.</p>
        <hr className=' border-dashed  dark:border-dark-100 border-[#525252] border-1 my-5' />
            <div className='md:flex justify-between items-center mt-5'>
                <div className="flex items-center gap-2 my-2 md:text-xl text-md">
                <FaGithub/>
                <h1>Github Contributions</h1>
                </div>
                <div>
                    <Link href="https://github.com/ervinarviandi">@ervinarviandi</Link>
                </div>
            </div>
        <div className='  dark:text-dark-100 text-white-100  rounded-lg overflow-hidden mt-5'> 
        <GitHubCalendar  username="ervinarviandi" 
        blockSize={12} blockMargin={4}  year="last" colorScheme='light'
        theme={explicitTheme} 
        /> 
        </div>
        </div>
    </div>
    </>
  )
}

export default page