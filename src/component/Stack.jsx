import React from 'react'
import { Server } from 'lucide-react';
import { Layers } from 'lucide-react';
import { Cloud } from 'lucide-react';

const stackarray = [
     {
        sLogo:  <Layers />,
        sTopic: "Frontend",
        SDescript:"Interfaces users love",
        sBody: [
            "react", "Next.js","Tailwind CSS","TypeScript","Framer Motion"
        ]
     },
     {
        sLogo:<Server />,
        sTopic: "Backend",
        SDescript:"APIs that scale",
        sBody: [
            "express.js", "Node.js","Go","mongoDb","postgreSql","postman"
        ]
     },
     {
        sLogo:  <Cloud />,
        sTopic: "infrastructure",
        SDescript:"Resilient by default",
        sBody: [
            "Aws(EC2/S3)", "Docker","kubernetes","CI/CD","Terraform"
        ]
     }
]

const Stack = () => {
  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500', 'bg-cyan-500'];
  
  return (
    <div className='p-4 sm:p-6 md:p-8 mt-8' id='stack'>
        <div className='w-full mb-6 sm:mb-8'>
              <span className='text-primary text-sm sm:text-base'>the stack</span>
         <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight'>Stack architecture, end to end.</h2>
         <p className='text-muted-foreground text-sm sm:text-base mt-3 max-w-2xl leading-relaxed'>I treat the stack as a single product — every 
             layer chosen so data flows cleanly from
              user input to durable storage and back.</p>
        </div>
        
           <div className='flex flex-col gap-4 sm:gap-6 md:gap-0 md:flex-row md:justify-between'>
                {stackarray.map((stack)=>(
                    <div key={stack.sTopic} className='border border-border w-full md:w-[30%] p-4 sm:p-6 rounded-md'>
                        <div className='flex gap-4 sm:gap-5'>
                            <div className='bg-secondary px-3 sm:px-4 py-3 flex items-center justify-center rounded-xl flex-shrink-0'>
                              <span className='text-primary text-lg sm:text-xl'>
                                 {stack.sLogo}
                                </span> 
                            </div>
                           <div className='flex flex-col justify-center'>
                             <h3 className='text-base sm:text-lg font-semibold'>{stack.sTopic}</h3>
                            <span className='text-muted-foreground text-xs sm:text-sm'>{stack.SDescript}</span>
                           </div>
                        </div>

                        <div className='flex flex-wrap gap-2 mt-5 sm:mt-6'>
                            {stack.sBody.map((btn, index) => (
                                <button key={btn} className={`${colors[index % colors.length]} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white text-xs sm:text-sm whitespace-nowrap`}>{btn}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </div> 
    </div>
  )
}

export default Stack
