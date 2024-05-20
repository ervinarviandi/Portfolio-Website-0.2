"use client"
import { useEffect, useState } from "react"
import React from "react"
import Image from "next/image"
import Logo from "../public/ervinarviandi.jpg"
import Hands from "../public/image.webp"
import AOS from "aos"
import "aos/dist/aos.css"
import { PiArrowFatDownFill } from "react-icons/pi"
import Link from "next/link"
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"

const Hero = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    })
  })

  return (
    <BackgroundGradientAnimation>
      <div
        className="myHero absolute  inset-0 z-10 h-screen w-full pt-[96px]"
        data-aos="fade-up"
      >
        <div className="mx-auto px-5 md:max-w-7xl lg:px-10">
          <Image
            src={Logo}
            alt="mobileImage"
            width={160}
            height={160}
            className={`
              block duration-700 ease-in-out group-hover:opacity-75 md:hidden
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
            onLoad={() => setLoading(false)}
            priority={true}
          />
          <div className="mx-auto mt-16 grid md:grid-cols-2 ">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="font-sora2 text-[ #60a5fa] text-3xl ">Hi! </h1>
                <Image src={Hands} width={40} height={40} alt="iconshand" />
              </div>
              <h2 className="text-3xl font-bold text-[#000] dark:text-[#fff] md:text-7xl ">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#22d3ee] to-teal-500 bg-clip-text text-transparent ">
                  {" "}
                  Ervin{" "}
                </span>{" "}
                <span className="text-[#000] dark:text-[#fff]">Arviandi</span>
              </h2>
              <p className="font-sora text-md  my-7 text-white-100 dark:text-dark-100 md:w-10/12">
                Passionate and seasoned Software Engineer with a strong focus on
                frontend development. well-versed in all aspects of web
                technologies. Collaborative team player dedicated to delivering
                efficient, scalable, and visually appealing web applications.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/about"
                  className="text-white relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-xl from-[#22d3ee] to-[#2bccb8] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-l before:duration-500 before:ease-out hover:shadow-teal-500 hover:before:h-56 hover:before:w-56  dark:bg-[#1e1e1e] "
                >
                  <span className="relative z-0 font-bold">About Me</span>
                </Link>
                <button className="flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white-100 dark:text-dark-100">
                  <span className="w-[50%] overflow-hidden border-b-4 border-dark-100 border-b-white-100 p-1 dark:border-b-dark-100 ">
                    <PiArrowFatDownFill className="animate-rain-arrow " />
                  </span>
                  Resume
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex-end hidden md:block">
                <Image
                  src={Logo}
                  width={350}
                  height={350}
                  alt="Profile"
                  priority={true}
                  placeholder="blur"
                  className={`
              rotate-6 duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoad={() => setLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Hero
