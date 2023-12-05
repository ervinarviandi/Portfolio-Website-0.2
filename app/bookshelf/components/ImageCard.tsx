
import React from 'react'
import Image from 'next/image'
import Logo from "@/public/Crud Ci.jpg"


export default function ImageCard() {
  return (
    <div className='mt-10 md:flex items-center'>
        <Image src={Logo} width={500} height={500} alt='Bookshelf apps'/>
    </div>
  )
}
