import React from 'react'

function Skill() {
  return (
    <main id='skill' className='text-center scroll-m-16 pt-12'>
      <h2 className=' text-4xl font-bold self-start text-[#AAFF00] mb-5'>SKILL</h2>
      <section className='flex justify-around   bg-[#212529] rounded-lg p-5'>
        <div className=''>
            <img src="/logos/html-1.svg" className='w-[100px] h-[100px] ' alt="html" />
            <p>HTML 5</p>
        </div>
        <div className=''>
            <img src="/logos/css-3.svg" className='w-[100px] h-[100px]' alt="css" />
            <p>CSS</p>
        </div>
        <div className=''>
            <img src="/logos/logo-javascript.svg" className='w-[100px] h-[100px]' alt="js" />
            <p>Javascript</p>
        </div>
        <div className=''>
            <img src="/logos/react-2.svg" className='w-[100px] h-[100px]' alt="react" />
            <p>React</p>
        </div>
        <div className=''>
            <img src="/logos/next-js.svg" className='w-[100px] h-[100px]' alt="nextjs" />
            <p>NextJs</p>
        </div>
        <div className=''>
            <img src="/logos/tailwind-css-2.svg" className='w-[100px] h-[100px] ' alt="tailwind" />
            <p>Tailwind CSS</p>
        </div>
      </section>
    </main>
  )
}

export default Skill
