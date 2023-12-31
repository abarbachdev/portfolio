import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import Logo from '../assets/logo1.png'
import Mypic from '../assets/mypic.jpg'
import imagebackgr from '../assets/imagebk.jpeg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }

  return (
   
    <div id='home' className=' bg-slate-900 w-full h-[100px] flex justify-between items-center  text-white	fixed'>
       <div>
       <div className=' p-10 w-full flex justify-between items-center'>
            <a href="https://www.linkedin.com/in/iabarbach/" target="_blank">
            <FaLinkedinIn size='25px' className='mr-4 icon'/>
            </a>
            <a href="https://github.com/abarbachdev" target="_blank">
            <AiFillGithub size='25px' className='icon'/>
            </a>
        </div>
       </div>
       
        <div>
            <ul className=' flex  px-5 cursor-pointer '>
                <li className='px-5 menu'>
                    <a href="/home">Home</a>
                </li>
                <li className='px-5 menu'>
                    <a href="/exp">Experience</a>
                </li>
                <li className='px-5 menu'>
                    <a href="/contact">Contact</a>
                    </li>
                <li className='px-5 menu' >
                    <a href="/skills">Skills</a>
                    </li>
                <li className='px-5 menu'>
                    <a href="/projects">Projects</a>
                    </li>
            </ul>
        </div>

        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ?  <FaBars/> : <FaTimes/>}
           
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
                <li className='py-8 text-3xl'>Home</li>
                <li className='py-8 text-3xl'>Experience</li>
                <li className='py-8 text-3xl'>Contact</li>
                <li className='py-8 text-3xl' >Skills</li>
                <li className='py-8 text-3xl'>Projects</li>
        </ul>
    </div>
   
    
  
  )
}

export default Navbar