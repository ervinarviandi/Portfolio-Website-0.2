"use client"
import { useState, useEffect} from 'react'
import Projects1 from "@/public/qrcode-generator.jpg"
import Logo2 from "@/public/reactlink.jpg"
import Logo3 from "@/public/bubble-cleaner.jpg"
import Logo4 from "@/public/Crud Ci.jpg"
import TailwindLogo from "@/components/Tech Stack/icons small/TailwindLogo"
import TypescriptLogo from "@/components/Tech Stack/icons small/Typescript"
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { TiPin } from 'react-icons/ti'
import { FaArrowRight } from 'react-icons/fa6'
import ReactLogo from '@/components/Tech Stack/icons small/ReactLogo'
import CodeigniterLogo from '@/components/Tech Stack/icons small/CodeigniterLogo'
import BootstrapLogo from '@/components/Tech Stack/icons small/BootstrapLogo'
import ViteLogo from '@/components/Tech Stack/icons small/ViteLogo'
import Karya from "@/app/Assets/Photoshop/juglr land 3.webp"
import Karya1 from "@/app/Assets/Photoshop/croosocean.webp"
import Karya2 from "@/app/Assets/Photoshop/the last soldier.webp"
import Karya3 from "@/app/Assets/Photoshop/erfan.webp"
import Karya4 from "@/app/Assets/Photoshop/dheni patungka.webp"
import Karya5 from "@/app/Assets/Photoshop/reza arap.webp"
import Karya6 from "@/app/Assets/Photoshop/Microworlds 1.webp"
import Karya7 from "@/app/Assets/Photoshop/Microworlds.webp"






function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
 

  const [isLoading, setLoading] = useState(true);


  return (
    <div className="w-full  mx-auto py-16 sm:px-0">
      <Tab.Group manual>
            <Tab.List className="flex  mx-auto space-x-1 rounded-full dark:bg-card100 bg-card200 p-1 text-white ">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-gradient100 font-poppins dark:bg-[#1e1e1e] bg-[#fff]  hover:text-[#bef264] shadow-lg ",
                    selected ? "dark:bg-[#1e1e1e]  text-white " : "dark:text-gradient200  text-gradient200"
                  )
                }
              >
                Web Developer
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 hover:text-[#bef264] dark:bg-[#1e1e1e] bg-[#fff] shadow-lg ",
                    selected ? " dark:bg-[#1e1e1e] " : "hover:text-[#bef264] dark:bg-[#1e1e1e] "
                  )
                }
              >
                Web Design
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5  hover:text-[#bef264] dark:bg-[#1e1e1e] bg-[#fff] shadow-lg",
                    selected ? " text-[#fff] " : "hover:text-[#bef264] dark:bg-[#1e1e1e] "
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
                        <Image src={Projects1} width={500} height={500} alt='QrCode'  className={`
              duration-700 ease-in-out group-hover:opacity-75 rounded-t-lg
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/qrCode" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
        
                       
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold  group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264]'>Qr Code Generator</h2>
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
                        <Image src={Logo2} width={500} height={500} alt='QrCode' className={`
              duration-700 ease-in-out group-hover:opacity-75 rounded-t-lg
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/linktreeClone" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold  group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264]'>Linktree Clone</h2>
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
                        <Image src={Logo3} width={500} height={500} alt='QrCode' className={`
              duration-700 ease-in-out group-hover:opacity-75 rounded-t-lg
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/bubbleCleaner" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold  group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264]'>Bubble Cleaner</h2>
                            <p className='md:text-md text-sm dark:text-dark-100 text-white-100 py-3'>a simple landing page bubble cleaner i made to improve my slicing.</p>
                            <div className='flex items-center gap-2'>
                                <ReactLogo />
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
                        <Image src={Logo4} width={500} height={500} alt='QrCode' className={`
              duration-700 ease-in-out group-hover:opacity-75 rounded-t-lg
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}/>
                        <div className='absolute inset-0 translate-y-[100%] group-hover:translate-y-0 px-4 bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 py-7 transition-all duration-300  rounded-t-lg '>
                            <Link href="/bookshelf" className='flex justify-center items-center gap-2 py-[50px] group 0 hover:text-[#05b6d3]  text-gray-200 '>View Project
                            <FaArrowRight/>
                            </Link>
                        </div>
                        </div>
                        <div className='p-4'>
                            <h2 className='md:text-xl text-lg font-bold  group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264]'>Bookshelf Apps</h2>
                            <p className='md:text-md text-sm dark:text-dark-100 text-white-100 py-3'> A bookshelf app that can show, search, add, delete, update book and move book to other shelf.</p>
                            <div className='flex items-center gap-2'>
                                <CodeigniterLogo />
                                <BootstrapLogo/>
                            </div>
                        </div>
                    </div>
                </div>
                 
                 
                 

                 
                 
                 
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3 dark:text-white text-gray-700">
                
              </Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3 dark:text-white text-gray-700 ">
                <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                  <div className='flex flex-col'>
                    <Image src={Karya} width={400} height={400} alt='TheJunggleBook' />
                  </div>
                  <div className='flex flex-col'>
                    <Image src={Karya1} width={400} height={400} alt='CrossTheOcean' />
                  </div>
                  <div className='flex flex-col'>
                    <Image src={Karya2} width={400} height={400} alt='CrossTheOcean' />
                  </div>
                  <div className='flex flex-col'>
                    <Image src={Karya3} width={400} height={400} alt='CrossTheOcean' />
                  </div>
                  <div className='flex flex-col'>
                    <Image src={Karya4} width={400} height={400} alt='CrossTheOcean' />
                  </div>
                  <div className='flex flex-col'>
                    <Image src={Karya5} width={400} height={400} alt='CrossTheOcean' />
                  </div>
                  <div className='flex flex-col'>
                    <Image src={Karya6} width={400} height={400} alt='CrossTheOcean' />
                  </div>
                  <div className='flex flex-col'>
                    <Image src={Karya7} width={400} height={400} alt='CrossTheOcean' />
                  </div>
                  {/* <div className='flex flex-col'>
                    <Image src={Karya8} width={400} height={400} alt='CrossTheOcean'/>
                  </div> */}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
    </div>
  )
}
