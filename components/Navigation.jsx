"use client"
import PopOver from "@/components/commons/PopOver"
import React from 'react'
import Link from "next/link"
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { useTheme } from "next-themes"



const Navigation = () => {  
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
          <button className=" p-2 rounded-full" onClick={() => setTheme("light")}>
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
          <button className=" p-2 rounded-full " onClick={() => setTheme("dark")}>
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
      <header className="w-full fixed py-4  ease-in duration-300 dark:text-white backdrop-blur-md dark:bg-backgrounddark/70 bg-backgroundlight/70   z-10" >
        <div className="lg:max-w-7xl mx-auto px-4 flex
         justify-between items-center">
           <div className="font-bold rounded-xl items-center flex justify-center">
            Ervin 
           </div>
          <div className="flex item-center">
            {/* <h1 className="dark:text-[#fff] text-[#000000] text-xl font-bold">Ervin <span className='text-purple-500 pl-2'>Arvndi</span></h1> */}
            {/* <div className="ml-7">
              <PopOver/>
            </div> */}
            <ul className="ml-5 items-center gap-3 hidden lg:flex ">
              <li>
              <Link href="/" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm">Home
              </Link>
              </li>
              <li>
              <Link href="/portfolio" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm'>Project
              </Link>
              </li>
              <li>
              <Link href="/guestbook" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm'>Guestbook
              </Link>
              </li>
              <li>
              <Link href="/studio" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm'>Studio
              </Link>
              </li>
              <li>
              <Link href="/contact" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm'>Contact
              </Link>
              </li>
              <li>
              <Link href="/blog" className='text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 text-sm '>Blog
              </Link>
              </li>
            </ul>
          </div>
          <div>
         
            <div className="flex justify-center items-center gap-2">
            {renderThemeChanger()}

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
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  backdrop-filter backdrop-blur-lg dark:bg-backgrounddark bg-backgroundlight text-center ease-in duration-300 z-40"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen dark:bg-backgroundark backdrop-filter backdrop-blur-lg text-center ease-in  duration-300 z-40 dark:text-white   "
          }
        >
          <ul>
            <li className="p-4 text-2xl    ">
              <Link href="/" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black  pb-2 border-dashed border-b  ">
                Home
              </Link>
            </li>
            
            <li className="p-4 text-2xl   ">
              <Link href="/portfolio" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 border-dashed border-b">
                Project
              </Link>
            </li>
           
            <li className="p-4 text-2xl    ">
              <Link href="/guestbook" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 border-dashed border-b">
                Guestbook
              </Link>
            </li>
           
            <li className="p-4 text-2xl   ">
              <Link href="/studio" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 border-dashed border-b">
                Studio
              </Link>
            </li>
           
            <li className="p-4 text-2xl   ">
              <Link href="/contact" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 border-dashed border-b">
                Contact
              </Link>
            </li>
            <li className="p-4 text-2xl   ">
              <Link href="/blog" className="text-white-100 dark:text-dark-100 link link-underline link-underline-black pb-2 border-dashed border-b">
                Blog
              </Link>
            </li>
           
          </ul>
        </div>
          </div>
         </div>
      </header>
    </>
  )
}

export default Navigation