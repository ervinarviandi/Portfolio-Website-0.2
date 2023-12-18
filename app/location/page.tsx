"use client"
import React from 'react'
import Link from 'next/link'


const location = () => {

  

  return (
  <>
    <div className='w-full h-screen bg-slate-200 pt-26'>
     <div style={{ height: "100%", width: "100%" }} 
              >
            <iframe
          
              title="google maps api"
              width="100%"
              height="100%"
              loading='lazy'
              
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CCWJ+9M8,%20Kandai%20Dua,%20Kec.%20Woja,%20Kabupaten%20Dompu,%20Nusa%20Tenggara%20Bar.,%20Indonesia+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
            >
            </iframe>
              <Link href="https://www.gps.ie/sport-gps/">swimming watch</Link>
          </div>
    </div>
  </>
  )
}

export default location