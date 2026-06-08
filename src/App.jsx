import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import CursorFire from './Components/cursorFire'
import Footer from './Components/Footer'
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

        <Footer/>

      </div>

    </>
  )
}

export default App
