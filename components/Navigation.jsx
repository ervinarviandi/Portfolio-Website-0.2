"use client"
import React from "react"
import Logo from "@/public/ervinarviandi.jpg"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RiCloseFill } from "react-icons/ri"
import { HiMenu } from "react-icons/hi"
import { useTheme } from "next-themes"
import { BiHomeSmile } from "react-icons/bi"
import { BiCommentDetail } from "react-icons/bi"
import { LiaBlogSolid, LiaBoxSolid } from "react-icons/lia"
import { MdOutlineDashboard, MdOutlineContactless } from "react-icons/md"
import { FiUser } from "react-icons/fi"

const Navigation = () => {
  const [isLoading, setLoading] = useState(true)

  const [nav, setNav] = useState(false)
  const [color, setColor] = useState("transparent")
  const [textColor, setTextColor] = useState("transparent")

  const handleNav = () => {
    setNav(!nav)
  }

  const [progress, setProgress] = useState(0)
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#transparent")
        setTextColor("#ffffff")
      } else {
        setColor("#transparent")
        setTextColor("#ffffff")
      }
    }
    window.addEventListener("scroll", changeColor)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme
    if (currentTheme === "dark") {
      return (
        <button
          className=" rounded-full p-2"
          aria-label="button"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#facc15"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#facc15"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      )
    } else {
      return (
        <button
          className=" rounded-full p-2 "
          aria-label="button"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0284c7"
            viewBox="0 0 24 24"
            strokeWidth="0"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      )
    }
  }
  return (
    <>
      <header className="dark:text-white myNavigation fixed  z-50 w-full bg-backgroundlight/70 py-4 backdrop-blur-md duration-300 ease-in  dark:bg-backgrounddark/70">
        <div
          className="mx-auto flex items-center justify-between
         px-4 lg:max-w-7xl"
        >
          <div className="flex items-center justify-center gap-2">
            <Image
              src={Logo}
              width={30}
              height={30}
              className="rounded-full"
              alt="profileMobile"
            />
            <h1 className="text-lg font-bold">Ervin Arviandi</h1>
          </div>

          <div className="item-center flex">
            <ul className="ml-5 hidden items-center gap-3 lg:flex ">
              <li>
                <Link
                  href="/"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/guestbook"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  Guestbook
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/myBlog"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100 "
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100 "
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="hidden lg:block">{renderThemeChanger()}</div>

              <div onClick={handleNav} className=" dark: z-50 block lg:hidden ">
                {nav ? (
                  <RiCloseFill
                    className="h-6 w-6 "
                    //  style={{ color: `${textColor}` }}
                  />
                ) : (
                  <HiMenu
                    className="h-6 w-6"
                    // style={{ color: `${textColor}` }}
                  />
                )}
              </div>
            </div>
            <div
              className={
                nav
                  ? "absolute bottom-0 left-0 right-0 top-0 z-40 h-screen w-full items-center gap-3  bg-backgroundlight backdrop-blur-lg backdrop-filter duration-300  ease-in dark:bg-backgrounddark sm:hidden"
                  : "dark:bg-backgroundark dark:text-white absolute bottom-0 left-[-100%] right-0 top-0 z-40 h-screen w-full items-center  backdrop-blur-lg   backdrop-filter  duration-300 ease-in sm:hidden   "
              }
            >
              <div className="px-10 ">
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src={Logo}
                      width={30}
                      height={30}
                      className="rounded-full"
                      alt="profileMobile"
                    />
                    <h1 className="text-lg font-bold">Ervin Arviandi</h1>
                  </div>
                  <div className="">{renderThemeChanger()}</div>
                </div>
                <hr className="border-1 my-5 border-solid border-white-100 dark:border-[#525252]" />
                <ul className="mt-10 ">
                  <li className="p-2 px-4 text-2xl ">
                    <Link
                      href="/"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b  border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100  "
                    >
                      <BiHomeSmile size={20} />
                      Home
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl ">
                    <Link
                      href="/about"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b  border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100  "
                    >
                      <FiUser size={20} />
                      About
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl    ">
                    <Link
                      href="/portfolio"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b  border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100  "
                    >
                      <LiaBoxSolid size={20} />
                      Projects
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl    ">
                    <Link
                      href="/guestbook"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
                      <BiCommentDetail size={20} />
                      Guestbook
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl   ">
                    <Link
                      href="/contact"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
                      <MdOutlineContactless size={20} />
                      Contact
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl   ">
                    <Link
                      href="/myBlog"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
                      <LiaBlogSolid size={20} />
                      Blog
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl   ">
                    <Link
                      href="/dashboard"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
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
