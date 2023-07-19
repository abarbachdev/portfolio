import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Mypic from '../assets/mypic.jpg'


const Home = () => {
  return (
    
    <div id='#home' className='  bg-slate-900   w-full h-[800px] md:flex justify-between items-center'>
        <div className=' flex flex-col justify-center h-full ml-10'>
            <h1 className=' lg:text-6xl md:text-5xl  py-7 text-white capitalize'>Hi, i'm ismail abarbach</h1>
            <h2 className=' lg:text-6xl  md:text-5xl  capitalize text-gradient font-semibold'>Full-Stack Developer</h2>
            
        <div>
              
            <p  className=' col-span-2  pt-6 ml-0 max-w-[600px] text-white'>Je suis un développeur full-stack 👨‍💻 avec de l'expérience en JavaScript, React.js, Node.js, Next.js, et Tailwind CSS. Passionné par le web, J'ai toujours aimé créer des applications web conviviales et faire partie d'une équipe de personnes talentueuses pour la réussite de projets ambitieux. J'ai une soif d'apprendre de nouvelles technologies et techniques pour améliorer mes compétences et rester à jour avec les dernières tendances dans le développement web. </p>
            <button className='text-white  border-2 mt-8 w-[200px] h-[50px] flex  justify-center items-center bouton'>Check my Projetcs <HiArrowNarrowRight className='ml-2'/></button>

            
        </div>   

        

        </div>

        
        <div className=' hidden lg:block justify-center items-center mr-20'>
      <img src={Mypic} className='w-[400px] h-[400px] rounded-full '  />
    </div>
    </div>
   
   
  )
}

export default Home