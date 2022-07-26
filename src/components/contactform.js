import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs ()  {
  const { form} = useRef();
 

  const sendEmail = (e) => {
    e.preventDefault();

    //process.env.REACT_APP_NAME

    emailjs.sendForm('service_asddqhm', 'template_9eugzy1', form.current, 'K8jKN2iJY67I1_glN')
      .then((result) => {
          alert("success");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="pt-10" ref={form} onSubmit={sendEmail}>
      
   
      <input className="h-10 w-60 md:w-48 rounded-2xl text-sm text-neutral-100 border-neutral-900 border-0 bg-neutral-900 pl-5" placeholder="Your Name" type="text" name="user_name"
      />
  
      <input className="mt-6 md:ml-12 lg:ml-12 h-10 md:w-48  w-60 rounded-2xl text-sm text-neutral-100 border-neutral-900 border-0 bg-neutral-900 pl-5" placeholder="E-mail Address" type="email" name="user_email" />
      
      <textarea className="mt-10 w-full h-52 bg-neutral-900 border-neutral-900 text-sm text-neutral-100 border-0 rounded-2xl p-5" placeholder="Your Message" name="message" />
      <br />
     
     <button className="mt-3 w-32 h-8 rounded-full text-slate-100  bg-neutral-900 border-0 border-neutral-900 hover:bg-neutral-900"> <input type="submit" value="Send" /></button>
    </form>
  );
};