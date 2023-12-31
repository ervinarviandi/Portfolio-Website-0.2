"use client"
import React from 'react'
import Logo from "@/public/ervinarviandi.jpg"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { useTheme } from "next-themes"
import { BiHomeSmile } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { LiaBlogSolid, LiaBoxSolid  } from "react-icons/lia";
import { MdOutlineDashboard, MdOutlineContactless } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Navigation = () => {  

    const [isLoading, setLoading] =useState(true); 

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("transparent");
  
    const handleNav = () => {
      setNav(!nav);
    };
  
  
    const [progress, setProgress] = useState(0);
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
  
  
    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setColor("#transparent");
          setTextColor("#ffffff");
        } else {
          setColor("#transparent");
          setTextColor("#ffffff");
        }
      };
      window.addEventListener("scroll", changeColor);
    }, []);
  
  
    const renderThemeChanger = () => {
      if (!mounted) return null;
      const currentTheme = theme === "system" ? systemTheme : theme;
      if (currentTheme === "dark") {
        return (
          <button className=" p-2 rounded-full"  aria-label="button" onClick={() => setTheme("light")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" strokeWidth="2" stroke="#facc15" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        );
      } else {
        return (
          <button className=" p-2 rounded-full "  aria-label="button" onClick={() => setTheme("dark")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#0284c7" viewBox="0 0 24 24" strokeWidth="0" stroke="currentColor" className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        );
      }
    };
  return (
    <>
      <header className="w-full fixed py-4  ease-in duration-300 dark:text-white backdrop-blur-md dark:bg-backgrounddark/70 bg-backgroundlight/70 myNavigation  z-10" >
        <div className="lg:max-w-7xl mx-auto px-4 flex
         justify-between items-center">
          <div className="flex justify-center gap-2 items-center">
            <Image src={Logo} width={30} height={30} className='rounded-full' alt="profileMobile"  />
          <h1 className="font-bold text-lg">Ervin Arviandi</h1>
            </div>
          
          <div className="flex item-center">
           
            <ul className="ml-5 items-center gap-3 hidden lg:flex ">
              <li>
              <Link href="/" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm">Home
              </Link>
              </li>
              <li>
              <Link href="/portfolio" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm'>Projects
              </Link>
              </li>
              <li>
              <Link href="/guestbook" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm'>Guestbook
              </Link>
              </li>
              <li>
              <Link href="/contact" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm'>Contact
              </Link>
              </li>
              <li>
              <Link href="/myBlog" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm '>Blog
              </Link>
              </li>
              <li>
              <Link href="/dashboard" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm '>Dashboard
              </Link>
              </li>
            </ul>
          </div>
          <div>
         
            <div className="flex justify-center items-center gap-2">
              <div className="lg:block hidden">
            {renderThemeChanger()}
              </div>

          <div onClick={handleNav} className=" z-50 dark: lg:hidden block ">
            {nav ? (
              <RiCloseFill
                className="w-6 h-6 "
                //  style={{ color: `${textColor}` }}
              />
            ) : (
              <HiMenu
                className="w-6 h-6"
                // style={{ color: `${textColor}` }}
              />
            )}




          </div>
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 gap-3 items-center w-full h-screen  backdrop-filter backdrop-blur-lg dark:bg-backgrounddark bg-backgroundlight  ease-in duration-300 z-40"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 w-full h-screen dark:bg-backgroundark backdrop-filter backdrop-blur-lg  ease-in   items-center  duration-300 z-40 dark:text-white   "
          }
        >
          
           
         <div className="px-10 ">
          <div className="mt-4 flex justify-between items-center gap-2">
            <div className="flex justify-center gap-2 items-center">
            <Image src={Logo} width={30} height={30} className='rounded-full' alt="profileMobile"/>  
          <h1 className="font-bold text-lg">Ervin Arviandi</h1>
            </div>
          <div className="">
          {renderThemeChanger()}
          </div>
          </div>
          <hr className="border-1 border-solid dark:border-[#525252] border-white-100 my-5" />
          <ul className="mt-10 ">
          <li className="p-2 px-4 text-2xl ">
              <Link href="/" className="flex gap-2 items-center text-white-100 dark:text-dark-100 link link-underline link-underline-black  pb-2  border-dashed  dark:border-dark-100 border-[#525252] border-1 border-b  ">
                <BiHomeSmile size={20}/>
                Home
              </Link>
            </li>
          <li className="p-2 px-4 text-2xl ">
              <Link href="/about" className="flex gap-2 items-center text-white-100 dark:text-dark-100 link link-underline link-underline-black  pb-2  border-dashed  dark:border-dark-100 border-[#525252] border-1 border-b  ">
                <FiUser size={20}/>
                About
              </Link>
            </li>
          <li className="p-2 px-4 text-2xl    ">
              <Link href="/portfolio" className="flex gap-2 items-center text-white-100 dark:text-dark-100 link link-underline link-underline-black  pb-2  border-dashed  dark:border-dark-100 border-[#525252] border-1 border-b  ">
                <LiaBoxSolid size={20} />
                Projects
              </Link>
            </li>
            <li className="p-2 px-4 text-2xl    ">
              <Link href="/guestbook" className="flex items-center gap-2 text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2  border-dashed  dark:border-dark-100 border-[#525252] border-1 border-b">
              <BiCommentDetail size={20}/>
                Guestbook
              </Link>
            </li>
            <li className="p-2 px-4 text-2xl   ">
              <Link href="/contact" className="flex items-center gap-2 text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2  border-dashed  dark:border-dark-100 border-[#525252] border-1 border-b">
                <MdOutlineContactless size={20}/>
                Contact
              </Link>
            </li>
            <li className="p-2 px-4 text-2xl   ">
              <Link href="/myBlog" className="flex gap-2 items-center text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2  border-dashed  dark:border-dark-100 border-[#525252] border-1 border-b">
              <LiaBlogSolid size={20} />
                Blog
              </Link>
            </li>
            <li className="p-2 px-4 text-2xl   ">
              <Link href="/dashboard" className="flex gap-2 items-center text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2  border-dashed  dark:border-dark-100 border-[#525252] border-1 border-b">
                <MdOutlineDashboard size={20} />
                Dashboard
              </Link>
            </li>
        {/* <div className="">
          <Icons/>
        </div> */}
          </ul>
        </div>
          </div>
        </div>
          </div>
      </header>
    </>
  )
}

export default Navigation