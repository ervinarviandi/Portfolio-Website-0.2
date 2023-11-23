
import React from 'react'
import Link from 'next/link'
import { MdOutlineAvTimer } from "react-icons/md";
import {FaRegCalendarAlt } from "react-icons/fa"
import { FaEye } from "react-icons/fa6";


const AstroContent = () => {
  return (
    
    <div>
        <p className='text-md text-center text-dark-100'>Web Development</p>
        <h1 className='text-center font-bold lg:text-3xl text-2xl my-4 '>Bikin web dengan cepat,
        simple <br /> ngebut pakai Astro</h1>
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
          <div className='mt-7'>
          <p className='text-md'>Kalo ada client atau ada kebutuhan buat bikin aplikasi web yang simple kaya blog, landing page, company profile udah bisa ku pastikan aku bakal pake Astro.</p>
          <h1 className='font-bold mt-5 text-lg'>Astro tu apasih?</h1>
          <p className='text-md mt-3'>Astro ini tuh salah satu framework front-end kaya (next.js, nuxt.js, dll) tapi lebih fokus mempermudah pembuatan aplikasi web yang “content driven” kaya blog, landing page, company profile dll. Keunggulan lainnya juga si Astro ini bisa kombinasiin berbagai front-end libraries/framework, jadi kamu bisa pake Vue, React.js, Svelte itu dalam satu repository (walaupun aku ga rekomendasiin ini sih, mungkin bakal ku bahas di blog berikutnya)</p>

          <h1 className='font-bold mt-5 text-lg'>Kenapa Astro?</h1>
          <p className='text-md mt-3'>Aku udah ga pernah tuh kalo memulai project tu yang bikin file html, css satu-satu, sekarang udah banyak banget tools yg memudahkan ya salah satunya Astro ini, kenapa?</p>

          <ul itemType='circle' className='gap-5'>
            <li>Gampang banget init projectnya, tinggal coding HTML aja gausah banyak mikirin tentang post-development kaya web performance, security, dll</li>
            <li>Dipermudah banget kalo butuh tools apa apa kaya tailwind, css nya udah compressed, performance nya bagus bgt gilak</li>
            <li>Deployment ke cloud hosting yg populer juga udah gampang parah</li>
          </ul>

          <h1 className='font-bold mt-5 text-lg'>Tanpa ba-bi-bu mari kita cobain langsung pake Astro</h1>
          <div className='mt-3'>
          <ol typeof='A' className='text-md '>
            <li>1. Pastiin kamu udah install node.js di laptopmu</li>
            <li className='mt-2'>2. Bikin project baru pake Astro, jalanin command ini: <span className='p-2 bg-gray-600 rounded-md md:text-md text-xs'>npm create astro@latest</span></li>
            <li className='mt-2'>3. Ikutin proses instalasinya, nanti dia bakal bikinin kamu 1 project & folder baru dimana kamu jalanin command tsb</li>
            <li className='mt-2'>4. Kalo udah selesai, kamu bakal disuruh buat jalanin cd ke-directory yang kamu buat trus jalanin <span className='md:text-md text-xs bg-gray-600 p-2 rounded-md'>npm run dev</span></li>
            <li className='mt-2'>5. Nah command terakhir itu buat jalanin webmu dalam mode “development” dan kamu udah bisa mulai coding sekarang 🥳</li>
            <li className='mt-2'>6. Buat ngerjain segala project, sekarang aku pake tailwindcss buat mempermudah proses styling webnya, pake Astro gampang banget (matiin dulu <span className='md:text-md text-xs bg-gray-600 p-2 rounded-md'>npm run dev</span>  yg tadi udah dijalanin) trus tinggal run: <span className='md:text-md text-xs bg-gray-600 p-2 rounded-md'>npx astro add tailwind</span>  trus ikutin prosesnya (yes-yes aja), then done. Bisa jalanin development mode nya lagi (<span className='md:text-md text-xs bg-gray-600 p-2 rounded-md'>npm run dev</span> )</li>
            <li className='mt-2'>7. Di langkah ini udah cukup banget buat develop dan bikin aplikasi web yang “content driven” kaya blog, landing page, dll dan udah hampir dipastikan minimal web performance scorenya diatas 95!</li>
          </ol>

          <h1 className='font-bold mt-5 text-lg'>Terakhir, Deploy!</h1>
          <p className='mt-3'>Buat deploy sebenernya ngga usah tunggu development nya selesai, kita bisa langsung deploy juga kok habis setup project diatas.</p>
          <p className='mt-3'>Deploying ke Vercel cukup gampang, tinggal jalanin perintah ‘vercel’ trus masukin username & password kamu yg terdaftar di vercel (ada opsi pake github juga). Trus dia bakal minta kamu buat project baru ato mau continues project yg sudah ada? Kalo kamu udah milih pilihan, trus ikutin aja prosesnya sampai selesai. Detailnya kamu bisa baca <Link target='_blank' className="text-teal-500" href="https://vercel.com/">disini</Link>.</p>
          <p className='mt-3'>Kalo proses selesai dia bakal bilang deploy successful & dia bakal masukin domain untuk web kamu yang baru successful deploy.</p>
          <p className='mt-3'>Kamu udah berhasil deploy, sekarang coba akses aja webmu di domain yg dia kasih tadi. Kalo kebuka bisa dipastikan webmu udah siap bisa diakses sama orang umum.</p>
          <p className='mt-3'>Selamat! 🥳</p>
          </div>
        </div>

    </div>
  
  )
}

export default AstroContent