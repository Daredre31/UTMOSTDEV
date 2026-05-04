import React from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero'
import { Route, Routes } from 'react-router-dom'
import Arr from './component/Arr'
import Stack from './component/Stack'
import Think from './component/Think'

const App = () => {
  return (
    <div className='bg-background'>
         <Nav />
         <Hero />
         <Stack />
         <Think />

         {/* <Arr /> */}

         {/* <Routes>
            <Route path='/arr' element={<Arr />} />
         </Routes> */}
    </div>
  )
}

export default App