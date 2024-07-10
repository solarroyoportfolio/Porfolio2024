import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='bg-color_primary justify-center items-center text-center p-20 pb-32 flex-col'>
        <a href='#home' className='inline-flex text-center justify-center items-center mb-4 text-2xl font-bold text-color_primary bg-color_bg py-2 px-6 rounded-xl'>María Sol Arroyo - FrontEnd Developer</a>
        <ul className='justify-center items-center text-center lg:flex mb-4 gap-8'>
            <li className='py-3 lg:py-2'><a href="#home">Header</a></li>
            <li className='py-3 lg:py-2'><a href="#about">About</a></li>
            <li className='py-3 lg:py-2'><a href="#skills">Experience</a></li>
            <li className='py-3 lg:py-2'><a href="#services">Projects</a></li>
            <li className='py-3 lg:py-2'><a href="#contact">Contact</a></li>
        </ul>
        <div className='flex justify-center items-center mb-4 gap-6'>
            <a href="" className='bg-color_bg text-color_white p-3 rounded-lg'>
            <FaLinkedinIn />

            </a>
            <a href="" className='bg-color_bg text-color_white p-3 rounded-lg'>
            <FaGithub />

            </a>
            <a href="" className='bg-color_bg text-color_white p-3 rounded-lg'>
            <MdOutlineAttachEmail />

            </a>
        </div>

        <div className="flex justify-center items-center">
          <small>2024 &copy; María Sol Arroyo. All rights reserved</small>
        </div>
    </footer>
  )
}
