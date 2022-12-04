import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">

            <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
   
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' 
              src="/favicon.ico"
              alt="namka icon" />

        <div className='z-20'>

          <h1 className="doc_h1">Documentation</h1>

          <h2 className='uppercase text-sm text-gray-500 pb-2 pt-5 tracking-[8px]
           selection:bg-[#f7ab0a] selection:text-gray-100'>
              Namka <span className='text-white animate-pulse'>crypto</span> draw</h2>
        
            <div className='pt-5'>
                <Link href="#"><button className='heroButton'>Docs</button></Link>
                <Link href="#"><button className='heroButton'>About</button></Link>
                <Link href="#"><button className='heroButton'>Contact</button></Link>
                
            </div>
            </div>
            </div>
</div>
)}