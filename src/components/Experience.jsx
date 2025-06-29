import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className=''>
      <div className="bg-[#706f6be7] rounded-2xl mx-auto hover:bg-[#706f6bfe] w-[70%] lg:w-[50%] p-4 sm:my-40">
        <h2 className="text-center sm:text-5xl text-3xl flex justify-center  items-center w-auto">
          <p className='bg-stone-700 rounded-xl text-primary mb-10 mt-5 p-3 shadow-primary shadow-md '>Experience
            </p></h2>
        <div>
            {EXPERIENCES.map((Experience, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-auto lg:w-1/4">
                    <p className="mb-2 text-md text-primary">
                        {Experience.year}
                    </p>
                    </div>
                    <div className="w-auto max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-bold sm:text-xl text-md">
                        {Experience.role} -{" "}
                        <span className="sm:text-m text-sm text-primary">
                            {Experience.company}
                        </span>
                    </h3>
                    <p className="mb-4 text-white">
                        {Experience.description}
                    </p>
                   
                    <div className="flex flex-wrap">
                    {Experience.technologies.map((tech, index) =>(
                        <span className="mr-2 sm:mt-4 mt-1 rounded bg-black px-2 py-1 sm:text-md font-medium text-stone-300" key={index}>{tech}
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

export default Experience
