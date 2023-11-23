"use client"
import Navigation from '@/components/Navigation';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full pt-28'>
        <div className='md:max-w-7xl max-w-4xl mx-auto px-5'>
        <h1 className='font-bold md:text-5xl text-2xl text-[#000] dark:text-[#fff] mt-4'>Dasboard</h1>
        <p className='md:text-lg text-sm dark:text-dark-100 text-white-100 mt-4'>My contributions from last year on github.</p>
            <div className='flex justify-between items-center mt-7'>
                <div className="flex items-center gap-2 my-2 md:text-xl text-md">
                <FaGithub/>
                <h1>Github Contributions</h1>
                </div>
                <div>
                    <Link href="https://github.com/ervinarviandi">ervinarviandi</Link>
                </div>
            </div>
        <div className='dark:bg-[#1e1e1e] bg-gray-200 dark:text-dark-100 text-white-100 p-4 rounded-lg overflow-hidden'>
        <GitHubCalendar  username="ervinarviandi" 
        colorScheme='light' blockSize={12}  blockMargin={4} year="last" />
        </div>
        </div>
    </div>
    </>
  )
}

export default page