
import React from 'react'
import Link from 'next/link'
// import FooterIcons from './atom/FooterIcons'

const Footer = () => {
  return (
    <>
    <div className='w-full pt-10 pb-4'>
        <div className='md:max-w-6xl mx-auto lg:px-10 px-5'>
            <div className='grid md:grid-cols-2 '>
                <div className='flex flex-col'> 
                <p className='font-bold lg:text-xl text-md'>🤝 Let&apos;s get in touch</p>
                        <h4 className='lg:text-lg text-md md:mt-0 my-4 dark:text-dark-100 text-white-100'>Suka kopi, mau ngopi bareng?
                        <br /> Have any project ideas?
                        Ask something?</h4>
                </div>
               
                {/* <div className='md:w-3/12'>
                    <h1 className='font-bold text-xl md:mt-0 mt-4'>Let&apos;s Connect 🚀</h1> 
                    <div className='mt-5 '>
                        <FooterIcons/>
                    </div> 
                </div> */}
            </div>
            <div className='flex flex-col'>
                        <ul className='flex items-center gap-2 overflow-hidden overflow-x-scroll myScrollbar'>
                          
                            <li>
                                <Link href="/about" className='md:text-md text-sm  dark:text-dark-100 text-white-100'>About</Link>
                            </li>
                            <li>
                                <Link href="/myBlog" className='md:text-md text-sm  dark:text-dark-100 text-white-100'>Blog</Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className='md:text-md text-sm  dark:text-dark-100 text-white-100'>Project</Link>
                            </li>
                            <li>
                                <Link href="/studio" className='md:text-md text-sm  dark:text-dark-100 text-white-100'> Questions</Link>
                            </li>
                          
                            <li>
                                <Link href="/myCertificate" className='md:text-md text-sm  dark:text-dark-100 text-white-100'> Certificate</Link>
                            </li>
                            <li>
                                <Link href="/contact" className='md:text-md text-sm  dark:text-dark-100 text-white-100'> Contact</Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className='md:text-md text-sm  dark:text-dark-100 text-white-100'> Dashboard</Link>
                            </li>
                        </ul>
                </div>
            <hr className='dark:border-[#525252] my-0.5 border-1 border-white-100  border-solid  rounded-full' />
            <div className='flex items-center justify-between my-5'>
                <div className='flex justify-center text-center items-center gap-3'>
                    <span className='relative flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2bccb8] opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-[#2bccb8]'></span>
                    </span>
                    <p className='text-sm dark:text-dark-100 text-white-100 '>© 2024 by ervin arviandi</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer