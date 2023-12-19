import React from 'react'
import { FaEye, FaRegCalendarAlt } from 'react-icons/fa'
import { MdOutlineAvTimer } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import Code from "@/app/Assets/CodeImage/codeimage-snippet_17.svg"
import Code2 from "@/app/Assets/CodeImage/codeimage-snippetsss.svg"


const content = "'../components/BlurImage'"

const LazyContent = () => {
  return (
    <div>
        <p className='text-md text-center text-dark-100'>Web Development</p>
        <h1 className='text-center font-bold lg:text-3xl text-2xl my-4 '>Membuat Lazy Load 
        Image  <br />Dengan Efek Blur</h1>
          <div className='my-3 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2 md:text-md text-xs dark:text-dark-100 text-white-100'>
          <MdOutlineAvTimer />
            17:43
          </div>
          <div className='flex items-center gap-2 ml-3 md:text-md text-xs dark:text-dark-100 text-white-100'>
            <FaEye/>
            6
          </div>
          </div>
          <div className='flex items-center gap-2 md:text-md text-xs dark:text-dark-100 text-white-100'>
            <FaRegCalendarAlt />
            Minggu, 17 Desember 2023
          </div>
          </div>
          <hr className=' border-dashed  dark:border-[#525252] border-1 border-white-100 my-5' />

          <div className='mt-7'>
            <p className='text-md my-3 font-bold'>Introduction</p>
            <p className='md:text-base text-sm'>Gambar adalah komponen terberat dari sebuah situs web. Gambar mencegah situs web memuat lebih cepat dan menurunkan kinerjanya. Hal ini mungkin mengakibatkan pengalaman pengguna yang buruk. Oleh karena itu, dalam artikel ini, saya akan mengajari teman-teman cara paling sederhana dan termudah untuk menambahkan gambar buram saat memuat halaman di dalam project React js.</p>

            <p className='mt-5 md:text-base text-sm'>Pada artikel ini, saya akan menggunakan Tailwind CSS. Pengetahuan dasar tentang Tailwind CSS akan diperlukan.</p>
            <p className='md:text-base text-sm mt-5'>Langkah 1: Install Tailwind CSS with Next.js</p>
            <p className='md:text-base text-sm mt-5'>Inisialisasi tailwind di dalam aplikasi Next.js</p>
          </div>
          <div className='bg-[#282a36] p-2 mt-5 rounded-lg md:w-8/12'>
            <p className='md:text-base text-sm'>  <span className='text-blue-400'>npm</span> install -D tailwindcss postcss autoprefixer</p>
            <p className='mt-2 md:text-base text-sm'> <span className='text-blue-400'>npx</span> tailwindcss init -p</p>
          </div>
          <p className='mt-5 md:text-base text-sm'>untuk lebih jelasnya kalian bisa baca dokumentasi di website resminya <Link href="https://tailwindcss.com/" className='text-[#38bdf8]'>https://tailwindcss.com/</Link></p>

          <p className='mt-5 md:text-base text-sm'>Langkah 2: Buat Component Gambar Blur</p>
          <p className='mt-5 md:text-base text-sm'>Buat file baru dengan nama <span className='p-2 rounded-lg bg-[#282a36]'>BlurImage.jsx</span> di dalam folder component</p>
          <p className=' mt-5 md:text-base text-sm'>Di dalam folder komponen/BlurImage.jsx, tambahkan kode berikut,</p>
          <Image src={Code} width={600} height={600} alt='BlurImage' className='mt-4'/>

          <p className='mt-5 md:text-base text-sm'>langkah 3: Mengimpor Komponen Gambar Buram</p>

          <p className='mt-5 md:text-base text-sm'>Import component</p>

          <div className='mt-5 p-2 rounded-lg bg-[#282a36] md:w-8/12 overflow-hidden'>
            <p className='md:text-base text-xs  '> <span className='text-[#ff79c6]'> import </span> <span> BlurImage</span> <span className='text-[#50fa70]'> from </span> <span className='text-[#f1fa87]'>{content}</span></p>
          </div>

          <p className='mt-5 md:text-base text-sm'>Tambahkan Component di dalam halaman</p>
          <Image src={Code2} width={500} height={500} alt='Code2'/>

            <p className='mt-5 md:text-base text-sm'>Ini akan membuat gambar menjadi blur saat memuat halaman hingga gambar dimuat sepenuhnya.</p>
            <p className='mt-5 md:text-base text-sm'>terimakasih Sudah Membaca ! 🚀😉</p>

    </div>
  )
}

export default LazyContent