import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";


export const SocialHeader = () => {
  return (
    <div className='header_socials flex-col items-center justify-center text-color_primary absolute left-2   bottom-1/2 w-full h-auto'>
        <a href="https://www.linkedin.com/in/mariasolarroyoc/" className='' target='_blank'>
            <FaLinkedin className='mb-4' />
        </a>
        <a href="https://github.com/MariaSolArroyo" target='_blank' className=''>
        <FaGithub className='mb-4' />
        </a>
        <a href="https://www.behance.net/mariasolarroyoc" className='' target='_blank'>
        <FaBehanceSquare className='mb-4' />
        </a>
    </div>
  )
}
