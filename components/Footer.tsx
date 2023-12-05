
import React from 'react'
import Link from 'next/link'
import FooterIcons from './atom/FooterIcons'

const Footer = () => {
  return (
    <>
    <div className='w-full pt-10 pb-4'>
        <div className='md:max-w-6xl mx-auto lg:px-10 px-5'>
            <div className='md:flex '>
                <div className='md:w-5/12  '> 
                <p className='font-bold lg:text-xl text-md'>🤝 Let's get in touch</p>
                        <h4 className='lg:text-lg text-md md:mt-0 my-4 dark:text-dark-100 text-white-100'>Suka kopi, mau ngopi bareng?
                        <br /> Have any project ideas?
                        Ask something?</h4>
                </div>
                <div className='md:w-3/12'>
                    <h1 className='font-bold'>Link</h1>
                        <ul>
                            <li>
                                <Link href="/" className='md:text-md text-sm  dark:text-dark-100 text-white-100'>Home</Link>
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
                                <Link href="/studio" className='md:text-md text-sm  dark:text-dark-100 text-white-100'> Snipet</Link>
                            </li>
                            <li>
                                <Link href="/studio" className='md:text-md text-sm  dark:text-dark-100 text-white-100'> Certificate</Link>
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
            <hr className='dark:border-[#525252] border-1 border-white-100  border-solid my-5 rounded-full' />
            <div className='flex items-center justify-between my-5'>
                <div className='flex justify-center text-center items-center gap-3'>
                    <span className='relative flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-[#a78bfa]'></span>
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