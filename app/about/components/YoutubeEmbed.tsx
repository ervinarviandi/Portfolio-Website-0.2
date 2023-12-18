"use client"
import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const page = () => {
  return (
    <>
    <div className='w-full py-10'>
        <div className='lg:max-w-4xl mx-auto px-5'>
        <LiteYouTubeEmbed 
        id="_tV5LEBDs7w"
        title="cozy winter"
        aspectWidth={13}
        aspectHeight={4}
        />
        </div>
    </div>
    </>
  )
}

export default page