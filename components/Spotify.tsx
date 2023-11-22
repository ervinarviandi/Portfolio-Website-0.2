import React from 'react'
import Image from 'next/image'
import Icons from "@/app/Assets/Icons/Spotify.png"
import Link from 'next/link'
import Marquee from 'react-fast-marquee'



const Spotify = () => {
  return (
    <div className=' w-full py-0.5 bg-green-400 bottom-0  '>
        <div className='px-4 flex justify-between items-center gap-3'>
            <Link className='flex items-center gap-2' target='_blank' href="https://open.spotify.com/intl-id/track/74ewFAgDzRkhZ7EX2eLtfZ?si=05adb5eb7fba4777" >
            <Image src={Icons} width={20} height={20} alt='spotify'/>
            <span className="text-xs text-[#000]">Playing Now......</span>
            </Link>
            <div className='w-7/12'>
            <Marquee loop={0} className='text-xs text[#fff]'>karena ada maintanance pada spotify for developer, untuk sementara hanya bisa untuk di link aja, kedepannya akan coba memperbaikinya lagi.  </Marquee>
            </div>
           
        </div>
    </div>
  )
}

export default Spotify