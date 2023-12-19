"use client"
import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const page = () => {
  return (
    <>
    <div className='py-10'>
        <div className='w-full max-w-7xl mx-auto md:px-5 lg:px-5 px-2'>
        <LiteYouTubeEmbed 
        id="5OOMnZd2Ypg"
        title="3 AM Coding Session - Lofi Hip Hop Mix [Study & Coding Beats]"
        aspectWidth={7}
        aspectHeight={4}
        />
        </div>
    </div>
    </>
  )
}

export default page