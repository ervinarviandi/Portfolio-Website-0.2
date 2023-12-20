"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Thumbnails from "@/public/qrcode-generator.jpg"
import Mobile from "@/public/Design/projects/mobile QrCode Design.svg"

export default function ImageCard() {

  const [isLoading, setLoading] = useState(true);

  
  return (
    <div className='mt-10 md:flex items-center'>
        <Image src={Thumbnails} width={500} height={500} className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} alt='Thubnails'/>
        <Image src={Mobile} priority width={400} height={400} className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} alt="mobile figma"/>
    </div>
  )
}
