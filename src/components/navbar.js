import React from 'react';
import pic from './images/toppng.com-king-crown-transparent-781x459.png'
import {HashLink as Link} from 'react-router-hash-link'
export default function Navbar(){
    return(
    
    <div className=" p-8">
        <nav className="flex text-orange-500">
        <div>BRAND</div>
            <ul className="flex ml-auto">
            <Link to='#about' smooth >
            <li className=" mr-3 hover:underline">About</li>
            </Link>
            <Link to='#skills' smooth>
              <li className="ml-2 mr-3 hover:underline" >Skills</li>  
            </Link>
            <Link to='#contact' smooth>
                <li className="ml-2 md:mr-3 hover:underline">Contact</li>
            </Link>
                          
            </ul>
        </nav>
    
    </div>
      
    )
}