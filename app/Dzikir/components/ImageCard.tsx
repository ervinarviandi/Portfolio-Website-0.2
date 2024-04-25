"use client"
import React, { useState } from "react"
import Image from "next/image"
import Logo from "@/public/DzikirPage.jpg"

export default function ImageCard() {
  const [isLoading, setLoading] = useState(true)
  return (
    <div className="mt-10 items-center md:flex">
      <Image
        src={Logo}
        width={500}
        height={500}
        className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
        onLoad={() => setLoading(false)}
        alt="Copasabangkuu"
      />
      {/* <Image src={Mobile} width={500} height={500} className={`
              duration-700 ease-in-out group-hover:opacity-75 
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)} alt='qrCode Mobile'/> */}
    </div>
  )
}
