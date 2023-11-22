import React from 'react'
import Link from 'next/link'
import Logo from "@/app/Assets/Icons/GitHub.svg"
import Logo1 from "@/app/Assets/Icons/Instagram.svg"
import Logo2 from "@/app/Assets/Icons/Gmail.svg"
import Image from 'next/image'


export default function FooterIcons() {
  return (

    <div className='flex items-center gap-2'>
        <Link href="" >
         <Image src={Logo} width={30} height={30} alt='github'/>
        </Link>
        <Link href="" >
         <Image src={Logo1} width={30} height={30} alt='Instagram'/>
        </Link>
        <Link href="" >
         <Image src={Logo2} width={30} height={30} alt='Instagram'/>
        </Link>
    </div>
  )
}
