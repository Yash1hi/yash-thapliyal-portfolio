import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import { navVarients } from '../utils/motion'

/* 
This navbar compenent should show up at the top of each page. It displays links
to other parts of the page and has my logo on it as well.
*/

const Navbar = () => {
  return (
    <motion.nav
        // variants={ navVarients }
        initial="hidden"
        whileInView="show"
        className='sm:px-16 px-8 py-5 relative'
    >
        <div className='container py-5 mx-auto flex justify-between'>
            {/* Left side logo */}
            <Link href='/' className='flex items-center'>
                <Image 
                    src="/YT_Logo.png" 
                    alt="Logo" 
                    width={50}
                    height={14}
                    className='pr-2'
                />
                <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
                    Yash<br></br>
                    Thapliyal
                </h2>
            </Link>
            {/* Right side nav stuff */}
            <div className='hidden sm:flex justify-end gap-10 items-center text-white text-md'>
                <Link href='/projects/coding'>Coding</Link>
                <Link href='/projects/media'>Media</Link>
                <Link href='/projects/writing'>Writing</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar