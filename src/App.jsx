import React from 'react'
// import Nav from './component/Nav'
// import Hero from './component/Hero'
import { Route, Routes } from 'react-router-dom'
// import Stack from './component/Stack'
// import Think from './component/Think'
import Home from './Page/Home'
import Work from './component/work'
import ContactFooter from './component/footer'

const App = () => {
  return (
    <div className='bg-background'>
         
        <Routes>

           <Route path='/' element={<Home/>}></Route>
           <Route path='/works' element={<Work/>}></Route>
        </Routes>
    </div>
  )
}

export default App