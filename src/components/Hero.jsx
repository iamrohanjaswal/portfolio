import React from 'react'
import profilePic from "../assets/computer.jpg"

const Hero = () => {
  return (
    <div className='p-4 pt-40 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <div className="flex justify-center lg:p-8">
                    <img src={profilePic} alt="Loading" className='border border-primary rounded-3xl hover:border-2'/>
                </div>
            </div>
            <div className="w-full lg:w-1/2 pl-10">
            <div className="flex flex-col items-center lg:items-start mt-10">
                <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-white">Rohan Jaswal</h2>
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-3xl tracking-tight text-transparent"> 
                    Full Stack Developer
                </span>
                <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-white">
                    {/* your full description */}
                    Hi there, I’m a web developer with a passion for building thoughtful and efficient digital experiences. I focus on clarity, simplicity, and functionality in every project.
                </p>
                <a href="https://drive.google.com/drive/folders/1eL5SSK0dM-a7BTBNldLUVRV8ayteBwMW?usp=sharing" target="_blank" rel="noopener noreferrer"
                className="bg-primary rounded-lg p-3 text-lg text-black mb-10 inline-flex hover:bg-secondary transform transition-transform duration-300 hover:scale-95">
                    View Resume
                </a>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Hero
