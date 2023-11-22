import React from 'react'
import Image from 'next/image'
import Logo from "@/public/404 error lost in space bg-dark.gif"
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <>
    <div>

    <div className='flex justify-center items-center'>
        <Image src={Logo} width={320} height={320} alt='animateErrorPage' className='rounded-full'/>
    </div>
        <div className='text-center  w-10/12 mx-auto'>
          <p className='text-center'>Oops! something went wrong and the page you're looking for cannot be found</p>
          <span className='mr-2'>please <Link href="/" className='text-blue-500'>Go Back</Link></span>
        </div>
    </div>
    </>
  )
}

export default ErrorPage
