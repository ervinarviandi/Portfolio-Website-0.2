"use client"

import Image from 'next/image'
import React from 'react'
import Profile from "@/public/ervinarviandi.jpg"
import { MdVerified } from "react-icons/md";
import Card from "@/app/me/components/Card"
import { WavyBackground } from '@/components/ui/wavy-background';



const page = () => {

    
  
  






    return (
    <>
    <div>
        <WavyBackground props={WavyBackground} waveOpacity={0.7}  waveWidth={50}  backgroundFill='white'  > </WavyBackground>
    </div>

    <div className=''>
        <div className='lg:max-w-6xl mx-auto p-5 '>
            <div className='flex justify-center items-center mt-7 '>
                <Image src={Profile} width={100} height={100} className='rounded-full flex justify-center items-center  border-2 border-gray-500' alt='MyProfile'/>
              
            </div>
            <div className="flex justify-center items-center gap-2 mt-5">
                <h1 className='text-2xl font-bold'>Ervin Arviandi</h1>
                <MdVerified  size={20} className='text-blue-400'/>
            </div>
            <div className='flex justify-center items-center gap-2 rounded-lg p-4 mt-5'>
              <h1 className='font-bold text-2xl '>My sosial media</h1>
            </div>
            <div className='mt-7 max-w-2xl mx-auto p-5'>
                <Card />
            </div>
        </div>
    </div>
   
    </>
  )
}

export default page