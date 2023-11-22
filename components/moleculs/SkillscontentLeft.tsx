import React from 'react'
import HtmlIcons from "@/components/Tech Stack/icons small/HtmlLogo"
import CssIcons from "@/components/Tech Stack/icons small/CssLogo"
import JavascriptIcons from "@/components/Tech Stack/icons small/JavascriptLogo" 
import BootstrapIcons from '../Tech Stack/icons small/BootstrapLogo'
import TailwindIcons from '../Tech Stack/icons small/TailwindLogo'
import FlutterIcons from "@/components/Tech Stack/icons small/FlutterLogo"
import MysqlIcons from "@/components/Tech Stack/icons small/Mysql"
import FigmaIcons from "@/components/Tech Stack/icons small/Figma"


const SkillscontentLeft = () => {
  return (
    <>
    <div className='flex ites-center gap-x-5 my-5'>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2 ml-5 '>
        < HtmlIcons/>
        <p className='text-md'>HTML</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <CssIcons/>
        <p className='text-md'>CSS</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <JavascriptIcons/>
        <p className='text-md'>JavaScript</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <BootstrapIcons/>
        <p className='text-md'>Bootstrap</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <TailwindIcons/>
        <p className='text-md'>Tailwind</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <FlutterIcons/>
        <p className='text-md'>Flutter</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <MysqlIcons/>
        <p className='text-md'>Mysql</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <FigmaIcons/>
        <p className='text-md'>Figma</p>
    </div>
</div>  
    </>
  )
}

export default SkillscontentLeft