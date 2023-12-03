import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaThreads } from "react-icons/fa6";
import { Si500Px } from "react-icons/si";
import Link from 'next/link';


export default function Icons() {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex justify-center gap-2'>

        </div>
        <div className='flex justify-center items-ceter gap-3 text-white-100 dark:text-dark-100 absolute bottom-5'>
            <Link href="https://github.com/ervinarviandi" className=' dark:hover:text-[#fff] hover:text-[#000]'>
            <FaGithub size={20}/>
            </Link>
            <Link href="mailto:muhamadervin34@gmail.com" className=' dark:hover:text-[#fff] hover:text-[#000]'>
            <SiMinutemailer size={20}/>
            </Link>
            <Link href="https://www.threads.net/@ervinarviandi" className=' dark:hover:text-[#fff] hover:text-[#000]'>
            <FaThreads size={20} />
            </Link>
            <Link href="https://500px.com/p/muhamadervin34?view=photos" className=' dark:hover:text-[#fff] hover:text-[#000]'>
            <Si500Px size={20} />
            </Link>
        </div>
    </div>
  )
}
