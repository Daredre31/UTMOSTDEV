import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

const Nav = () => {
    const [isMobile , setIsMobile] = useState(false)
  return (
    <div className=''>
    <nav className='flex justify-between p-4 bg-secondary items-center '>
        <div><span className='text-xl text-blue-700'>DAREDRE</span></div>
        <div className='md:flex gap-8 hidden text-muted-foreground'>
            <span>stack</span>
            <span>work</span>
            <span>system</span>
            <span>experience</span>
        </div>
        <div>
            <button className='border border-accent bg-primary h-10 rounded-md
             text-accent-foreground p-2 text-center font-semibold hidden md:flex'>get in touch</button>
             <button className='md:hidden border border-border  h-8 w-10 
             flex items-center justify-center text-xl rounded-md'
             onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? <HiXMark /> : <HiMenu />}
             </button>
        </div>
        </nav>
     
        {
            isMobile && (
                <div className=' text-muted-foreground flex flex-col 
                  w-full lg:hidden ml-8 gap-4
                bg-background'>
                    <span>stack</span>
                    <span>work</span>
                    <span>system</span>
                    <span>experience</span>

                    <button className='border border-accent bg-primary h-10 rounded-md
             text-accent-foreground p-2 text-center font-semibold w-80'>get in touch</button>
                </div>
            )
        } </div>
    
  )
}

export default Nav