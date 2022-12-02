import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
    <section className="dark:bg-[#080a0b] dark:text-gray-100">
        <div className="container mx-auto h-screen flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-2xl uppercase">Documentation
            </h1>
              <h2 className="dark:text-[#caa969]">NAMKA CRYPTO DRAW</h2>
            <p className="px-8 mt-8 mb-12 text-sm">Web3 Crypto Draw Platform for testing</p>
            <div className="flex flex-wrap justify-center">
              <a href="/start"><button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-[#2c2b2b] dark:text-[#caa969]">Get started</button></a>
                <a href="https://nk-crypto-draw.vercel.app/" target="_blank"><button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Crypto Draw</button></a>
            </div>
        </div>
    </section>
    </div>
  )
}