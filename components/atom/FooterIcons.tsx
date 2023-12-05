import React from 'react'
import Link from 'next/link'
import Logo from "@/app/Assets/Icons/GitHub.svg"
import Logo1 from "@/app/Assets/Icons/Instagram.svg"
import Logo2 from "@/app/Assets/Icons/Gmail.svg"
import Logo3 from "@/app/Assets/Icons/500 Px.svg"
import Image from 'next/image'


export default function FooterIcons() {
  return (

    <div className='flex items-center gap-2'>
        <Link href="https://github.com/ervinarviandi" >
         <Image src={Logo} width={30} height={30} alt='github'/>
        </Link>
        <Link href="https://www.instagram.com/ervinarviandi/" >
         <Image src={Logo1} width={30} height={30} alt='Instagram'/>
        </Link>
        <Link href="mailto:muhamadervin34@gmail.com" >
         <Image src={Logo2} width={30} height={30} alt='Gmail'/>
        </Link>
        <Link href="https://500px.com/p/muhamadervin34?view=photos" >
         <Image src={Logo3} width={30} height={30} alt='500px'/>
        </Link>
    </div>
  )
}
