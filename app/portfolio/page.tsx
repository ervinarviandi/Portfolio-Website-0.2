import Navigation from '@/components/Navigation'
import React from 'react'
import Image from 'next/image'
import Logo from "@/public/reactlink.jpg"
import Logo1 from "@/public/qrcode-generator.jpg"
import Projects from "@/public/services/projects.json"
import Link from 'next/link'
import Projects1 from "@/public/qrcode-generator.jpg"
import Projects2 from "@/public/reactlink.jpg"
import Projects3 from "@/public/bubble-cleaner.jpg"
import ReactLogo from "@/components/Tech Stack/icons small/ReactLogo"
import TailwindLogo from "@/components/Tech Stack/icons small/TailwindLogo"
import TypescriptLogo from "@/components/Tech Stack/icons small/Typescript"
import ViteLogo from "@/components/Tech Stack/icons small/ViteLogo"
import BootstrapLogo from "@/components/Tech Stack/icons small/BootstrapLogo"
import { TiPin } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import Tabs from './Tabs'


const Portfolio = () => {



  return (
      <>
    <div>
      <Navigation/>
        <div className='w-full pt-28 MyPortfolio'>
            <div className='md:max-w-7xl mx-auto md:px-10 px-5'>
                <div className="">
                  <h1 className='font-bold md:text-5xl text-2xl text-[#000] dark:text-[#fff]'>Projects</h1>
                  <p className='md:text-md text-sm dark:text-dark-100 text-white-100 mt-4'>I&apos;ve worked on a variety of projects, ranging from small MVPs to full-scale applications, also developed a wide array of features
                  and functionalities in projects.</p>

                  <hr className=' border-dashed  border-gray-200 my-5' />
                </div>
               <Tabs/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio