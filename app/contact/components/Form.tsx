import React from 'react'

export default function Form() {
  return (
    <>
    <div className='w-full my-7'>
        <form action="" className=''>
            <div className='grid md:grid-cols-2 gap-3'>
                <div className='flex flex-col'>
            <input type="text" placeholder='Name' name='name' className='p-2 rounded-md  dark:border-gray-600 border-gray-400 border'/>
                </div>
                <div className='flex flex-col'>
            <input type="text" placeholder='Email' name='email' className='p-2 rounded-md  dark:border-gray-600 border-gray-400 border'/>
                </div>
            </div>
        </form>
        <div>
                <textarea  name='textarea' placeholder='message' className='p-2 rounded-md w-full mt-2  dark:border-gray-600 border-gray-400 border' />
                <button className='w-full p-2 rounded-md bg-gray-600 hover:bg-gray-500 mt-4 text-[#fff]'>Send Email</button>
        </div>

    </div>
    </>
  )
}
