import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

export const ContactUs = () => {
  const form = useRef(null);
  // const formRef = useRef(null);
  const [buttonText, setButtonText] = useState("Send");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6yyb6rp', 'template_de2wcz8', form.current, {
        publicKey: 'bs3jNaWYO75WsONHR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      form.current.reset();         // Clear all fields
      setButtonText("Thanks for reaching out!");
      setTimeout(() => setButtonText("Send"), 10000);
  };

  return (
    <div className="w-[70%] lg:w-[50%] mx-auto hover:bg-[#706f6bfe] bg-[#706f6be7] shadow-md rounded-lg p-8 space-y-4">
      <div className='flex justify-center'>
        <p className='bg-stone-700 text-primary text-5xl rounded-xl w-[80%] text-center shadow-primary shadow-md p-3'>Get in Touch</p>
      </div>

    <div className='sm:flex '>
      <form
    ref={form}
    onSubmit={sendEmail} className="sm:w-[60%] w-full sm:border-r-1 border-stone-700 sm:pr-4"
  >
    <div>
      <label className="block text-lg font-medium text-black mb-1">Name</label>
      <input
        type="text"
        name="from_name"
        placeholder='Your Name'
        required
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  
    <div>
      <label className="block text-lg font-medium text-black mb-1">Email</label>
      <input
        type="email"
        name="from_email"
        placeholder='Your Email'
        required
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  
    <div>
      <label className="block text-lg font-medium text-black mb-1">Message</label>
      <textarea
        name="message"
        required
        placeholder='Your Message'
        rows="4"
        className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
      ></textarea>
    </div>
  
    <input
      type="submit"
      value={buttonText}
      className="w-full bg-white text-black font-semibold py-2 mt-3 rounded hover:bg-black transition hover:text-white hover:cursor-pointer"
    />
     
      </form>
      <div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      
      {/* Email Block */}
      <div
        title="Click to mail"
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=rohanjaswal45@gmail.com&su=Subject&body=Hello",
            "_blank"
          )
        }
        className="cursor-pointer bg-primary text-black rounded-lg shadow shadow-black flex items-center gap-3 p-3 ml-2 w-full hover:scale-[1.02] transition-transform"
      >
        <BiLogoGmail className="text-xl hidden md:block" />
        <p className="sm:text-base text-xs font-medium">rohanjaswal45@gmail.com</p>
      </div>

      {/* Phone Block */}
      <div
        title="Click to call"
        onClick={() => (window.location.href = "tel:+917807917262")}
        className="cursor-pointer bg-primary text-black rounded-lg shadow shadow-black flex items-center gap-3 p-3 ml-2 w-full hover:scale-[1.02] transition-transform"
      >
        <FaPhone className="text-xl" />
        <p className="text-base font-medium">+91 7807917262</p>
      </div>
      
    </div>
  </div>
   
  
  </div>
    
  );
};