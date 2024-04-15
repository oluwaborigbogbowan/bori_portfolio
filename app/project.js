import React from 'react'
import Link from 'next/link'

function Project() {
  return (
    <main id='project' className=' md:pt-32 pt-10 '>
      <h2 className=' text-4xl font-bold self-start text-[#AAFF00] mb-5 text-center'>PROJECTS</h2>
      <section className='flex md:flex-row flex-col gap-8 justify-center'>
        <div className='md:w-[40%] bg-[#212529] p-4 rounded-xl'>
            <img src="/images/vaav.PNG" alt="vaav" className='rounded-xl' />
            <h3  className=' text-xl mt-2 font-semibold'>VAAV Innovations</h3>
            <p className='mb-2'>The site had a landing page, an ecommerce page, and can also help you calculate the load been used in your house to recommend one for the companies devices. The site is also responsive.</p>
            <Link href='https://vaav.vercel.app/' className=' border-black px-5 bg-[#AAFF00] p-1 text-black hover:opacity-50 text-lg'>
                view site
            </Link>
        </div>
        <div className='md:w-[40%] bg-[#212529] p-4 rounded-xl'>
            <img src="/images/rocket.PNG" alt="rockets" className='rounded-xl' />
            <h3 className=' text-xl mt-2 font-semibold'>Acme Rockets</h3>
            <p className='mb-2'>The site is for a rocket company showing the different services they offer and the various prices. </p>
            <Link href='https://tailwind-tut-indol.vercel.app/src/index.html' className=' border-black px-5 bg-[#AAFF00] p-1 text-black hover:opacity-50 text-lg'>
                view site
            </Link>
        </div>
      </section>
    </main>
  )
}

export default Project
