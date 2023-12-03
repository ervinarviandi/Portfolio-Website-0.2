
import React from 'react'
import Link from 'next/link'
import FooterIcons from './atom/FooterIcons'

const Footer = () => {
  return (
    <>
    <div className='w-full pt-10 pb-4'>
        <div className='md:max-w-6xl mx-auto px-10'>
            <div className='md:flex '>
                <div className='md:w-6/12'> 
                    <h1 className='font-bold text-xl'>Footer</h1>
                </div>
                <div className='md:w-3/12'>
                    <h1 className='font-bold'>Link</h1>
                        <ul>
                            <li>
                                <Link href="" className='md:text-md text-sm'>Home</Link>
                            </li>
                            <li>
                                <Link href="" className='md:text-md text-sm'>Blog</Link>
                            </li>
                            <li>
                                <Link href="" className='md:text-md text-sm'>Project</Link>
                            </li>
                            <li>
                                <Link href="" className='md:text-md text-sm'> Questions</Link>
                            </li>
                            <li>
                                <Link href="" className='md:text-md text-sm'> Snipet</Link>
                            </li>
                            <li>
                                <Link href="" className='md:text-md text-sm'> Certificate</Link>
                            </li>
                        </ul>
                </div>
                <div className='md:w-3/12'>
                    <h1 className='font-bold text-xl md:mt-0 mt-4'>Let&apos;s Connect 🚀</h1> 
                    <div className='mt-5 '>
                        <FooterIcons/>
                    </div> 
                </div>
            </div>
            <hr className='dark:border-dark-100 border-white-100 border border-solid my-5 rounded-full' />
            <div className='flex items-center justify-between my-5'>
                <div className='flex justify-center text-center items-center gap-3'>
                    <span className='relative flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60a5fa] opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-[#60a5fa]'></span>
                    </span>
                    <p className='text-sm'>© 2024 by ervin arviandi</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer