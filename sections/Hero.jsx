import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { navVarients } from '../utils/motion'
import styles from '../styles'

const Hero = () => {
  const heroText = 'text-gray-700 text-[35px] md:text-[40px] leading-tight';
  return (
    <motion.div
        className='sm:px-16 px-8 py-5'
    >
        <div className='container flex mx-auto justify-center py-4 gap-4'>
          <div>
            <img 
              src="/Yash_Headshot_NoBG.png" 
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