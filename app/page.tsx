import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
            <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        
        {/* <BackgroundCircles /> */}
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' 
              src="/ali_mora.png"
              alt="" />

        <div className='z-20'>
        
          <h2 className='uppercase text-sm text-gray-500 pb-2 pt-5 tracking-[8px]
           selection:bg-[#f7ab0a] selection:text-gray-100'>
              full stack <span className='text-white animate-pulse'>web3</span> developer</h2>
        
            <div className='pt-5'>
                <Link href="#about"><button className='heroButton'>About</button></Link>
                <Link href="#clients"><button className='heroButton'>Clients</button></Link>
                <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                <Link href="#projects"><button className='heroButton'>Projects</button></Link>
                
            </div>
            </div>
        
</div>
)





    {/* <section className="dark:bg-[#080a0b] dark:text-gray-100 h-screen">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="doc_h1">Documentation
            </h1>
              <h2 className="dark:text-[#caa969]">NAMKA CRYPTO DRAW</h2>
            <p className="px-8 mt-8 mb-12 text-sm">Web3 Crypto Draw Platform for testing</p>
            <div className="flex flex-wrap justify-center">
              <a href="/start"><button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-[#2c2b2b] dark:text-[#caa969]">Get started</button></a>
                <a href="https://nk-crypto-draw.vercel.app/" target="_blank"><button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Crypto Draw</button></a>
            </div>
        </div>
    </section> */}
    </div>
  )
}