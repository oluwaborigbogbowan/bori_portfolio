import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='flex md:px-5 p-1 w-full justify-between items-center  sticky top-0 z-10 bg-black'>
      <Link href='#home' className=' md:text-3xl text-2xl font-bold justify-self-start text-[#AAFF00]'>BORI</Link>
      <div className='flex md:gap-10 gap-2 md:text-xl justify-self-center '>
        <Link href='#home' className='active:text-[#AAFF00] hover:text-[#AAFF00]'>Home</Link>
        <Link href='#about' className='active:text-[#AAFF00] hover:text-[#AAFF00]'>About</Link>
        <Link href='#skill' className='active:text-[#AAFF00] hover:text-[#AAFF00]'>Skill</Link>
        <Link href='#project' className='active:text-[#AAFF00] hover:text-[#AAFF00]'>Projects</Link>
        <Link href='#contact' className='active:text-[#AAFF00] hover:text-[#AAFF00]'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav
