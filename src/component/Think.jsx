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

const Think = () => {
  return (
    <div className='bg-muted p-4 sm:p-6 md:p-8 mt-8'>
      
      <div className='mb-6 sm:mb-8'>
         <span className='text-primary text-sm sm:text-base'>HOW I THINK</span>

       <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight max-w-3xl'>I don't just write code. I design systems that last.</h3>
      </div>
       
       <div className='mt-6 sm:mt-8 flex w-full'>
         <div className='w-full bg-background border border-border rounded-md mx-auto'>
            <div className='flex flex-col gap-4 sm:gap-6 md:flex-row md:justify-between p-4 sm:p-8 md:p-16 w-full overflow-x-auto'>
      
                {think.map((item, idx) =>(
                    <div key={idx} className='flex-shrink-0 md:flex-shrink'>
                        <div className='flex flex-col justify-center items-center gap-3'>
                              <span className='border border-border p-3 sm:p-4 text-primary rounded-xl text-lg sm:text-xl'>{item.logo}</span>
                             <p className='text-sm sm:text-base font-semibold text-center'>{item.target}</p>
                            <span className='text-xs sm:text-sm text-muted-foreground text-center'>{item.useCase}</span>
                        </div>
                    </div>
                ))}

            </div>
              <hr className='w-full text-muted-foreground' />
              <div className='flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between p-4 sm:p-6 md:p-10 w-full'>
                       {thinkBelow.map((tb, idx) => {
                       return   <div key={idx} className='flex-1'>
                            <div className='flex flex-col'>
                                <p className='text-base sm:text-lg font-semibold'>{tb.topic}</p>
                                <span className='text-xs sm:text-sm text-muted-foreground mt-1'>{tb.desc}</span>
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
