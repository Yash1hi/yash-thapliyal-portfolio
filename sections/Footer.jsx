import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// These are the icons and their respective names, image, and links that show up on the right side of the footer
const icons = [
  { "name": "Instagram", "link": "https://www.instagram.com/stories/yash1hi/", "image": "/icons/instagram.png" },
  { "name": "LinkedIn", "link": "https://www.linkedin.com/in/yash-thapliyal-27aa6a203/", "image": "/icons/linkedin.png" },
  { "name": "Instagram", "link": "https://github.com/Yash1hi", "image": "/icons/github.png" },
]

// The footer component that is on the bottom of all pages 
const Footer = () => {
  return (
    <motion.div className='bg-gray-600 w-screen'>
      {/* There are two sections here that are spaced with justify between: One for the logo and the other for contact icons  */}
      <div className='container py-6 mx-auto flex justify-between overflow-hidden'>
        <div className='flex items-center jusitfy-left'>
          <img 
            src="/YT_Logo.png" 
            alt="Logo"
            className='h-[45px]' 
          />
          <h2 className='font-bold text-[18px] leading-[24px] text-white pl-1'>
              Yash<br></br>
              Thapliyal
          </h2>
        </div>
        <div className='flex jusitfy-right items-center gap-2'>
          {icons.map((icon) =>
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={icon.image} 
                alt={icon.name} 
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Footer