import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { SiMongodb } from 'react-icons/si'
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from 'react-icons/fa'
import {BiLogoPostgresql} from "react-icons/bi"
import { FaBootstrap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

const Technologies = () => {
  return (
    <div className="my-20">
      <div className="bg-[#706f6be7] w-[80%] lg:w-[50%] rounded-2xl mx-auto hover:bg-[#706f6bfe] p-5 ">
      <h2 className="my-5 text-center flex justify-center items-center text-4xl sm:text-5xl text-primary">
        <p className='bg-stone-700 size-auto rounded-xl p-3 shadow-primary shadow-md'>Technologies</p>
      </h2>
      <div className="flex flex-wrap items-center justify-center overflow-hidden">
        <div  className='bg-stone-700 rounded-3xl text-center p-3 m-4 flex-1 flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110'>
            <RiReactjsLine className="text-8xl text-cyan-400"/>
            <p className='text-white text-2xl'>ReactJs</p>
        </div>
       
        <div className=" flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <SiMongodb className='text-8xl text-green-500'/>
            <p className='text-white text-2xl'>MongoDB</p>
        </div>
        <div className=" flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <FaJava className="text-8xl text-red-500"/>
            <p className='text-white text-2xl'>Java</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <RiJavascriptFill className="text-8xl text-green-500 "/>
            <p className='text-white text-2xl'>JavaScript</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <SiTailwindcss className="text-8xl text-cyan-500 "/>
            <p className='text-white text-2xl'>Tailwind</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <FaNodeJs className="text-8xl text-green-500 " />
            <p className='text-white text-2xl'>NodeJS</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <BiLogoPostgresql className="text-8xl text-sky-700 "/>
            <p className='text-white text-2xl'>PostgreSQL</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <IoLogoGithub className="text-8xl text-purple-600 "/>
            <p className='text-white text-2xl'>Github</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <GrMysql className="text-8xl text-orange-400 "/>
            <p className='text-white text-2xl'>MySql</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <SiExpress className="text-8xl text-black "/>
            <p className='text-white text-2xl'>ExpressJS</p>
        </div>
        <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <FaBootstrap className="text-8xl text-sky-400"/>
            <p className='text-white text-2xl'>BootStrap</p>
        </div>
       
         <div className="flex-1 h-40 p-3 m-4 bg-stone-700 rounded-3xl text-center flex justify-center flex-col items-center hover:border-y-4 hover:border-primary transform transition-transform duration-300 hover:scale-110">
            <FaGitAlt className="text-8xl text-red-800 "/>
            <p className='text-white text-2xl'>Git</p>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Technologies
