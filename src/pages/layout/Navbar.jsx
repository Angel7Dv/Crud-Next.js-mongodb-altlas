import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='border-b py-4 px-16 mb-8 text-2xl flex justify-between space-x-2'>

      
      <div className='flex-1'>
        <Link href="/">
        <a > Vocabulary</a>
        </Link>
      </div>

      <div className='flex  '>

      avatar
      </div>
    </div>
  )
}
