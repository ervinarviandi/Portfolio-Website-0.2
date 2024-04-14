"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import Profile from "@/app/Assets/Profile/Profile.png"
import { MdVerified } from "react-icons/md"
import Card from "@/app/me/components/Card"
import { WavyBackground } from "@/components/ui/wavy-background"
import ModeToggle from "@/components/atom/ModeToggle"
import { PiLinkSimpleBold } from "react-icons/pi"
import { LuPartyPopper } from "react-icons/lu"
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import Marquee from "react-fast-marquee"

const Page = () => {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <div className="relative">
        <div className="bg-teal-500 p-1 dark:bg-teal-300 ">
          <Marquee loop={0} className="text-xs font-semibold">
            Web sedang dalam tahap maintenance 🔨👩‍💻
          </Marquee>
        </div>
        <div className="h-80 overflow-hidden">
          <WavyBackground
            props={WavyBackground}
            waveOpacity={0.7}
            waveWidth={60}
            backgroundFill="black"
            className="-mt-20"
          />
        </div>
        <div className="mx-auto p-5 lg:max-w-6xl ">
          <div className="-mt-20 flex items-center justify-center  ">
            <div className="">
              <div className="relative">
                <Image
                  src={Profile}
                  alt="MyProfile"
                  width={150}
                  height={100}
                  className={` relative hidden  rounded-full  bg-gradient-to-b from-sky-400 to-emerald-400 p-2 before:absolute before:inset-0 before:animate-pulse before:bg-gradient-to-b before:from-blue-400 before:via-pink-400 before:to-pink-300 lg:block 
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
                  onLoad={() => setLoading(false)}
                  priority={true}
                />
                <div className="absolute -right-3 bottom-4 hidden rounded-full bg-[#fff]/60 shadow-lg backdrop-blur dark:bg-[#000]/60 md:block lg:block">
                  <ModeToggle />
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={Profile}
                width={130}
                height={100}
                className="relative block  rounded-full  bg-gradient-to-b from-sky-400 to-emerald-400 p-2 before:absolute before:inset-0 before:animate-pulse before:bg-gradient-to-b before:from-blue-400 before:via-pink-400 before:to-pink-300 md:hidden lg:hidden "
                alt="MyProfile"
              />
              <div className="absolute -right-3 bottom-5 block rounded-full bg-[#fff]/60 shadow-lg backdrop-blur dark:bg-[#000]/60 md:hidden  lg:hidden">
                <ModeToggle />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            <h1 className="text-2xl font-bold">Ervin Arviandi</h1>
            <MdVerified size={20} className="text-blue-400" />
          </div>

          <div className="my-3 flex  justify-center">
            <p className="  text-md text-center lg:w-8/12">
              Tukang ngetik yang selalu belajar hal-hal baru tentang teknologi,
              dan membuat sesuatu yang bisa bermanfaat untuk orang lain 😉{" "}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-center">
            <Link
              href="  https://ervinarviandi.vercel.app/"
              className="text-md text-center  text-indigo-400"
            >
              https://ervinarviandi.vercel.app/
            </Link>
          </div>
          <div className="mx-auto mt-7 max-w-2xl p-5">
            <div className="flex items-center gap-2">
              <PiLinkSimpleBold size={20} />
              <p className="text-md font-semibold">Links</p>
            </div>
            <Card />

            <div className="mt-7 flex items-center gap-2">
              <LuPartyPopper size={20} />
              <p className="text-md font-semibold">Get in touch</p>
            </div>
            <div className="my-bg mt-5 rounded-lg border-2 border-indigo-400 bg-[#111010] p-4 backdrop-blur">
              <MdOutlineMarkEmailUnread size={30} />
              <h2 className="text-md my-2 font-semibold">Drop me an Email</h2>
              <Link
                href="mailto:muhamadervin34@gmail.com"
                className="text-md my-3 hover:text-emerald-500 dark:hover:text-emerald-300"
              >
                muhamadervin34@gmail.com
              </Link>
              <p className="mt-2 w-10/12 text-gray-600 dark:text-gray-300">
                Expect my rapid and eager reply – your message won&apos;t be
                kept waiting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
