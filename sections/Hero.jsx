import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { navVarients } from '../utils/motion'
import styles from '../styles'

/* 
This is the Hero section of the page that shows up on the homepage. It is 
composed of an image of myself alongside some text that gives basic descriptions
about me. Ideally, it will be animated at some point to look good on load.
*/
const Hero = () => {
  const heroText = 'text-gray-700 text-[35px] md:text-[40px] leading-tight';
  return (
    <motion.div
        className='sm:px-16 px-8 py-5'
    >
        <div className='container flex mx-auto justify-center py-4 gap-4'>
          {/* This is the image of myself that is on the left side*/}
          <div>
            <img 
              src="/No_BG_Headshot.png" 
              alt="Yash Thapliyal" 
              className='h-[70vh] object-cover rounded-[20px] hidden lg:block'
              />
          </div>
          <div className='flex flex-col h-[70vh] overflow-hidden pl-5 py-5'>
            <div>
              <div className='md:absolute text-gray-600 text-[2vh] font-light'>Hi, my name is</div>
              <div className='relative text-black font-extrabold text-[10vh] lg:text-[12vh]'>YASH THAPLIYAL</div>
            </div>
            <div className='pt-4'>
              <p className='text-gray-600 text-[4vh]'>I am a:</p>
              <p className={`${heroText} pt-2`}>Student,</p>
              <p className={`${heroText}`}>Developer,</p>
              <p className={`${heroText}`}>Journalist,</p>
              <p className={`${heroText}`}>Creator</p>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default Hero