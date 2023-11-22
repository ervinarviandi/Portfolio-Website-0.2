import React from 'react'
import Marquee from "react-fast-marquee";
import SkillscontentLeft from './moleculs/SkillscontentLeft';
import SkilscontentRight from "@/components/moleculs/SkillscontentRight"

const Skills = () => {
  return (
    <div className='w-full py-10'>
        <div className='md:max-w-6xl mx-auto px-5'>
            <h2 className='font-bold'>Skills & Tools</h2>
            <p className='mb-7'>My coding skills.</p>
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