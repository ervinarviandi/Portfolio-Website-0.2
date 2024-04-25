import React from "react"
import { GiFallingStar } from "react-icons/gi"
import { BsHearts } from "react-icons/bs"
import Image from "next/image"
import Logo from "@/public/featured/star-dynamic-gradient.svg"
import Logo1 from "@/public/featured/heart-dynamic-gradient.svg"
import Logo2 from "@/public/featured/flash-dynamic-gradient.svg"

const Featured = () => {
  return (
    <div className="featured w-full py-10">
      <div className="mx-auto px-5 md:max-w-7xl lg:max-w-7xl lg:px-10 ">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="featured-card rounded-lg  border-2 border-slate-200 bg-[#fff] p-4 backdrop-blur hover:shadow-md dark:border-none dark:bg-[#1e1e1e]">
              <div className="relative my-2 h-12   w-12 rounded-full p-2 text-yellow-500 backdrop-blur-md">
                <Image
                  src={Logo}
                  width={30}
                  height={30}
                  alt="startIconsFeatured"
                />
              </div>
              <h1 className="text-xl font-bold ">Clean & Intuitive</h1>
              <p className="pt-3 text-sm text-white-100 dark:text-dark-100">
                Keep the UI clean with a modern touch without compromising UX.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="featured-card2 rounded-lg border-2 border-slate-200 bg-[#fff] p-4 backdrop-blur hover:shadow-md dark:border-none dark:bg-[#1e1e1e]">
              <div className="relative my-2 h-12 w-12 rounded-full p-2 text-rose-500">
                <Image
                  src={Logo1}
                  width={30}
                  height={30}
                  alt="startIconsFeatured"
                />
              </div>
              <h1 className="text-xl font-bold ">Detail Oriented</h1>
              <p className="pt-3 text-sm text-white-100 dark:text-dark-100">
                Awareness to ease of access, UI consistency, and improved UX.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="featured-card3 rounded-lg border-2 border-slate-200 bg-[#fff] p-4 backdrop-blur hover:shadow-md dark:border-none dark:bg-[#1e1e1e]">
              <div className="relative my-2  h-12 w-12 rounded-full p-2 text-rose-500">
                <Image
                  src={Logo2}
                  width={30}
                  height={30}
                  alt="startIconsFeatured"
                />
              </div>
              <h1 className="text-xl font-bold ">Pretty & Optimized</h1>
              <p className="pt-3 text-sm text-white-100 dark:text-dark-100">
                Writing clean code is a top priority while keeping it as
                optimized as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
