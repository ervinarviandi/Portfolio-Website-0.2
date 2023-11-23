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
        <h1 className='text-center font-bold lg:text-3xl text-2xl my-4 '>Install / Implemetasi Headless UI <br /> di dalam Project Next JS</h1>
          <div className='my-3 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2 md:text-md text-xs'>
          <MdOutlineAvTimer />
            18:52
          </div>
          <div className='flex items-center gap-2 ml-3 md:text-md text-xs'>
            <FaEye/>
            10
          </div>
          </div>
          <div className='flex items-center gap-2 md:text-md text-xs'>
            <FaRegCalendarAlt />
            Selasa, 21 November 2023
          </div>
          </div>
          <hr className=' border-dashed  border-gray-200 my-5' />
          <div>
         <h5>Introduction</h5>
         <p className='mt-3'>   
        Untuk menginstal Headless UI di projek React, Kamu dapat menggunakan npm atau Yarn. Headless UI adalah koleksi komponen UI tanpa desain yang dapat diakses dengan mudah untuk membangun pengalaman pengguna yang dapat diakses dengan baik.</p>

        <p className='mt-5'>Berikut adalah langkah-langkah untuk menginstal Headless UI menggunakan npm di projek React :</p>
        <p className='mt-4'>1. Buka terminal atau command prompt. disi saya merekomendasikan kalian menggunakan git, kalian bisa mendownloadnya <Link href="https://git-scm.com/" className='text-[#05b6d3]'>disini</Link> </p>
        <p className='mt-3'>2. Pastikan sudah berada di direktori projek React Kamu..</p>
        <p className='mt-3'>3. Jalankan perintah berikut untuk menginstal Headless UI menggunakan npm :</p>
        <Image src={Logo1} width={500} height={500} alt='gambar1' priority={true}/>
        
        <p className='mt-3'>4. Setelah instalasi selesai, Anda dapat mengimpor komponen Headless UI yang diperlukan ke dalam file React Anda dan mulai menggunakannya.</p>
        <p className='mt-2'>Contoh penggunaan Headless UI dalam komponen React:</p>
        <Image src={Logo2} width={500} height={500} alt='gambar2' priority={true}/>
        <p className='mt-3'>Pastikan untuk menyesuaikan penggunaan Headless UI sesuai dengan kebutuhan projek kamu. </p>
        <p className='mt-3'>Semoga membantu ya teman-teman 👋🧐 </p>
          </div>
    </div>
  )
}

export default HeadlessContent