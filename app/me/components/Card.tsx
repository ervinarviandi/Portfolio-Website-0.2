import React from 'react'
import ItemsList from "@/app/me/components/Data"
import Link from "next/link"
import { TbArrowNarrowRight } from "react-icons/tb";
import { LuGithub } from "react-icons/lu";
const Card = () => {
  return (
  <>
  <div>
    <div className="flex flex-col mt-5 ">
              {
                ItemsList.map((card, index) =>  (
                  <Link  href={card.link}>
                  <div key={index}  className=" rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out group border-indigo-400 my-2 border-2 backdrop-blur dark:bg-[#111010] bg-gray-100/60 hover:border-l-sky-300   relative group overflow-hidden group-hover:bg-gradient-to-r from-emerald-300 to-sky-300" data-aos="zoom-in-down" data-aos-delay="300" >
                   
                    <div className="p-4 flex justify-between items-center overflow-hidden"> 
                    <div className='flex  items-center gap-2 '>
                      <span>{card.icons}</span>
                    <span className=" "><span className="bg-gradient-to-r from-tailwind to-purple-400 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">{card.title}</span> </span>
                    </div>
                    <span>
                      <TbArrowNarrowRight  size={20} className='w-full  inset-0 translate-x-[200%]  group-hover:-translate-x-0   transition-all duration-300 z-50 flex items-center ' />
                    </span>
                    </div>
                
                  </div>
                  </Link>
                ))
              }
            </div>
          </div>
  </>
  )
}

export default Card