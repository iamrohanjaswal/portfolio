import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dither from './tail'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Experience from './components/Experience'
import { ContactUs } from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
      <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={40}
          waveAmplitude={0.21}
          waveFrequency={3}
          waveSpeed={0.06}
  />
      </div>
      <div className="fixed inset-0 -z-10">
      </div>
      <div className='container mx-auto'>
  
      <div>
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Project/>
      <Experience/>
      <ContactUs/>
      <Footer/>
      
</div>
        
      </div>
    </div>
  )
}

export default App
