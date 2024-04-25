"use client"
import Navigation from "@/components/Navigation"
import React from "react"
import GitHubCalendar from "react-github-calendar"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import PageInsight from "@/app/dashboard/PageInsight"

const page = () => {
  const explicitTheme: any = {
    light: ["#1e1e1e", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  }

  return (
    <>
      <Navigation />
      <div className="MyDashboard w-full pt-20" data-aos="fade-up">
        <div className="mx-auto  px-5 md:max-w-7xl lg:px-10">
          <h1 className="mt-4 text-2xl font-bold text-[#000] dark:text-[#fff] md:text-5xl">
            Dashboard
          </h1>
          <p className="mt-4 text-sm text-white-100 dark:text-dark-100 md:text-lg">
            My contributions from last year on github.
          </p>
          <hr className=" border-1  my-5 border-dashed border-[#525252] dark:border-dark-100" />
          <div className="mt-5 items-center justify-between md:flex">
            <div className="text-md my-2 flex items-center gap-2 md:text-xl">
              <FaGithub />
              <h1>Github Contributions</h1>
            </div>
            <div>
              <Link href="https://github.com/ervinarviandi">
                @ervinarviandi
              </Link>
            </div>
          </div>
          <div className="  mt-5 overflow-hidden  rounded-lg text-white-100 dark:text-dark-100">
            <GitHubCalendar
              username="ervinarviandi"
              blockSize={12}
              blockMargin={4}
              year="last"
              colorScheme="light"
              theme={explicitTheme}
            />

            {/* <PageInsight/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default page
