import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className=''>
      <div className="bg-[#706f6be7] rounded-2xl mx-auto hover:bg-[#706f6bfe] w-[70%] lg:w-[50%] p-4 my-40">
        <h2 className="text-center text-5xl flex justify-center  items-center w-auto">
          <p className='bg-stone-700 rounded-xl text-primary mb-10 mt-5 p-3 shadow-primary shadow-md'>Experience
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
                    <h3 className="mb-2 font-bold text-xl">
                        {Experience.role} -{" "}
                        <span className="text-md text-primary">
                            {Experience.company}
                        </span>
                    </h3>
                    <p className="mb-4 text-white">
                        {Experience.description}
                    </p>
                    {Experience.technologies.map((tech, index) =>(
                        <span className="mr-2 mt-4 rounded bg-black px-2 py-1 text-md font-medium text-stone-300" key={index}>{tech}
                        </span>
                    ))}

                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
