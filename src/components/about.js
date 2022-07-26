import { faArrowRight, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'animate.css'
import {HashLink as Link} from 'react-router-hash-link'


export default function About(){
 

    return(
        <div className="p-7 overflow-scroll" id="about">
        <h1 className="text-center font-bold text-4xl pb-4">Me, Myself & I</h1>
        <div id='main' className="h-auto w-3/4 bg-orange-500  shadow-2xl shadow-neutral-900 overflow-hidden pb-4 lg:pb-10  "> 
        <h1 className="font-bold text-lg p-3 md:p-6">Who Am I ?</h1>
       
      <p className=" md:pt-1 pl-9 pr-5 text-left font-semibold tracking-tighter text-base leading-5 md:leading-6 ">
      " I am a developer and ui/ux designer based in Lagos, Nigeria focused on creating interactive digital experiences on the web. I create successful websites that are fast, easy to use, and built with best practices. I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. I AM WHO YOU NEED "
      </p>  
        </div>
        <div id="trykk"className="h-auto w-3/4 pb:4 lg:pb-16 bg-neutral-900  mt-10 ml-20 md:ml-28 lg:ml-36 shadow-2xl shadow-orange-500 text-orange-500">
            <h1 className="font-bold text-lg p-3 md:p-6 md:pb-2 text-right" >Wanna Know More ?</h1>
            
            <p className=" pl-9 pr-5 text-right font-semibold tracking-tighter text-base leading-5 md:leading-6 ">
      " I'm passionate about music and football. I am always curious to learn more about new technologies and creative coding."
      </p>
      <h1 className="font-bold text-lg p-3 md:p-6 md:pb-2 text-right">Still Wanna Know More ?</h1>
       <Link to='#contact' smooth> <a href=""><p className=" pl-9 pr-5 text-right font-semibold tracking-tighter text-base leading-5 md:leading-6 text-orange-300 ">Let's have a chat. Don't be shy, I'm very friendly <FontAwesomeIcon icon={faFaceSmile} smile={{color: '#F97316' }} /> <br /> <FontAwesomeIcon icon={faArrowRight} /></p></a></Link>
        </div>
        </div>
    )
}