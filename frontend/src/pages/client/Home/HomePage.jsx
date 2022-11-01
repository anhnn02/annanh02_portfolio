import React, { useEffect } from 'react'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Introduce from './components/Introduce/index'
import Projects from './components/Projects'
import Concepts from './components/Concepts'
import Services from './components/Services'
import Skills from './components/Skills'

const HomePage = () => {
 
  return (
    <>
      <div className="">
          <Banner />
          <Introduce />
          <Skills />
          <Services />
          <Projects />
          <Concepts />
          <Contact />
      </div>
    </>
  )
}

HomePage.propTypes = {}

export default HomePage
