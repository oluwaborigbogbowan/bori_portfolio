import React from 'react'

function Skill() {
  return (
    <main id='skill' className='text-center scroll-m-16 pt-12'>
      <h2 className=' text-4xl font-bold self-start text-[#AAFF00] mb-5'>SKILL</h2>
      <section className='flex justify-around   bg-[#212529] rounded-lg md:p-5 p-2'>
        <div className=' flex flex-col justify-center items-center'>
            <img src="/logos/html-1.svg" className='md:w-[100px] w-[40px] md:h-[100px] h-[40px] ' alt="html" />
            <p className=' md:text-base text-xs'>HTML 5</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
            <img src="/logos/css-3.svg" className='md:w-[100px] w-[40px] md:h-[100px] h-[40px]' alt="css" />
            <p className=' md:text-base text-xs'>CSS</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
            <img src="/logos/logo-javascript.svg" className='md:w-[100px] w-[40px] md:h-[100px] h-[40px]' alt="js" />
            <p className=' md:text-base text-xs'>Javascript</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
            <img src="/logos/react-2.svg" className='md:w-[100px] w-[40px] md:h-[100px] h-[40px]' alt="react" />
            <p className=' md:text-base text-xs'>React</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
            <img src="/logos/next-js.svg" className='md:w-[100px] w-[40px] md:h-[100px] h-[40px]' alt="nextjs" />
            <p className=' md:text-base text-xs'>NextJs</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
            <img src="/logos/tailwind-css-2.svg" className='md:w-[100px] w-[40px] md:h-[100px] h-[40px]' alt="tailwind" />
            <p className=' md:text-base text-xs'>Tailwind CSS</p>
        </div>
      </section>
    </main>
  )
}

export default Skill
