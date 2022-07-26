import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faBootstrap, faReact, faGitAlt, faGithub, faFigma, faNode, } from '@fortawesome/free-brands-svg-icons';

export default function Skills(){
    return(
        <div className="lg:p-7 md:p-5 p-2 " id='skills'>
            <h1 className="text-slate-900 font-medium pl-2">SKILLS & TOOLS </h1>
            <h1 className=" pl-2 text-xl md:text-2xl font-semibold text-slate-100">My Toolbox & Things I Can Do</h1>
            <p className=" pl-2 tracking-tighter text-sm font-medium pt-5 ">These are but limited to, the skills, tools and technologies I use to bring your products to life:</p>

            <div className="grid grid-cols-2 gap-2 text-slate-100 md:grid-cols-3 lg:grid-cols-4 pt-4">
                <div className="pl-5 pr-5 text-center">
                <FontAwesomeIcon icon={faHtml5} size="4x" style={{ color: '171717' }} />
                <p>HTML5</p>
                </div>

                <div  className="pl-5 pr-5 text-center">
                <FontAwesomeIcon icon={faCss3} size="4x" style={{ color: '171717' }} />
                <p>CSS3</p>
                </div>

                <div className="pl-5 pr-5 text-center">
                <FontAwesomeIcon icon={faJs} size="4x" style={{ color: '171717' }}/>
                <p>JavaScript</p>
                </div>

                <div className="pl-5 pr-5 text-center">
                <FontAwesomeIcon icon={faBootstrap} size="4x" style={{ color: '171717' }} />
                <p>Bootstrap</p>
                </div>
        

                <div className="pl-5 pr-5 text-center hover:text-blue-100">
                <FontAwesomeIcon icon={faReact} size="4x" style={{ color: '171717' }} />
                <p>React</p>
                </div>

                <div  className="pl-5 pr-5 text-center">
                <FontAwesomeIcon icon={faGitAlt} size="4x" style={{ color: '171717'  }} />
                <p>Git</p>
                </div>

                <div className="pl-5 pr-5 text-center">
                <FontAwesomeIcon icon={faGithub} size="4x" style={{ color: '171717' }} />
                <p>GitHub</p>
                </div>

                <div  className="pl-5 pr-5 text-center">
                <FontAwesomeIcon icon={faNode} size="4x" style={{ color: '171717' }}/>
                <p>Node.js</p>
                </div>

            
            </div>
        </div>
    )
}