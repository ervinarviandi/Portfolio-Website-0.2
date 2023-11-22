import React from 'react'
import { WiStars } from "react-icons/wi";

const Featured = () => {
  return (
    <div className='w-full py-10'>
        <div className='lg:max-w-6xl md:max-w-6xl mx-auto px-5 '>
            <div className='grid md:grid-cols-3'>
                <div className='flex flex-col'>
                    <div className='bg-gray-600 rounded-lg p-4'>
                        <div className='p-2 rounded-full bg-indigo-500 w-10 h-10 text-yellow-500 overflow-hidden'>
                            <WiStars size={40} className=""/>
                        </div>
                        <h1 className='text-xl font-bold '>Clean & Intuitive</h1>
                        <p className='text-sm'>Keep the UI clean with a modern touch without compromising UX.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured