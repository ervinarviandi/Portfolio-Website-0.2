import React from 'react'
import { MdOutlineAvTimer } from 'react-icons/md'
import { FaEye } from 'react-icons/fa6'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Image from 'next/image'

const NextjsblogContent = () => {
  return (
    <div>
    <p className='text-md text-center text-dark-100'>Web Development</p>
  <h1 className='text-center font-bold lg:text-3xl text-2xl my-4 '>Install Next js</h1>
    <div className='my-3 flex justify-between items-center'>
    <div className='flex items-center gap-2'>
    <div className='flex items-center gap-2 md:text-md text-xs dark:text-dark-100 text-white-100'>
    <MdOutlineAvTimer />
      18:52
    </div>
    <div className='flex items-center gap-2 ml-3 md:text-md text-xs dark:text-dark-100 text-white-100'>
      <FaEye/>
      10
    </div>
    </div>
    <div className='flex items-center gap-2 md:text-md text-xs dark:text-dark-100 text-white-100'>
      <FaRegCalendarAlt />
      Minggu, 3 Desember 2023
    </div>
    </div>
    <hr className='  border-dashed  dark:border-[#525252] border-1 border-white-100 my-5' />
</div>
  )
}

export default NextjsblogContent