import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='flex px-5 w-full justify-between  sticky top-0 z-10 bg-black'>
      <Link href='#home' className=' text-3xl font-bold justify-self-start text-[#AAFF00]'>BORI</Link>
      <div className='flex gap-10 text-xl justify-self-center '>
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
