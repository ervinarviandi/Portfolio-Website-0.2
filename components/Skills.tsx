import React from 'react'
import Marquee from "react-fast-marquee";
import SkillscontentLeft from './moleculs/SkillscontentLeft';
import SkilscontentRight from "@/components/moleculs/SkillscontentRight"

const Skills = () => {
  return (
    <div className='w-full py-10'>
        <div className='md:max-w-7xl mx-auto lg:px-10 px-5'>
            <h2 className='font-bold text-xl'>Skills & Tools</h2>
            <p className='mb-7 dark:text-dark-100 text-white-100 lg:text-lg text-md mt-4 '>These are some of the programming languages and tools that I usually use when creating and developing a website or application.</p>
            <Marquee loop={0} direction='left' >
              <SkillscontentLeft/>
            </Marquee>
            <Marquee direction='right' loop={0}>
                <SkilscontentRight/>
            </Marquee>
        </div>
    </div>
  )
}

export default Skills