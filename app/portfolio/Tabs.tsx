"use client"
import { useState, useEffect} from 'react'
import Projects1 from "@/public/qrcode-generator.jpg"
import Logo2 from "@/public/reactlink.jpg"
import Logo3 from "@/public/bubble-cleaner.jpg"
import TailwindLogo from "@/components/Tech Stack/icons small/TailwindLogo"
import TypescriptLogo from "@/components/Tech Stack/icons small/Typescript"
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { TiPin } from 'react-icons/ti'
import { FaArrowRight } from 'react-icons/fa6'
import ReactLogo from '@/components/Tech Stack/icons small/ReactLogo'





function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
 

  return (
    <div className="w-full  mx-auto px-2 py-16 sm:px-0">
      <Tab.Group manual>
            <Tab.List className="flex max-w-4xl mx-auto space-x-1 rounded-full dark:bg-card100 bg-card200 p-1 text-white ">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-gradient100 font-poppins ",
                    selected ? "dark:bg-[#1e1e1e] bg-[#e7e5e5] text-white " : "dark:text-gradient200  text-gradient200 hover:bg-blue-400"
                  )
                }
              >
                Web Developer
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-gradient100 font-poppins ",
                    selected ? "dark:bg-[#1e1e1e] hover:bg-blue-400 text-white " : "dark:text-gradient200  text-gradient200"
                  )
                }
              >
                Web Design
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-gradient100 dark:bg-[#1e1e1e] bg-[] font-poppins",
                    selected ? "dark:bg-[#1e1e1e] text-white " : "dark:text-gradient200 text-gradient200 "
                  )
                }
              >
                Graphic Design
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3">
                <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto  ">
                <div className='flex flex-col'>
                    <div className='dark:bg-[#1e1e1e] bg-[#fff] rounded-lg  border-slate-200 dark:border-none border-2 hover:shadow-md hover:scale-[102%] duration-300 ease-in-out relative group '>
                        <div className='overflow-hidden relative group  '>
                        <div className='absolute top-0 right-0 bg-lime-300 p-1 rounded-tr-lg rounded-bl-lg backdrop-blur flex items-center gap-1 z-0   duration-200 '>
                            < TiPin className="text-black"/>
                            <p className='text-sm text-black'>Featured</p>
                        </div>
                        <Image src={Projects1} width={500} height={500} alt='QrCode' className='rounded-t-lg '/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/qrCode" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
        
                       
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold  group-hover:text-[#05b6d3]'>Qr Code Generator</h2>
                            <p className='md:text-md text-sm dark:text-dark-100 text-white-100 py-3'>A simple QR Code Generator. You can convert the web link into QR Code instantly here and download it to your local device.</p>
                            <div className='flex items-center gap-2'>
                                <ReactLogo />
                                <TypescriptLogo/>
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
                        <Image src={Logo2} width={500} height={500} alt='QrCode' className='rounded-t-lg '/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/linktreeClone" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold  group-hover:text-[#05b6d3]'>Linktree Clone</h2>
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
                        <Image src={Logo3} width={500} height={500} alt='QrCode' className='rounded-t-lg '/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/bubbleCleaner" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold  group-hover:text-[#05b6d3]'>Bubble Cleaner</h2>
                            <p className='md:text-md text-sm dark:text-dark-100 text-white-100 py-3'>a simple landing page bubble cleaner i made to improve my slicing.</p>
                            <div className='flex items-center gap-2'>
                                <ReactLogo />
                                <TailwindLogo/>
                            </div>
                        </div>
                    </div>
                </div>
                 
                 
                 

                 
                 
                 
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3 dark:text-white text-gray-700"></Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3 dark:text-white text-gray-700 ">
                <div className="grid md:grid-cols-2 gap-2">
                  
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
    </div>
  )
}
