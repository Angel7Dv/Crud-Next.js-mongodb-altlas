import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='border-b py-4 px-16 mb-8 text-2xl flex justify-between space-x-4'>

      
      <div className='flex-1 space-x-4'>
        <Link href="/">
        <a > home</a>
        </Link>
        <Link href="/vocabulary">
        <a > Vocabulary</a>
        </Link>
      </div>

      <div className='flex  '>

      avatar
      </div>
    </div>
  )
}
