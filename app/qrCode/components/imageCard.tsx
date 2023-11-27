import React from 'react'
import Image from 'next/image'
import Thumbnails from "@/public/qrcode-generator.jpg"
import Mobile from "@/public/Design/projects/mobile QrCode Design.svg"

export default function imageCard() {
  return (
    <div className='mt-10 md:flex items-center'>
        <Image src={Thumbnails} width={500} height={500} alt='Thubnails'/>
        <Image src={Mobile} priority width={400} height={400} alt="mobile figma"/>
    </div>
  )
}
