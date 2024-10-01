import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import Link from 'next/link';
import Cursor from '@/components/cursor';
import { SendButton } from '@/components/ui/sendbutton';

export function Contact() {
  const [submit, setSubmit] = useState('Send...');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {
    if (submit === 'Send...') {
      setSubmit('Sent!');
    } else if (submit === 'Sent!') {
      setSubmit('Double Sent!!');
    } else if (submit === 'Double Sent!!') {
      setSubmit('Triple Sent!!!');
    } else if (submit === 'Triple Sent!!!') {
      setSubmit('ok stop');
    }

    emailjs.send('service_zihkl5r', 'template_tr9q70e', formData, 'SjQMxLKCHtzeayNqL')
  };

  return (
    <div className="h-screen w-screen flex flex-col sm:justify-start lg:justify-center items-center cursor-none overflow-hidden">
      <div className="lg:h-3/4 sm:h-[86%] bg-black flex flex-col items-center justify-center relative lg:w-2/3 lg:border-solid lg:border-2 lg:border-black
        sm:h-screen sm:w-full sm:border-none">
        <ShootingStars />
        <StarsBackground />
        <div className="absolute top-0 left-0 right-0 flex flex-col h-full w-full pt-4 px-4 bg-white mix-blend-difference items-center">
          <div className="w-full relative mt-2 px-2">
            <h1 className="lg:text-7xl text-black font-integralbold -translate-y-2 z-50 sm:text-8xl sm:mt-8 sm:ml-8 lg:mt-0 lg:ml-0">CONTACT</h1>
            <div className="absolute right-4 top-1">
              <Link href='/'>
                <h1 className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full lg:before:h-1 before:origin-right
                before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0
                font-integral cursor-none lg:text-2xl sm:text-6xl sm:before:h-2 sm:before:translate-y-4 lg:before:translate-y-0.5 
                sm:mt-8 sm:mr-8 lg:mt-0 sm:mr-0'>
                  HOME</h1>
              </Link>
            </div>
          </div>
          <div className="lg:w-4/5 h-full flex flex-col justify-center items-center sm:w-5/6">
            <input
              type="text"
              name="name"
              className="w-full h-1/7 lg:text-3xl font-bold border-2 border-black cursor-none placeholder:text-black px-2 mb-4 ml-4 sm:text-6xl"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="w-full h-1/7 lg:text-3xl font-bold border-2 border-black cursor-none placeholder:text-black px-2 my-4 ml-4 sm:text-6xl"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="w-full lg:h-1/2 lg:text-2xl font-bold border-2 border-black cursor-none placeholder:text-black p-2 mt-4 ml-4 resize-none 
                sm:text-5xl sm:h-3/5 sm:mb-12 lg:mb-8"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <SendButton onClick={handleClick} className="p-2 bg-black text-white">
              {submit}
            </SendButton>
          </div>
        </div>
      </div>
      <Cursor />
    </div>
  );
}

export default Contact;