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
  return (
    <div className='p-4 mt-8'>
        <div className='md:w-3xl '>
              <span className='text-primary'>the stack</span>
        <h2 className='text-[40px] font-bold'>Stack architecture, end to end.</h2>
        <p className='text-muted-foreground'>I treat the stack as a single product — every 
            layer chosen so data flows cleanly from
             user input to durable storage and back.</p>
        </div>
           <div className='flex flex-col justify-between mt-4 md:flex-row'>
                {stackarray.map((stack)=>(
                    <div key={stack} className='border border-border md:w-[30%] p-2 rounded-md max-h-max mt-5 '>
                        <div className='flex gap-5 px-4 py-2'>
                            <div className='bg-secondary px-4 flex items-center rounded-xl  '>
                              <span className='text-primary'>
                                 {stack.sLogo}
                                </span> 
                            </div>
                           <div className='flex flex-col'>
                             <h3 className=''>{stack.sTopic}</h3>
                            <span className='text-muted-foreground'>{stack.SDescript}</span>
                           </div>
                           
                        </div>

                        <div className='flex flex-wrap gap-2 px-4 mt-4'>
                            {stack.sBody.map((btn) => (
                                
                                    <button className='bg-tech-blue md:px-4 px-2 rounded-xl text-primary-glow '>{btn}</button>
                                
                            ))}
                        </div>
                    </div>
                ))}
            </div> 
    </div>
  )
}

export default Stack