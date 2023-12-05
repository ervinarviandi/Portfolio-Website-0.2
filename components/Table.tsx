import React from 'react'
import Link from 'next/link'


const Table = () => {
  return (
    <div className='my-7 px-5'>
         <table className="table-auto  md:table-fixed 
                  border border-solid border-1 dark:border-[#525252] border-white-100 rounded-2xl ">
                    <thead className='border rounded-2xl  border-solid border-1 dark:border-[#525252] border-white-100 '>
                      <tr className=''>
                        <th className='p-2'>Contact</th>
                        <th className='p-2'>Detail</th>                       
                      </tr>
                    </thead>
                    <tbody className=''>
                      <tr>
                        <td className='p-4 text-sm md:text-md'>Address</td>
                        <td className='p-4 text-sm md:text-md'>Dompu, West Nusa Tenggara Indonesia</td>
                      </tr>
                      <tr className=''>
                        <td className='p-4 text-sm md:text-md'>Email</td>
                        <td className='md:p-4 p-2'>
                          <Link href="" className='text-blue-400 md:text-md text-sm'>
                          muhamadervin34@gmail.com
                          </Link>
                          </td>
                      </tr>
                    </tbody>
                  </table>
        </div>
  )
}

export default Table