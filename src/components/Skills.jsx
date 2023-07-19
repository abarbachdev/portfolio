import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Redux from '../assets/redux.png';
import Oracle from '../assets/oracle.png';
import Express from '../assets/express.png';
import Nextjs from '../assets/nextjs.png';

const Skills = () => {
  return (
    <div id='#skills' className='w-full  h-[800px] bg-slate-900 flex flex-col justify-center ' >
        <div >
            <div className='flex flex-col justify-center items-center'>
                <p className='text-4xl font-semibold inline border-b-4 border-[#ffffff] text-gradient '>Technical Skills</p>
                <p className='text-2xl text-white my-5'>These are Languages, technologies and frameworks I've worked with. </p>
            </div>
            <div>
                <div className='w-full grid grid-cols-4  gap-4 text-center py-8 '>
                    <div>
                    <img src={HTML} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>HTML</p>
                    </div>
                    <div>
                    <img src={CSS} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>CSS</p>
                    </div>
                    <div>
                    <img src={JavaScript} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>JavaScript</p>
                    </div>
                    <div>
                    <img src={ReactImg} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>React JS</p>
                    </div>
                    <div>
                    <img src={Node} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>Node</p>
                    </div>
                    <div>
                    <img src={FireBase} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>FireBase</p>
                    </div>
                    <div>
                    <img src={Tailwind} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>Tailwind</p>
                    </div>
                    <div>
                    <img src={Mongo} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>Mongo</p>
                    </div>
                    <div>
                    <img src={Redux} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>Redux</p>
                    </div>
                    <div>
                    <img src={Nextjs} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>Next Js</p>
                    </div>
                    <div>
                    <img src={Express} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>Express Js</p>
                    </div>
                    <div>
                    <img src={Oracle} alt="html" className='w-[100px] mx-auto' />
                    <p className='text-white my-4'>Oracle</p>
                    </div>
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default Skills