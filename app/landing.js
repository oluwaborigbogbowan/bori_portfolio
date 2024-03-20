import React from 'react'
import Link from 'next/link'
function Landing() {
  return (
    <section className='flex items-center pt-10 md:pt-0 mb-6 flex-col md:flex-row mt-5 md:h-[90vh] h-screen bg-coding w-full bg-cover bg-opacity-60 bg-black'>
      <div className='md:w-[60%] pr-5'>
        <p className='text-2xl font-semibold'>Hello &#128522;,</p>
          <p  className='text-4xl font-semibold'>I'm <span className='text-[#AAFF00]'>Bori</span>.</p>
          <p className='text-3xl font-semibold'>A <span className='text-[#AAFF00]'>Frontend Engineer</span>.</p>
      <p className='text-3xl font-semibold'>I help in turning Ideas into Real Life products.</p>
          <Link href=''>
          <button className='bg-[#AAFF00] text-black text-base font-semibold px-3 py-1 rounded-md mt-2'>Download CV</button>
          </Link>
      </div>
      <div className='md:w-[40%] mt-3'>
        <img className='w-full rounded-[50%]' src="/images/guy_with_laptop.jpg" alt="" />
      </div>
    </section>
  )
}

export default Landing
