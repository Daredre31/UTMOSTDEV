import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false)
    const navigate = useNavigate()

    const handleclick = () => {
        setIsMobile(false)
        navigate('/works')
    }

    const closeMenu = () => setIsMobile(false)

    return (
        <div className='relative'>
            <nav className='flex justify-between p-4 bg-secondary items-center'>
                <div>
                    <span className='text-xl text-blue-700 cursor-pointer'>DAREDRE</span>
                </div>

                <div className='md:flex gap-8 hidden text-muted-foreground'>
                    <Link to='stack'><span className='cursor-pointer'>stack</span></Link>
                    <span onClick={handleclick} className='cursor-pointer'>work</span>
                    <Link to='system'><span className='cursor-pointer'>system</span></Link>
                </div>

                <div className='flex items-center gap-4'>
                    <button className='border border-accent bg-primary h-10 rounded-md
                        text-accent-foreground p-2 text-center font-semibold hidden md:flex'>
                        get in touch
                    </button>
                    <button
                        className='md:hidden border border-border h-8 w-10
                        flex items-center justify-center text-xl rounded-md'
                        onClick={() => setIsMobile(!isMobile)}
                    >
                        {isMobile ? <HiXMark /> : <HiMenu />}
                    </button>
                </div>
            </nav>

            {isMobile && (
                <div className='md:hidden text-muted-foreground flex flex-col
                    w-full px-8 gap-4 bg-background absolute top-full left-0 z-50 py-4'>
                    <Link to='stack' onClick={closeMenu}><span className='cursor-pointer'>stack</span></Link>
                    <span onClick={handleclick} className='cursor-pointer'>work</span>
                    <Link to='system' onClick={closeMenu}><span className='cursor-pointer'>system</span></Link>

                    <Link to='footer'>
                     <button className='border border-accent bg-primary h-10 rounded-md
                        text-accent-foreground p-2 text-center font-semibold w-full'>
                        get in touch
                    </button>
                    </Link>
                   
                </div>
            )}
        </div>
    )
}

export default Nav