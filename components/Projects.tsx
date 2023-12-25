import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
import JavascriptLogo from './Tech Stack/icons small/JavascriptLogo'

const Title = "Latest Project";
const Description = "I'm also experienced at some website development and software testing that i learn for 4 month will described below"

const Projects = () => {








  return (
    <div className='w-full py-10'>
        <div className='md:max-w-7xl mx-auto lg:px-10 px-5 '>
            <h2 className='md:text-3xl text-xl font-bold'>{Title}</h2>
            <p className='md:text-lg text-md dark:text-dark-100 text-white-100 mt-4 lg:w-10/12'>{Description}</p>
            <div className='grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-4'>
                <div className='flex flex-col'>
                    <div className='dark:bg-[#1e1e1e] bg-[#fff] rounded-lg  border-slate-200 dark:border-none border-2 hover:shadow-md hover:scale-[102%] duration-300 ease-in-out relative group '>
                        <div className='overflow-hidden relative group  '>
                        <div className='absolute top-0 right-0 bg-lime-300 p-1 rounded-tr-lg rounded-bl-lg backdrop-blur flex items-center gap-1 z-0   duration-200 '>
                            < TiPin className="text-black"/>
                            <p className='text-sm text-black'>Featured</p>
                        </div>
                        <Image src={Projects1} width={500} height={500} alt='QrCode'   objectFit="cover"
                        className="rounded-t-lg"
                      /> 
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/qrCode" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>

                        </div>
                        </div>
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}
                       
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264]    '>Qr Code Generator</h2>
                            <p className='md:text-md text-sm dark:text-dark-100 text-white-100 py-3'>A simple QR Code Generator. You can convert the web link into QR Code instantly here and download it to your local device.</p>
                            <div className='flex items-center gap-2'>
                                <ReactLogo />
                                <TypescriptLogo/>
                                <TailwindLogo/>
                                <ViteLogo/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='dark:bg-[#1e1e1e] bg-[#fff] rounded-lg  border-slate-200 dark:border-none border-2 hover:shadow-md hover:scale-[102%] duration-300 ease-in-out relative group '>
                        <div className='overflow-hidden relative group  '>
                        <div className='absolute top-0 right-0 bg-lime-300 p-1 rounded-tr-lg rounded-bl-lg backdrop-blur flex items-center gap-1 z-0   duration-200 '>
                            < TiPin className="text-black"/>
                            <p className='text-sm text-black'>Featured</p>
                        </div>
                        <Image src={Projects2} width={500} height={500} alt='QrCode' className='rounded-t-lg '/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/linktreeClone" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] '>Linktree Clone</h2>
                            <p className='md:text-md text-sm dark:text-dark-100 text-white-100 py-3'>A Bio link to connect customers to the business or portfolio website.</p>
                            <div className='flex items-center gap-2'>
                                <ReactLogo />
                                <TailwindLogo/>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='dark:bg-[#1e1e1e] bg-[#fff] rounded-lg  border-slate-200 dark:border-none border-2 hover:shadow-md hover:scale-[102%] duration-300 ease-in-out relative group '>
                        <div className='overflow-hidden relative group  '>
                        <div className='absolute top-0 right-0 bg-lime-300 p-1 rounded-tr-lg rounded-bl-lg backdrop-blur flex items-center gap-1 z-0   duration-200 '>
                            < TiPin className="text-black"/>
                            <p className='text-sm text-black'>Featured</p>
                        </div>
                        <Image src={Projects3} width={500} height={500} alt='bubbleCleaner' className='rounded-t-lg '/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/bubbleCleaner" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] '>Bubble Cleaner</h2>
                            <p className='md:text-md text-sm dark:text-dark-100 text-white-100 py-3'>a simple landing page bubble cleaner i made to improve my slicing.</p>
                            <div className='flex items-center gap-2'>
                                <ReactLogo />
                                <JavascriptLogo/>
                                <TailwindLogo/>
                                <ViteLogo/>
                               
                            </div>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default Projects