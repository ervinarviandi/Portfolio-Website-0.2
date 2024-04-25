import React from "react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import ReactLogo from "@/components/Tech Stack/icons small/ReactLogo"
import TailwindLogo from "@/components/Tech Stack/icons small/TailwindLogo"
import NextLogo from "@/components/Tech Stack/icons small/NextJs"
import FramerLogo from "@/components/Tech Stack/icons small/FramerLogo"
import { FaGithub } from "react-icons/fa"
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2"
import ImageCard from "@/app/Dzikir/components/ImageCard"
import "../../app/globals.css"
import Typescript from "@/components/Tech Stack/icons small/Typescript"
import { HiOutlineArrowCircleLeft } from "react-icons/hi"

const page = () => {
  return (
    <>
      <Navigation />
      <div className="w-full py-10 pt-[96px]" data-aos="fade-up">
        <div className="mx-auto px-5 md:max-w-7xl lg:px-10 ">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className=" flex items-center gap-2  text-white-100 hover:text-[#000]  dark:text-dark-100 dark:hover:text-[#fff]"
            >
              <HiOutlineArrowCircleLeft size={20} />
              Back
            </Link>
          </div>
          <h1 className="mt-10 text-xl md:text-2xl ">Adzkin Dzikir App</h1>
          <p className="mt-3 text-white-100 dark:text-dark-100  ">
            simple application that aims to make it easier for Muslims to do
            morning and evening dhikr according to the guidance of the Prophet
            sallallaahu &apos;alaihi wasallam via mobile phones, tablets or
            website-based laptops🔮.
          </p>
          <hr className=" border-1  my-5 rounded-full border-dashed  border-white-100 dark:border-[#525252]" />
          <div className="items-center justify-between md:flex">
            <div className="flex items-center gap-3">
              <span>Tech Stack :</span>
              <ReactLogo />
              <Typescript />
              <TailwindLogo />
              <NextLogo />
              <FramerLogo />
            </div>
            <div className="mt-5 flex items-center gap-2 md:mt-0">
              <Link
                href="https://github.com/ervinarviandi/adzkin-"
                className="link link-underline link-underline-black flex items-center gap-3 border-b border-dashed border-white-100 py-3 dark:border-[#525252] "
                target="_blank"
              >
                <FaGithub />
                Source Code
              </Link>
              <Link
                href="https://adzkin.vercel.app/"
                className="link-underline link-underline-black flex  items-center gap-2 border-b border-dashed border-white-100 px-2 py-3 dark:border-[#525252]"
                target="_blank"
              >
                <HiMiniArrowTopRightOnSquare />
                Live Demo
              </Link>
            </div>
          </div>
          <div>
            <ImageCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
