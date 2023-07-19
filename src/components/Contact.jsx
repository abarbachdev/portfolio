import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[800px] bg-slate-900 flex justify-center items-center'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className=' flex flex-col justify-center items-center p-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gradient border-[#ffffff]'>Contact Me</p>
                <p className='text-gray-200 py-4 '> Feel free to contact me</p>
            </div>
            <input className='bg-[#CCD6F6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#CCD6F6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#CCD6F6]' placeholder='Message' name="message"  cols="30" rows="10"></textarea>
            <button className='text-white  border-2 mt-8 w-[200px] h-[50px] flex  justify-center items-center bouton'> Let's Collaborate</button>

        </form>
    </div>
  )
}

export default Contact