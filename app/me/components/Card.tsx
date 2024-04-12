import React from 'react'
import { TbCoffee } from "react-icons/tb";
import { TbCode } from 'react-icons/tb';

const Card = () => {
  return (
  <>
        <div className='bg-gray-300 border-neutral-200 border p-3 rounded-lg hover:shadow-md'>
            <h1 className='text-lg  text-black font-bold'>My Personal Website</h1>
        </div>
        <div className='bg-gray-300 border-neutral-200 border p-3 rounded-lg hover:shadow-md mt-3'>
            <h1 className='text-lg  text-black font-bold'>My Personal Blog</h1>
        </div>
        <div className='bg-gray-300 border-neutral-200 border p-3 rounded-lg hover:shadow-md mt-3 flex items-center gap-2'>
          <TbCoffee size={20} className='text-black' />
            <h1 className='text-lg  text-black font-bold'>Buy me a Coffe</h1>
        </div>

        <div className='bg-gray-300 border-neutral-200 borer p-3 rounded-l hover:shadow-md mt-3'>
          <TbCode size={20} className='text-black'/>
          <h1 className='text-lg text-black font-bold'>Spotify</h1>
        </div>
  </>
  )
}

export default Card