import React from 'react';
import pic from './images/toppng.com-king-crown-transparent-781x459.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactUs from './contactform'





export default function Contact(){ 
    return(
        <div className="p-7 " id="contact">
        <div className="text-center">
            <h1 className="text-base md:text-lg text-neutral-900 tracking-tighter">Contact Me</h1>
            <h1 className="text-lg md:text-2xl text-neutral-900 font-semibold pt-2">Get In Touch</h1>
            <p className="text-xs md:text-sm text-neutral-900 tracking-tighter font-medium pt-2 pl-7 pr-7"> I am available to work on your project and to bring your ideas to life and also to chat. Let's talk, don't be shy.</p>   
        </div>
        <div className="lg:ml-28 lg:mt-4">
            <div className="flex pt-9">
               <div>
                    <button className="rounded-full w-10 h-10 bg-neutral-900"><FontAwesomeIcon icon={faLocationDot} style={{color : 'white'}}/></button>
               </div>
               <div className="pl-4 pt-2">
                   <p className="tracking-tighter text-neutral-900 text-base md:text-xl italic">9,Akinola street Fadeyi, Lagos</p>
               </div>
            </div>
            <div className="flex pt-3">
               <div>
                    <button className="rounded-full w-10 h-10 bg-neutral-900"><FontAwesomeIcon icon={faEnvelopeOpen} style={{color : 'white'}} /></button>
               </div>
               <div className="pl-4 pt-2">
                   <p className="tracking-tighter text-neutral-900 text-base md:text-xl italic">hugotchee1@gmail.com</p>
               </div>
            </div>
            <div className="flex pt-3">
               <div>
                    <button className="rounded-full w-10 h-10 bg-neutral-900"><FontAwesomeIcon icon={faPhone} style={{color : 'white'}} /></button>
               </div>
               <div className="pl-4 pt-2">
                   <p className="tracking-tighter text-neutral-900 text-base md:text-xl italic">+234-708-553-7589</p>
               </div>
            </div>
            <div className="flex pt-3">
               <div>
                    <button className="rounded-full w-10 h-10 bg-neutral-900"><FontAwesomeIcon icon={faWhatsapp} style={{color : 'white'}} /></button>
               </div>
               <div className="pl-4 pt-2">
                   <p className="tracking-tighter text-neutral-900 text-base md:text-xl italic">+234-816-868-7346</p>
               </div>
            </div>
        </div>
        <ContactUs />
        <br />
        <br />
           
            
        </div>

    )
}