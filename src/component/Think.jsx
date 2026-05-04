import React, { useCallback } from 'react'
import { Globe } from 'lucide-react';
import { Boxes } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';



const think = [
    {
        logo:<Globe />,
        target:"client",
        useCase:"Browser/ mobile"
    },
    {
        logo:<Shield />,
        target:"Api Gateway",
        useCase:"Auth . Rate limit"
    },
    {
        logo:  <Boxes />,
        target:"Microservices",
        useCase:"stateless . scalable"
    },
    {
        logo:<Cpu />,
        target:"Cache Layer",
        useCase:"Redis . CDN"
    },
    {
        logo:  <Database />,
        target:"Data Cluster",
        useCase:"MongoDB . laravel"
    },
]

const thinkBelow = [
    {
        topic:"Observability",
        desc:"Logs, traces & metrics from day one"
    },
    {
        topic:"Security",
        desc:"Defense-in-depth, least privilege"
    },
    {
        topic:"Cost-aware",
        desc:"Right-sized infra, autoscaling"
    },
]

 const thinkFoot = [
    {
        title:"OBSERVABILITY",
        descript : "Logs, traces & metrics from day one"
    },
    {
        title:"SECURITY",
        descript : "Defense-in-depth, least privilege"
    },
    {
        title:"Cost-AWARE",
        descript : "Right-sized infra, autoscaling"
    },
 ]
const Think = () => {
  return (
    <div className='bg-muted p-4 mt-8'>
      
      <div className='md:2xl'>
         <span className='text-primary'>HOW I THINK</span>

       <h3 className='text-[36px] font-bold'>I don't just write code. I design systems that last.</h3>
      </div>
       
       <div className=' mt-6 flex w-full'>
         <div className='w-[90%] bg-background border border-border rounded-md max-h-max mx-auto'>
            <div className='flex flex-col md:flex-row  md:justify-between  p-16 w-[90%] '>
     
                {think.map((item) =>(
                    <div key={item} className=''>
                        <div className='flex flex-col justify-center items-center gap-3'>
                              <span className='border border-border p-4 text-primary rounded-xl'>{item.logo}</span>
                             <p>{item.target}</p>
                            <span className='text-sm text-muted-foreground'>{item.useCase}</span>
                        </div>
                           
                    </div>
                ))}

            </div >
              <hr className='w-[90%] mx-auto text-muted-foreground' />
              <div className='flex flex-col md:flex-row gap-18 p-10'>
                       {thinkBelow.map((tb) => {
                       return   <div key={tb}>
                            <div className='flex flex-col'>
                                <p>{tb.topic}</p>
                                <span>{tb.desc}</span>
                            </div>
                          </div>
                       })}
                   </div>
            </div>  
                  
                   
       </div>
    </div>
  )
}

export default Think