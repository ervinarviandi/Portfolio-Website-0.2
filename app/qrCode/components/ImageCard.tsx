"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Logo from "@/public/5.png"
import Mobile from "@/app/Assets/Photoshop/mobile qr code figma.svg"


export default function ImageCard() {

  const [isLoading, setLoading] = useState(true);
  return (
    <div className='mt-10 md:flex items-center'>
        <Image src={Logo} width={500} height={500} className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} alt='qrCodeDesktop'/>
        <Image src={Mobile} width={500} height={500} className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} alt='qrCode Mobile'/>
    </div>
  )
}
