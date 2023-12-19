"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Image1 from "@/app/Assets/cerificate/baparekraf-developer.jpg"
import Image2 from "@/app/Assets/cerificate/software-developer.jpg"
import Image3 from "@/app/Assets/cerificate/idcamp.jpg"
import Image4 from "@/app/Assets/cerificate/dicoding-scholarship.jpg"
import Image5 from "@/app/Assets/cerificate/flutter.jpg"
import Image6 from "@/app/Assets/cerificate/modular-javascript.jpg"
import Image7 from "@/app/Assets/cerificate/progate.png"
import Image8 from "@/app/Assets/cerificate/wbix.jpg"
import Image9 from "@/app/Assets/cerificate/Cintessa.jpg"
import Image10 from "@/app/Assets/cerificate/Sertifikat Coding Camp Front End - Moh Ervin Arviandi.webp"



const Certificate = () => {

    const [isLoading, setLoading] = useState(true);

  return (
    <div className='grid md:grid-cols-3 gap-5 mx-auto'>
        <div className='flex flex-col'>
            <Image src={Image1} width={400} height={400} alt="image1" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image2} width={400} height={400} alt="image2" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image3} width={400} height={400} alt="image3" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image4} width={400} height={400} alt="image4" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image5} width={400} height={400} alt="image5" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image6} width={400} height={400} alt="image6" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image7} width={400} height={400} alt="image7" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image8} width={400} height={400} alt="image8" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image9} width={400} height={400} alt="image9" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
        <div className='flex flex-col'>
            <Image src={Image10} width={400} height={400} alt="image10" className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
        </div>
    </div>
  )
}

export default Certificate