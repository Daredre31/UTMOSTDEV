import React from 'react'


const date = new Date().getFullYear();

const experience = [
  {
  heading : `1+` , label: "years of shipping"
  },
  {
    heading : `10+` , label: "projects built"
  },
  {
    heading : "5 star" , label: "open-source repo"
  }
]

const Hero = () => {
  return (
    <div className='bg-gradient-mesh md:h-[800px] h-screen p-4 '>
       <div className='md:absolute top-36  md:flex justify-between grid '>
      <div className='flex flex-col md:w-3xl'>

         <div className="md:hidden relative w-60 h-60 md:w-100 md:h-100 rounded-full border-2
          border-border overflow-hidden text-center mx-auto ">
            
            <img
              src='/d3.png'
              alt="daredre"
              className="w-full h-full object-fill "
            />
          </div>
       
        <span className='border border-border
         rounded-full text-sm text-muted-foreground
         py-1  w-60  mt-5 '>Open to full-stack roles · {date}</span>
          <p className='md:text-7xl wrap-break-word font-extrabold text-4xl mt-5 p-2'>
            Building scalable systems from <span className='text-primary'>pixel</span> to <span className='text-primary'>dashboard</span>
          </p>
          <div className='md:w-110 w-90 text-[17px] mt-2.5 p-2'>
            <p className='text-muted-foreground'>Full-stack engineer with 1+ year of hands-on experience in <span className='text-black'>React, Node.js,</span> and <span className='text-black'>cloud-native APIs.</span></p>
          </div>

          <div className='flex flex-col gap-4 mt-8 w-90 md:flex-row md:w-110'>
            <button className='bg-primary border border-border rounded-md
            px-6 py-1 text-white text-center '>view my work</button>
            <button className='bg-white text-black px-8 py-1 
            border border-border rounded-md'>Read my technical blog</button>
          </div>
           

           <hr className='mt-8 text-muted-foreground hidden md:flex' />
            <div className='flex justify-between p-2'>
              {experience.map((ex) => (
            <div key={ex} className=''>
               <p className='text-black'>{ex.heading} </p>
               <p className='text-muted-foreground'>{ex.label}</p>
            </div>
           ))}
            </div>

           
      </div>
      <div>
        <div className="hidden md:flex relative w-56 h-56 md:w-76 md:h-76 rounded-full border-2 border-border overflow-hidden text-center">
            
            <img
              src='/d3.png'
              alt="daredre"
              className="w-full h-full object-fill "
            />
          </div>
       
      </div>
      </div>
    </div>
  )
}

export default Hero