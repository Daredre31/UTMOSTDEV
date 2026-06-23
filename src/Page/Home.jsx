import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import Stack from '../component/Stack'
import Think from '../component/Think'
import ContactFooter from '../component/footer'

const Home = () => {
  return (
    <div>
    <Nav />
    <Hero />
    <Stack />
    <Think />  
    <ContactFooter /> 
    </div>
  )
}

export default Home