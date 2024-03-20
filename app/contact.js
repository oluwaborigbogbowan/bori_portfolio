'use client'
import React, { useRef } from 'react';
import Link from 'next/link'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <main id='contact' className='md:mt-20 mt-10 h-[80%]'>
      <h2 className=' text-4xl font-bold self-start text-[#AAFF00] mb-5 text-center'>CONTACT</h2>
      <section className='bg-[#212529] rounded-lg flex md:flex-row flex-col-reverse justify-between p-5 '>
        <form ref={form} onSubmit={sendEmail} className='md:w-[35%] flex flex-col gap-4'>
          <div>
          <h3 className='text-4xl font-semibold mb-0'>Work with me</h3>
          <p className='mt-0 opacity-70 '>For enquires, contract, work, etc. Please fill the form below. </p>
          </div>
          <div className='flex flex-col'>
          <label>Name</label>
          <input type="text" name="user_name" className='bg-[#495057] p-3 rounded-lg' />
          </div>
          <div className='flex flex-col'>
          <label>Email</label>
          <input type="email" name="user_email" className='bg-[#495057] p-3 rounded-lg'/>
          </div>
          <div className='flex flex-col'>
          <label>Message</label>
          <textarea name="message" rows='5' className='bg-[#495057] p-1 rounded-lg'/>
          </div>
          <button type='submit' className='bg-[#AAFF00] text-black rounded-lg p-1'>Send</button>
        </form>
        <div className='md:w-[60%] '>
          <iframe className='w-full h-full rounded-lg' src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lsdpc housing estate meiran lagos&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0"></iframe>
          <section className='bg-[#495057] md:w-[60%] relative md:bottom-[190px] my-2 md:left-[30px] p-2 rounded-lg'>
            <div className='grid grid-cols-2 gap-1'>
              <div  >
              <h3 className=' text-sm '>ADDRESS</h3>
              <p className=' text-xs opacity-70'>Block 36 flat 1, Ojokoro housing estate, meiran, Lagos.</p>
              </div>
              <div className='ml-2'>
                <h3 className=' text-sm'>PHONE</h3>
                <p className=' text-xs opacity-70'>+234 (0) 803-983-9677</p>
              </div>
              <div>
                <img src="/logos/icons8-gmail-48.png" className='w-[30px]' alt="gmail"  />
                <p className=' text-xs opacity-70'>isaacibigbemi@gmail.com</p>
              </div>
              <div className='ml-2'>
                <img src="/logos/icons8-whatsapp-logo-48.png" className='w-[30px]' alt="whatsapp" />
                <p className=' text-xs opacity-70'>+234 (0) 817-577-3852</p>
              </div>
            </div>
            <div className='flex justify-center mt-2 gap-1'>
              <Link href='https://www.instagram.com/b.o.r.i_?igsh=dGw3YXNrODI4eTIx&utm_source=qr' className='w-[35px]'>
                  <img src="/logos/icons8-instagram-48.png" alt="instagram" />
              </Link>
              <Link href='https://github.com/oluwaborigbogbowan' className='w-[35px]'>
                  <img src="/logos/icons8-github-48.png" alt="github" />
              </Link>
              <Link href='https://www.linkedin.com/in/ibigbemi-isaac-25b466296/' className='w-[35px]'>
                  <img src="/logos/icons8-linkedin-logo-48.png" alt="linkedin" />
              </Link>
            </div>
          </section>
        </div>
            {/* <div className='flex justify-center flex-col w-[14%] '>
                <img src="/logos/icons8-gmail-48.png" alt="gmail"  />
                <p>isaacibigbemi@gmail.com</p>
            </div>
            <div className='flex justify-center flex-col w-[14%]'>
                <img src="/logos/icons8-call-48.png" alt="call" />
                <p>+2348039839677</p>
            </div>
            <div className='flex justify-center flex-col w-[14%]'>
                <img src="/logos/icons8-whatsapp-logo-48.png" alt="whatsapp" />
                <p>+2348175773852</p>
            </div>
            <Link href='https://www.instagram.com/b.o.r.i_?igsh=dGw3YXNrODI4eTIx&utm_source=qr' className='w-[15%]'>
                <img src="/logos/icons8-instagram-48.png" alt="instagram" />
            </Link>
            <Link href='' className='w-[15%]'>
                <img src="/logos/icons8-github-48.png" alt="github" />
            </Link>
            <Link href='' className='w-[15%]'>
                <img src="/logos/icons8-linkedin-logo-48.png" alt="linkedin" />
            </Link> */}
            
      </section>
    </main>
  )
}

export default Contact
