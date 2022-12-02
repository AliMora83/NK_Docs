import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='p-5 bg-slate-200'>
        <Link href="/" className='px-3 py-2 bg-slate-800 rounded-lg text-gray-200'>Home</Link> 
        
        </header>
  )
}