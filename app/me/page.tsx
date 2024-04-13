"use client"

import Link from "next/link"
import Image from 'next/image'
import React, {useState} from 'react'
import Profile from "@/app/Assets/Profile/Profile.png"
import { MdVerified } from "react-icons/md";
import Card from "@/app/me/components/Card"
import { WavyBackground } from '@/components/ui/wavy-background';
import ModeToggle from '@/components/atom/ModeToggle'
import { PiLinkSimpleBold } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Marquee from 'react-fast-marquee'




const page = () => {

    const [isLoading, setLoading] = useState(true);

    return (
    <>
    <div className='relative'>
        <div className="p-1 dark:bg-teal-300 bg-teal-500 ">
            <Marquee loop={0} className="font-semibold text-xs">Web sedang dalam tahap maintenance 🔨👩‍💻</Marquee>
        </div>
    <div className='overflow-hidden h-80'>
        <WavyBackground props={WavyBackground} waveOpacity={0.7}  waveWidth={60}  backgroundFill='black' className='-mt-20'/> 
            </div>
        <div className='lg:max-w-6xl mx-auto p-5 '>
            <div className='flex justify-center items-center -mt-20  '>
                <div className=''>
                    <div className='relative'>
                <Image src={Profile} alt='MyProfile' width={150} height={100} 
                
                className={` relative bg-gradient-to-b  from-sky-400  to-emerald-400 before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-400 before:via-pink-400 before:to-pink-300 before:animate-pulse rounded-full p-2 hidden lg:block 
                 
                ${
                    isLoading
                      ? "scale-110 blur-2xl grayscale"
                      : "scale-100 blur-0 grayscale-0"
                  })`}
              onLoad={() => setLoading(false)} priority={true}
                />
                <div className='absolute bottom-4 -right-3 dark:bg-[#000]/60 bg-[#fff]/60 rounded-full hidden lg:block md:block backdrop-blur shadow-lg'>
                <ModeToggle />
                </div>
                </div>
                    </div>

                    <div className='relative'>
                <Image src={Profile} width={130} height={100} className='relative bg-gradient-to-b  from-sky-400  to-emerald-400 before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-400 before:via-pink-400 before:to-pink-300 before:animate-pulse rounded-full p-2 lg:hidden md:hidden block ' alt='MyProfile'/>
                <div className='absolute bottom-5 -right-3 dark:bg-[#000]/60 bg-[#fff]/60 rounded-full lg:hidden md:hidden block backdrop-blur  shadow-lg'>
                <ModeToggle />
                </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-5">
                <h1 className='text-2xl font-bold'>Ervin Arviandi</h1>
                <MdVerified  size={20} className='text-blue-400'/>
            </div>

            <div className="flex justify-center  my-3">
            <p className='  text-md text-center lg:w-8/12'>Tukang ngetik yang selalu belajar hal-hal baru tentang teknologi, dan membuat sesuatu yang bisa bermanfaat untuk orang lain 😉   </p>
            </div>

            <div className='flex justify-center items-center mt-3'>
                <Link href="  https://ervinarviandi.vercel.app/" className="text-indigo-400 text-md  text-center">
                https://ervinarviandi.vercel.app/
                </Link>
            </div>
            <div className='mt-7 max-w-2xl mx-auto p-5'>
                <div className="flex items-center gap-2">
                    <PiLinkSimpleBold size={20} />
                    <p className="text-md font-semibold">Links</p>
                </div>
                <Card />

                
                <div className="flex items-center gap-2 mt-7">
                    <LuPartyPopper size={20} />
                    <p className="text-md font-semibold">Get in touch</p>
                </div>
                    <div className="border-2 border-indigo-400 rounded-lg p-4 my-bg mt-5 backdrop-blur bg-[#111010]">
                       
                        <MdOutlineMarkEmailUnread size={30} />
                        <h2 className="text-md font-semibold my-2">Drop me an Email</h2>
                        <Link href="mailto:muhamadervin34@gmail.com" className="text-md my-3 dark:hover:text-emerald-300 hover:text-emerald-500">muhamadervin34@gmail.com</Link>
                        <p className="dark:text-gray-300 text-gray-600 mt-2 w-10/12">Expect my rapid and eager reply – your message won&apos;t be kept waiting!</p>
                    </div>
              
            </div>
        </div>
    </div>
   
    </>
  )
}

export default page