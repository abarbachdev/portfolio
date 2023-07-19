import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-slate-100 w-full h-[200px] flex-col justify-center'>
        <div className='flex p-4 justify-center'>
        <a href="https://www.linkedin.com/in/iabarbach/" target="_blank">
            <FaLinkedinIn size='25px' className='mr-4 icon'/>
            </a>
            <a href="https://github.com/abarbachdev" target="_blank">
            <AiFillGithub size='25px' className='icon'/>
            </a>
        </div>
        <div className='flex justify-center p-6'>
            <h1 className='text-3xl'>Ismail Abarbach</h1>
        </div>
        <div className='flex justify-center'>
            <p>Made with Choice, Love, and Passion</p>
        </div>
    </div>
  )
}

export default Footer