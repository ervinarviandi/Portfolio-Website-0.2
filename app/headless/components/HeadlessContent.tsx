import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo1 from"@/public/Blog/Headless/codeimage-snippet_1.svg"
import Logo2 from"@/public/Blog/Headless/codeimage-snippet_2linenumber.svg"
import { MdOutlineAvTimer } from 'react-icons/md'
import { FaEye } from 'react-icons/fa6'
import { FaRegCalendarAlt } from 'react-icons/fa'

const HeadlessContent = () => {
  return (
    <div>
          <p className='text-md text-center text-dark-100'>Web Development</p>
        <h1 className='text-center font-bold lg:text-3xl text-2xl my-4 '>Install / Implementasi Headless UI <br /> di dalam Project Next JS</h1>
          <div className='my-3 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2 md:text-md text-xs dark:text-dark-100 text-white-100'>
          <MdOutlineAvTimer />
            18:52
          </div>
          <div className='flex items-center gap-2 ml-3 md:text-md text-xs dark:text-dark-100 text-white-100 '>
            <FaEye/>
            10
          </div>
          </div>
          <div className='flex items-center gap-2 md:text-md text-xs dark:text-dark-100 text-white-100'>
            <FaRegCalendarAlt />
            Selasa, 21 November 2023
          </div>
          </div>
          <hr className='   border-dashed  dark:border-[#525252] border-1 border-white-100 my-5' />
          <div>
         <h5>Introduction</h5>
         <p className='mt-3 md:text-base text-sm'>   
        Untuk menginstal Headless UI di projek React, Kamu dapat menggunakan npm atau yarn. Headless UI adalah koleksi komponen UI tanpa desain yang dapat diakses dengan mudah untuk membangun pengalaman pengguna yang dapat diakses dengan baik.</p>

        <p className='mt-5 md:text-base text-sm'>Berikut adalah langkah-langkah untuk menginstal Headless UI menggunakan npm di projek React :</p>
        <p className='mt-4 md:text-base text-sm'>1. Buka terminal atau command prompt. disini saya merekomendasikan teman-teman menggunakan git, kalian bisa mendownloadnya <Link href="https://git-scm.com/" className='text-[#05b6d3]'>disini</Link> </p>
        <p className='mt-3 md:text-base text-sm'>2. Pastikan sudah berada di direktori projek React Kamu..</p>
        <p className='mt-3 md:text-base text-sm'>3. Jalankan perintah berikut untuk menginstal Headless UI menggunakan npm :</p>
        <Image src={Logo1} width={500} height={500} alt='gambar1' priority={true}/>
        
        <p className='mt-3 md:text-base text-sm'>4. Setelah instalasi selesai, teman-teman dapat mengimpor komponen Headless UI yang diperlukan ke dalam file React teman-teman dan mulai menggunakannya.</p>
        <p className='mt-2 md:text-base text-sm'>Contoh penggunaan Headless UI dalam komponen React:</p>
        <Image src={Logo2} width={500} height={500} alt='gambar2' priority={true}/>
        <p className='mt-3 md:text-base text-sm'>Pastikan untuk menyesuaikan penggunaan Headless UI sesuai dengan kebutuhan projek kamu. </p>
        <p className='mt-3 md:text-base text-sm'>Semoga membantu ya! 👋🧐 </p>
          </div>
    </div>
  )
}

export default HeadlessContent