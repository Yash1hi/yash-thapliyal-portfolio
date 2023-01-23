import React from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from '../../components'
import { Navbar, Footer } from '../../sections';
import { navVarients } from '../../utils/motion'
import Projects from '../../data/codingProjects.json'


const coding : NextPage = () => {
  return (
    <div className='bg-gray-500 overflow-hidden'>
        <Navbar />
        <motion.div
            className='sm:px-16 px-8 md:py-5'
        >
            <div className='container mx-auto flex flex-col justify-center items-center pt-10'>
                <div className='flex justify-between mb-4 border-b border-gray-300 w-full'>
                    <div className='text-[50px] text-gray-300'>
                        Coding Projects
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                    {Projects.map((project, index) => (
                        <div className='lg:col-span-4 col-span-1'>
                            <ProjectCard project={project} key={project.title} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
        <Footer />
    </div>
  )
}

export default coding