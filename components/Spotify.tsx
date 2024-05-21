import React from "react"
import Image from "next/image"
import Icons from "@/app/Assets/Icons/Spotify.png"
import Link from "next/link"
import Marquee from "react-fast-marquee"

const Spotify = () => {
  return (
    <div className=" bottom-0 w-full bg-green-400 py-0.5  ">
      <div className="flex items-center justify-between gap-3 px-4">
        <Link
          className="flex items-center gap-2"
          target="_blank"
          href="https://open.spotify.com/intl-id/track/74ewFAgDzRkhZ7EX2eLtfZ?si=05adb5eb7fba4777"
        >
          <Image src={Icons} width={20} height={20} alt="spotify" />
          <span className="text-xs text-[#000]">Playing Now......</span>
        </Link>
        <div className="w-7/12">
          {/* <Marquee loop={0} className='text-xs ' >
              untuk sementara spotifynya cuman bisa di akses pakai link. karena ada maintanance 🔨 pada spotifynya. next akan update menggunakan api😉👌</Marquee> */}
        </div>
      </div>
    </div>
  )
}

export default Spotify
