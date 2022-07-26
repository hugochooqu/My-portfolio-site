import React from 'react';
import pic from './images/toppng.com-king-crown-transparent-781x459.png'
import {HashLink as Link} from 'react-router-hash-link'
export default function Navbar(){
    return(
    
    <div className=" p-8">
        <nav className="flex text-orange-500">
        
            <ul className="flex ml-auto">
            <Link to='#about' smooth >
            <li className="mr-1 md:mr-3 text-sm md:text-base  hover:underline">About</li>
            </Link>
            <Link to='#skills' smooth>
              <li className="ml-1 mr-1 md:ml-2 md:mr-3 text-sm md:text-base  hover:underline" >Skills</li>  
            </Link>
            <Link to='#contact' smooth>
                <li className="md:ml-2 md:mr-3 ml-1 text-sm md:text-base  hover:underline">Contact</li>
            </Link>
                          
            </ul>
        </nav>
    
    </div>
      
    )
}