import React from 'react'
import ReactIcons from "@/components/Tech Stack/icons small/ReactLogo"
import ReactRouter from "@/components/Tech Stack/icons small/ReactrouterLogo"
import CodeigniterIcons from "@/components/Tech Stack/icons small/CodeigniterLogo" 
import ViteIcons from '../Tech Stack/icons small/ViteLogo'
import NextjsIcons from '../Tech Stack/icons small/NextJs'
import FramerIcons from "@/components/Tech Stack/icons small/FramerLogo"
import VercelIcons from "@/components/Tech Stack/icons small/Vercel"
import PhotoshopIcons from "@/components/Tech Stack/icons small/Photoshop"





const SkillscontentLeft = () => {
  return (
    <>
    <div className='flex ites-center gap-x-5 my-5'>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2 ml-5 '>
        < ReactIcons/>
        <p className='text-md'>React</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <ReactRouter/>
        <p className='text-md'>React Router</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <CodeigniterIcons/>
        <p className='text-md'>Codeigniter</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <ViteIcons/>
        <p className='text-md'>Vite</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <NextjsIcons/>
        <p className='text-md'>Next Js</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <FramerIcons/>
        <p className='text-md'>Framer Motion</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <VercelIcons/>
        <p className='text-md'>Vercel Analitycs</p>
    </div>
    <div className='dark:bg-[#1e1e1e] bg-[#fff] shadow-lg rounded-full py-2 px-6 flex items-center gap-2   '>
        <PhotoshopIcons/>
        <p className='text-md'>Adobe Photoshop</p>
    </div>
</div>  
    </>
  )
}

export default SkillscontentLeft