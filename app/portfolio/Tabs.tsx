"use client"
import { useState, useEffect } from "react"
import Projects1 from "@/public/qrcode-generator.jpg"
import Logo from "@/app/Assets/projects thumbnails/nextStarterKit.png"
import Logo2 from "@/public/reactlink.jpg"
import Logo3 from "@/public/bubble-cleaner.jpg"
import Logo4 from "@/public/Crud Ci.jpg"
import Dzikir from "@/public/DzikirPage.jpg"
import Copas from "@/public/copas-abangkuu.jpg"
import FramerLogo from "@/components/Tech Stack/icons small/FramerLogo"
import TailwindLogo from "@/components/Tech Stack/icons small/TailwindLogo"
import TypescriptLogo from "@/components/Tech Stack/icons small/Typescript"
import NextLogo from "@/components/Tech Stack/icons small/NextJs"
import { Tab } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { TiPin } from "react-icons/ti"
import { FaArrowRight } from "react-icons/fa6"
import ReactLogo from "@/components/Tech Stack/icons small/ReactLogo"
import CodeigniterLogo from "@/components/Tech Stack/icons small/CodeigniterLogo"
import BootstrapLogo from "@/components/Tech Stack/icons small/BootstrapLogo"
import ViteLogo from "@/components/Tech Stack/icons small/ViteLogo"
import Karya from "@/app/Assets/Photoshop/juglr land 3.webp"
import Karya1 from "@/app/Assets/Photoshop/croosocean.webp"
import Karya2 from "@/app/Assets/Photoshop/the last soldier.webp"
import Karya3 from "@/app/Assets/Photoshop/erfan.webp"
import Karya4 from "@/app/Assets/Photoshop/dheni patungka.webp"
import Karya5 from "@/app/Assets/Photoshop/reza arap.webp"
import Karya6 from "@/app/Assets/Photoshop/Microworlds 1.webp"
import Karya7 from "@/app/Assets/Photoshop/Microworlds.webp"
import JavascriptLogo from "@/components/Tech Stack/icons small/JavascriptLogo"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="mx-auto  w-full py-16 sm:px-0">
      <Tab.Group manual>
        <Tab.List className="dark:bg-card100  bg-card200 text-white mx-auto flex space-x-1 rounded-full p-1 ">
          <Tab
            className={({ selected }) =>
              classNames(
                "delay-50 text-gradient100 font-poppins  w-full rounded-full bg-[#fff] py-2.5 text-sm font-medium leading-5 shadow-lg transition duration-700 ease-in-out  hover:text-[#2bccb8] dark:bg-[#1e1e1e] ",
                selected
                  ? "text-white  dark:bg-[#1e1e1e] "
                  : "dark:text-gradient200  text-gradient200"
              )
            }
          >
            Web / App
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "delay-50 w-full rounded-full  bg-[#fff] py-2.5 text-sm font-medium leading-5 shadow-lg transition duration-700 ease-in-out hover:text-[#2bccb8] dark:bg-[#1e1e1e] ",
                selected
                  ? " dark:bg-[#1e1e1e] "
                  : "hover:text-[#2bccb8] dark:bg-[#1e1e1e] "
              )
            }
          >
            Web Design
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "delay-50 w-full rounded-full  bg-[#fff] py-2.5 text-sm font-medium leading-5 shadow-lg transition  duration-700 ease-in-out hover:text-[#2bccb8] dark:bg-[#1e1e1e]",
                selected
                  ? " text-[#fff] "
                  : "hover:text-[#2bccb8] dark:bg-[#1e1e1e] "
              )
            }
          >
            Graphic Design
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl p-3 dark:bg-backgrounddark">
            <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2  ">
              <div className="flex flex-col">
                <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                      <TiPin className="text-black" />
                      <p className="text-sm text-black">Featured</p>
                    </div>
                    <Image
                      src={Dzikir}
                      width={500}
                      height={500}
                      alt="DizikirApp"
                      className={`
              rounded-t-lg duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                      onLoad={() => setLoading(false)}
                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0 ">
                      <Link
                        href="/Dzikir"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d]  to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl">
                      Adzkin Dzikir App
                    </h2>
                    <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                      {" "}
                      simple application that aims to make it easier for Muslims
                      to do morning and evening dhikr according to the guidance
                      of the Prophet sallallaahu &apos;alaihi wasallam via
                      mobile phones, tablets or website-based laptops.
                    </p>
                    <div className="flex items-center gap-2">
                      <ReactLogo />
                      <TypescriptLogo />
                      <TailwindLogo />
                      <NextLogo />
                      <FramerLogo />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                      <TiPin className="text-black" />
                      <p className="text-sm text-black">Featured</p>
                    </div>
                    <Image
                      src={Copas}
                      width={500}
                      height={500}
                      alt="templateKata"
                      className={`
              rounded-t-lg duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                      onLoad={() => setLoading(false)}
                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0 ">
                      <Link
                        href="/copasabangku"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d]  to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl">
                      Copas Abangkuu
                    </h2>
                    <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                      {" "}
                      A simple words list application that you can copy and
                      paste, words that are currently trending on social media.
                    </p>
                    <div className="flex items-center gap-2">
                      <ReactLogo />
                      <TypescriptLogo />
                      <TailwindLogo />
                      <NextLogo />
                      <FramerLogo />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                      <TiPin className="text-black" />
                      <p className="text-sm text-black">Featured</p>
                    </div>
                    <Image
                      src={Projects1}
                      width={500}
                      height={500}
                      alt="QrCode"
                      className={`
              rounded-t-lg duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                      onLoad={() => setLoading(false)}
                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0 ">
                      <Link
                        href="/qrCode"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d]  to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl">
                      Qr Code Generator
                    </h2>
                    <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                      A simple QR Code Generator. You can convert the web link
                      into QR Code instantly here and download it to your local
                      device.
                    </p>
                    <div className="flex items-center gap-2">
                      <ReactLogo />
                      <TypescriptLogo />
                      <TailwindLogo />
                      <ViteLogo />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                      <TiPin className="text-black" />
                      <p className="text-sm text-black">Featured</p>
                    </div>
                    <Image
                      src={Logo}
                      width={500}
                      height={500}
                      alt="QrCode"
                      className={`
              rounded-t-lg duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                      onLoad={() => setLoading(false)}
                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0 ">
                      <Link
                        href="/starterTemplate"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d]  to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl">
                      Next App Router Starter Kit
                    </h2>
                    <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                      Next js 14.0.2 starter kit using Tailwind CSS, Zustand,
                      SWR, Lint and Formatter.
                    </p>
                    <div className="flex items-center gap-2">
                      <NextLogo />
                      <TypescriptLogo />
                      <TailwindLogo />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                      <TiPin className="text-black" />
                      <p className="text-sm text-black">Featured</p>
                    </div>
                    <Image
                      src={Logo2}
                      width={500}
                      height={500}
                      alt="QrCode"
                      className={`
              rounded-t-lg duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                      onLoad={() => setLoading(false)}
                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0 ">
                      <Link
                        href="/linktreeClone"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d]  to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl">
                      Linktree Clone
                    </h2>
                    <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                      A Bio link to connect customers to the business or
                      portfolio website.
                    </p>
                    <div className="flex items-center gap-2">
                      <ReactLogo />
                      <TailwindLogo />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                      <TiPin className="text-black" />
                      <p className="text-sm text-black">Featured</p>
                    </div>
                    <Image
                      src={Logo3}
                      width={500}
                      height={500}
                      alt="QrCode"
                      className={`
              rounded-t-lg duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                      onLoad={() => setLoading(false)}
                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0 ">
                      <Link
                        href="/bubbleCleaner"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d]  to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl">
                      Bubble Cleaner
                    </h2>
                    <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                      a simple landing page bubble cleaner i made to improve my
                      slicing.
                    </p>
                    <div className="flex items-center gap-2">
                      <ReactLogo />
                      <JavascriptLogo />
                      <TailwindLogo />
                      <ViteLogo />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                      <TiPin className="text-black" />
                      <p className="text-sm text-black">Featured</p>
                    </div>
                    <Image
                      src={Logo4}
                      width={500}
                      height={500}
                      alt="QrCode"
                      className={`
              rounded-t-lg duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                      onLoad={() => setLoading(false)}
                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0 ">
                      <Link
                        href="/bookshelf"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        View Project
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d]  to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl">
                      Bookshelf Apps
                    </h2>
                    <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                      {" "}
                      A bookshelf app that can show, search, add, delete, update
                      book and move book to other shelf.
                    </p>
                    <div className="flex items-center gap-2">
                      <CodeigniterLogo />
                      <BootstrapLogo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="dark:text-white rounded-xl p-3 text-gray-700 dark:bg-backgrounddark"></Tab.Panel>
          <Tab.Panel className="dark:text-white rounded-xl p-3 text-gray-700 dark:bg-backgrounddark ">
            <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
              <div className="flex flex-col">
                <Image
                  src={Karya}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="TheJunggleBook"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={Karya1}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="CrossTheOcean"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={Karya2}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="CrossTheOcean"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={Karya3}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="CrossTheOcean"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={Karya4}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="CrossTheOcean"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={Karya5}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="CrossTheOcean"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={Karya6}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="CrossTheOcean"
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={Karya7}
                  width={400}
                  height={400}
                  className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                  alt="CrossTheOcean"
                />
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
