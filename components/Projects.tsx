import React from "react"
import Link from "next/link"
import Image from "next/image"
import Dzikir from "@/public/DzikirPage.jpg"
import Copas from "@/public/copas-abangkuu.jpg"
import Projects1 from "@/public/qrcode-generator.jpg"
import Logo from "@/app/Assets/projects thumbnails/nextStarterKit.png"
import Projects2 from "@/public/reactlink.jpg"
import Projects3 from "@/public/bubble-cleaner.jpg"
import ReactLogo from "@/components/Tech Stack/icons small/ReactLogo"
import TailwindLogo from "@/components/Tech Stack/icons small/TailwindLogo"
import TypescriptLogo from "@/components/Tech Stack/icons small/Typescript"
import ViteLogo from "@/components/Tech Stack/icons small/ViteLogo"
import NextLogo from "@/components/Tech Stack/icons small/NextJs"
import FramerLogo from "@/components/Tech Stack/icons small/FramerLogo"
import { TiPin } from "react-icons/ti"
import { FaArrowRight } from "react-icons/fa6"
import JavascriptLogo from "./Tech Stack/icons small/JavascriptLogo"
import { HiOutlineArrowCircleRight } from "react-icons/hi"

const Title = "Latest Project"
const Description =
  "I'm also experienced at some website development and software testing that i learn for 4 month will described below"

const Projects = () => {
  return (
    <div className="w-full py-10">
      <div className="mx-auto px-5 md:max-w-7xl lg:px-10 ">
        <h2 className="text-xl font-bold md:text-3xl">{Title}</h2>
        <p className="text-md mt-4 text-white-100 dark:text-dark-100 md:text-lg lg:w-10/12">
          {Description}
        </p>
        <div className="mx-auto mt-4 grid    gap-5 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
              <div className="group relative overflow-hidden  ">
                <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur    duration-200  ">
                  <TiPin className="text-black" />
                  <p className="text-sm text-black">Featured</p>
                </div>
                <Image
                  src={Dzikir}
                  width={500}
                  height={500}
                  alt="QrCode"
                  className="rounded-t-lg"
                  loading="lazy"
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
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}

              <div className="p-4">
                <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl    ">
                  Adzkin Dzikir App{" "}
                </h2>
                <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                  simple application that aims to make it easier for Muslims to
                  do morning and evening dhikr according to the guidance of the
                  Prophet sallallaahu &apos;alaihi wasallam via mobile phones,
                  tablets or website-based laptops{" "}
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
                <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur    duration-200  ">
                  <TiPin className="text-black" />
                  <p className="text-sm text-black">Featured</p>
                </div>
                <Image
                  src={Copas}
                  width={500}
                  height={500}
                  alt="QrCode"
                  className="rounded-t-lg"
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
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}

              <div className="p-4">
                <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl    ">
                  Copas Abangkuu{" "}
                </h2>
                <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                  A simple words list application that you can copy and paste,
                  words that are currently trending on social media.{" "}
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
                <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur    duration-200  ">
                  <TiPin className="text-black" />
                  <p className="text-sm text-black">Featured</p>
                </div>
                <Image
                  src={Projects1}
                  width={500}
                  height={500}
                  alt="QrCode"
                  className="rounded-t-lg"
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
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}

              <div className="p-4">
                <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl    ">
                  Qr Code Generator
                </h2>
                <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                  A simple QR Code Generator. You can convert the web link into
                  QR Code instantly here and download it to your local device.
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
                  alt="starterKit"
                  className="rounded-t-lg"
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
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}

              <div className="p-4">
                <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl    ">
                  Next App Router Starter Kit
                </h2>
                <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                  Next js 14.0.2 starter kit using Tailwind CSS, Zustand, SWR,
                  Lint and Formatter.
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
                  src={Projects2}
                  width={500}
                  height={500}
                  alt="QrCode"
                  className="rounded-t-lg "
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
                <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl ">
                  Linktree Clone
                </h2>
                <p className="md:text-md py-3 text-sm text-white-100 dark:text-dark-100">
                  A Bio link to connect customers to the business or portfolio
                  website.
                </p>
                <div className="flex items-center gap-2">
                  <ReactLogo />
                  <TailwindLogo />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col">
            <div className="group relative rounded-lg  border-2 border-slate-200 bg-[#fff] duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:bg-[#1e1e1e] ">
              <div className="group relative overflow-hidden  ">
                <div className="absolute right-0 top-0 z-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-lime-300 p-1 backdrop-blur   duration-200 ">
                  <TiPin className="text-black" />
                  <p className="text-sm text-black">Featured</p>
                </div>
                <Image
                  src={Projects3}
                  width={500}
                  height={500}
                  alt="bubbleCleaner"
                  className="rounded-t-lg "
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
                <h2 className="bg-gradient-to-r from-[#22d3ee] via-[#d9f99d] to-[#bef264] bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl ">
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
          </div> */}
        </div>
        <div className="my-5 flex justify-between">
          <Link
            href="/portfolio"
            className=" item-center flex gap-2 text-sm dark:text-dark-100"
          >
            View All Projects
            <HiOutlineArrowCircleRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
