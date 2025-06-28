import React from 'react'
import {PROJECTS} from "../constants"
import { FaLink } from "react-icons/fa";


const Project = () => {
  return (
    <div className=''>
        <div className='bg-[#706f6be7] rounded-2xl hover:bg-[#706f6bfe] w-[70%] lg:w-[50%] mx-auto my-40'>
            <h2 className="p-8 text-center text-5xl flex justify-center">
                <p className='bg-stone-700 w-auto h-auto text-primary rounded-lg p-3 shadow-primary shadow-md'>Projects</p>
                </h2>
            <div className='pb-10'>
            {PROJECTS.map((project, index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center pl-15">
                    <div className="w-full py-5 lg:w-1/4">
                    <img src={project.image} 
                    width={250}
                    height={250}
                    alt={project.title}
                    title="Click to open"
                    onClick={() => window.open(project.link, "_blank")}
                    className="mb-6 rounded hover:border-white transform transition-transform duration-300 hover:scale-110 hover:border-y-4 cursor-pointer"
                    />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4 p-3">
                    <h3 className="mb-2 font-semibold text-2xl flex px-3">{project.title}<FaLink 
                    className='mx-2 hover:text-stone-800 cursor-pointer' 
                    title="Live Project"
                    onClick={() => window.open(project.link, "_blank")}
                    />
                   
                    </h3>
                    <p className="mb-4 text-white px-2">
                       {project.description} 
                    </p>
                    <div className='flex flex-wrap'>
                    {project.technologies.map((tech, index)=>(
                            <span className="m-1 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                            {tech}
                            </span>
                        ))}
                    </div>

                        
                    
                    </div>
                </div>
            ))}
        </div>
        </div>
        
        
    </div>
  )
}

export default Project
