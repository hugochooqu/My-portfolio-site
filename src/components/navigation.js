import React from 'react';
import Navbar from './navbar.js'
import pic from './images/4c327a27bfd145d8bea7601df773713a_1604006440300 (2).jpg';
import Contact from './contact.js';
import Skills from './skills.js';
import About from './about.js'
import Typed from 'typed.js'
import {HashLink as Link} from 'react-router-hash-link'

export default function Navigation (){

   
        // Create reference to store the DOM element containing the animation
        const el = React.useRef(null);
      // Create reference to store the Typed instance itself
        const typed = React.useRef(null);
    
      React.useEffect(() => {
        const options = {
            strings: [
            'Front-End Developer',
            'UI/UX Designer',
            'Gamer'
          ],
          typeSpeed: 150,
          backSpeed: 100,
          loop: true
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
          typed.current.destroy();
        }
      }, [])


    return(
    
    <div className="lg:flex  ">
            <div className="lg:fixed bg-neutral-900 md:h-auto lg:h-screen lg:w-1/2 h-auto m-0 font-serif pt-7 md:pt-7  lg:pl-7 pb-7 ">
                <Navbar />
                <h1 className="text-orange-500 text-xl md:text-3xl lg:text-4xl font-normal tracking-tighter pl-7 pt-7  ">
                Hello there.</h1>
              
                <h1 className="text-orange-500 text-2xl md:text-4xl lg:text-5xl pt-6 pl-6 tracking-tighter ">
                I'm A <span  style={{ whiteSpace: 'pre' }} ref={el}/></h1>
                <p className="p-7 text-orange-500 md:text-lg">My name is Ugochukwu Victor, I craft beautiful user interfaces using modern front-end web technologies.</p>
                <br />
                <br />
                <div className="pl-7 pb-0">
                <Link to='#contact' smooth><button className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-zinc-200 transition ease-linear delay-100 duration-300 border-2  w-48 md:w-60 h-12 rounded-full">Let's work together</button></Link>
                </div>

                <p className="pt-10 pl-7 text-sm tracking-tighter text-slate-100">Find me at <a className="text-orange-500 underline" href="https://twitter.com/UgochiVictor">Twitter,</a> <a href="" className="text-orange-500 underline">GitHub</a> and <a href="https://linkedin.com/in/nwanuma-ugochukwu" className="text-orange-500 underline">LinkedIn</a></p>
                <p className="pt-1 pl-7 text-sm tracking-tighter text-slate-100">Download <a className="underline text-orange-500">my resume</a></p>
            </div>
             <div className="lg:ml-auto lg:w-1/2 h-screen  "> 
             <div className=" lg:fixed object-cover">
                 <img src={pic} alt="simpson" className="h-screen w-screen"></img>
             </div>
             <div className="lg:h-screen relative"></div>
             <div className="h-auto bg-neutral-100  relative ">
                 <About />
             </div>
             <div className="h-auto bg-orange-500 relative">
                 <Skills />
             </div>
             <div className="h-auto bg-slate-100 relative">
                 <Contact />
             </div>
             
            </div>
           
        </div>

    )
    }