import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import FuzzyText from "./glitch"; 


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 h-[12%] w-full backdrop-blur-md fixed">
        <div className='flex flex-shrink-0 items-center'>
            <a href ="/" aria-label="Home">
  
            <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={0.5} 
              enableHover={true}>
              RJ
            </FuzzyText>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-4xl text-primary">
          <a href="https://www.linkedin.com/in/rohan-jaswal-806a70287/" target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
            <FaLinkedin className="hover:text-secondary transform transition-transform duration-300 hover:scale-120" title="LinkedIn"/>
          </a>
          <a href="https://github.com/iamrohanjaswal" target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
            <FaGithub className="hover:text-secondary transform transition-transform duration-300 hover:scale-120" title="Github"/>
          </a>
          <a href="https://x.com/iamrohanjaswal" target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter">
            <FaSquareXTwitter className="hover:text-secondary transform transition-transform duration-300 hover:scale-120" title="Twitter"/>
          </a>
          <a href="https://www.geeksforgeeks.org/user/iamrohanjaswal/" target="_blank"
          rel="noopener noreferrer"
          aria-label="Geeksforgeeks">
            <SiGeeksforgeeks className="hover:text-secondary transform transition-transform duration-300 hover:scale-120" title="Geeksforgeeks"/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar
