import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import Projects from './Components/Projects'
import CursorFire from './Components/cursorFire'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-black h-screen w-full '>

        <CursorFire />

        <Navbar />
        
        <Hero />
        <hr className='text-white' />
        <Skills />
        <hr className='text-white' />
        <Projects />
        <hr className='text-white' />
        <AboutMe />
        <hr className='text-white' />

        <ContactMe />

      </div>

    </>
  )
}

export default App
