import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Mypic from '../assets/mypic.jpg'


const Home = () => {
  return (
    
    <div id='#home' className='  bg-slate-900   w-full h-[600px] flex justify-between items-center'>
        <div className=' flex flex-col justify-center h-full ml-10'>
            <h1 className=' text-6xl py-7 text-white capitalize'>Hi, i'm ismail abarbach</h1>
            <h2 className=' text-6xl  capitalize text-gradient font-semibold'>Frontend Developer</h2>
            
        <div>
              
            <p  className=' col-span-2  pt-6 ml-0 max-w-[600px] text-white'>As a seasoned software engineer 👨‍💻, I possess a strong passion for building innovative products 
            while also dedicating my time to educate others on the principles of computer science. 
            As a seasoned software engineer 👨‍💻, I possess a strong passion for building innovative products 
            while also dedicating my time to educate others on the principles of computer science.
            As a seasoned software engineer 👨‍💻, I possess a strong passion for building innovative products 
            while also dedicating my time to educate others on the principles of computer science.🚀 </p>
            <button className='text-white  border-2 mt-8 w-[200px] h-[50px] flex  justify-center items-center hover:bg-pink-600'>Check my Projetcs <HiArrowNarrowRight className='ml-2'/></button>

            
        </div>   

        

        </div>

        
        <div className=' justify-center items-center mr-20 transition ease-linear'>
      <img src={Mypic} className='w-[400px] h-[400px] rounded-full '  />
    </div>
    </div>
   
   
  )
}

export default Home