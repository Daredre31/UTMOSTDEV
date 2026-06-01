import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [isMobile , setIsMobile] = useState(false)
    const navigate = useNavigate()
    const handleclick= () =>{
      navigate('/works')
    }
  return (
    <div className=''>
    <nav className='flex justify-between p-4 bg-secondary items-center '>
        <div><span className='text-xl text-blue-700'>DAREDRE</span></div>
        <div className='md:flex gap-8 hidden text-muted-foreground'>
           <Link to='stack'><span>stack</span></Link> 
            <span onClick={handleclick}>work</span>
            <Link to='system'><span >system</span></Link>
            
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
                    <Link to='stack'><span>stack</span></Link> 
            <span onClick={handleclick}>work</span>
            <Link to='system'><span >system</span></Link>
                    <button className='border border-accent bg-primary h-10 rounded-md
             text-accent-foreground p-2 text-center font-semibold w-80'>get in touch</button>
                </div>
            )
        } </div>
    
  )
}

export default Nav