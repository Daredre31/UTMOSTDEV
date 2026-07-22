import React from 'react'
import { Link } from 'react-router-dom';

const date = new Date().getFullYear();

const experience = [
  {
  heading : `1+` , label: "years of shipping",
  },
  {
    heading : `10+` , label: "projects built",
  },
  {
    heading : "5 star" , label: "open-source repo",
  }
]

const Hero = () => {
  return (
    <div className='bg-gradient-mesh md:h-[800px] h-auto p-4 sm:p-6 w-full ' id='Hero'>
       <div className='flex flex-col md:flex-row justify-between gap-6 sm:gap-8 mt-8 md:mt-16'>
      <div className='flex flex-col md:w-1/2'>

         {/* <div className="md:hidden relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-border overflow-hidden text-center mx-auto">
            
            <img
              src='/d3.png'
              alt="daredre"
              className="w-full h-full object-cover"
            />
          </div> */}
       
        <span className='border border-border rounded-full text-xs sm:text-sm text-muted-foreground py-1.5 px-3 w-fit mt-4 sm:mt-5 inline-block'>Open to full-stack roles · {date}</span>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl break-words font-extrabold mt-4 sm:mt-5 leading-tight'>
            Building scalable systems from <span className='text-primary'>pixel</span> to <span className='text-primary'>dashboard</span>
          </p>
          <div className='w-full max-w-xl text-sm sm:text-base md:text-base mt-4 sm:mt-5'>
            <p className='text-muted-foreground leading-relaxed'>Full-stack engineer with 1+ year of hands-on experience in <span className='text-black'>React, Node.js,</span> and <span className='text-black'>cloud-native APIs.</span></p>
          </div>

          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto'>

            <Link to='/works'><button className='bg-primary border border-border rounded-md px-4 sm:px-6 py-2.5 md:py-3 text-white text-center text-sm sm:text-base hover:opacity-90 transition-opacity w-full sm:w-auto'>view my work</button></Link>
            
            <button className='bg-white text-black px-4 sm:px-6 py-2.5 md:py-3 border border-border rounded-md text-sm sm:text-base hover:bg-secondary transition-colors w-full sm:w-auto'>Read my technical blog</button>
          </div>
           

           <hr className='mt-6 sm:mt-8 text-muted-foreground hidden md:block' />
            <div className='flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 mt-6 sm:mt-8'>
              {experience.map((ex) => (
            <div key={ex.heading} className=''>
               <p className='text-black text-base sm:text-lg font-semibold'>{ex.heading} </p>
               <p className='text-muted-foreground text-xs sm:text-sm'>{ex.label}</p>
            </div>
           ))}
            </div>

           
       </div>
       <div className='hidden md:flex justify-center md:justify-end flex-shrink-0'>
         {/* <div className="relative w-56 h-56 md:w-64 lg:w-72 md:h-64 lg:h-72 rounded-full border-2 border-border overflow-hidden text-center">
            
            <img
              src='/d3.png'
              alt="daredre"
              className="w-full h-full object-cover"
            />
          </div> */}
       
       </div>
       </div>
    </div>
  )
}

export default Hero
