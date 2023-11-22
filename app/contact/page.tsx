"use client"

import Navigation from '@/components/Navigation'
import Table from '@/components/Table'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiThreads } from "react-icons/si";


const contact = () => {
  return (
    <>
    <div>
        <Navigation/>
        <div className='w-full pt-28 contact'>
            <div className='md:max-w-7xl mx-auto px-5'>
                <h1 className='md:text-5xl text-2xl font-bold '>Contact </h1>
                <p className='md:text-xl text-lg mt-4'> 👋 Get in touch with me anytime, through social media, e-mail, or phone number.</p>
                <hr className='my-5 border-slate-500 border border-dashed' />
                <div>
                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100'>Just a friendly reminder that the information provided here is for business purposes only. <br /> If you have any questions, feel free to chat with me directly on my social media.</p>
                </div>
                <div>
                  <h3 className='md:text-3xl text-2xl font-bold mt-5'>Contact</h3>
               <Table/>
                </div>
                {/* <div className=''>
                  <h6>Find me on</h6>
                  <div className='my-5 '>
                    <ul className='flex items-center gap-5'>
                      <li>
                    <Link href="" className='py-2 px-6 bg-gray-600 rounded-xl'>Github</Link>
                      </li>
                      <li>
                    <Link href="" className='py-2 px-6 bg-rose-400 rounded-xl'>Instagram</Link>
                      </li>
                      <li>
                    <Link href="" className='py-2 px-6 bg-gray-600 rounded-xl'>Github</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className=''>
                  <hr className='border  border-solid border-slate-700 my-5' />

                  <h3 className='md:text-3xl text-2xl font-bold mt-5'>Social Media</h3>
                  <p className='dark:text-dark-100 text-white-100 md:text-md text-sm mt-4'>If you want to find me on social media, just search for <span className='font-bold text-blue-400'> @ervinarviandi.</span> That's my username on almost all platforms, so it should be easy to find me.</p>

                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100 mt-7'>But if you're short on time, I've included some links to the social media platforms I use most frequently below.</p>
                </div>
                <div className='flex items-center gap-4 my-5'>
                  <Link href="" className='flex items-center gap-2'><FaGithub/>Github</Link>
                  <Link href="" className='flex items-center gap-2'><FaInstagram/>Instagram</Link>
                  <Link href=""className='flex items-center gap-2'><SiThreads/>Threads</Link>
                </div>
                
                <Link href="/location" className='flex items-center gap-2'>  Location</Link>
             
            </div>
        </div>
    </div>
    </>
  )
}

export default contact