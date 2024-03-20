import React from 'react'

function About() {
  return (
    <main id='about' className=' md:mt-12 mt-72 mb-56 md:mb-0 flex md:flex-row flex-col justify-center py-12 h-[90vh] scroll-m-12 gap-12'>
      <h2 className=' text-4xl font-bold self-start text-[#AAFF00]'>ABOUT</h2>
      <div className='text-xl flex flex-col gap-7'>
        <p>
        My name is Ibigbemi Isaac, but I go by Bori which is short for Oluwabori, my middle name. I have a background in Electrical Engineering, but I currently work as a Frontend Engineer. I suppose you could say I'm still an engineer after all! 😄.
        </p>
        <p>
        During my final year at university, I immersed myself in the world of frontend engineering by utilizing various online resources and engaging in hands-on projects. My in-depth exploration of this field allowed me to apply my analytical skills to optimize coding efficiency and enhance user experience. What sets me apart is my unique perspective, which fosters technical precision, creative problem-solving, and innovative solutions. My passion for technology and unwavering commitment to excellence have been the driving forces behind my success thus far. I am excited to continue developing my skills and contributing to the ever-evolving field of frontend engineering.
        </p>
        <p>When I'm not on my computer, I find solace in grooving to music, spending quality time with my dogs, taking relaxing walks, and the occasional indulgence in a fun sitcom or movie.</p>
      </div>
    </main>
  )
}

export default About
