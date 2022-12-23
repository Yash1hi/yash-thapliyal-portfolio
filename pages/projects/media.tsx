import React from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from '../../components'
import { Navbar } from '../../sections';
import { navVarients } from '../../utils/motion'

const Projects = [
    { 
        title: 'Signing Santa', 
        link: 'https://www.instagram.com/p/CmApjwGLiLE/', 
        image: 'https://lh6.googleusercontent.com/eWO42UdSu5jGYzn5mT0RT_Ouf0EBJS52uoTExCZeZHL2rIfUpTDt_j9CZhmyb6J798g=w2400', 
        excerpt: 'The City of Cupertino hosted its annual Signing Santa event on Dec. 10 at the Quinlan Center.', 
        tags: []
    },
    { 
        title: 'Girls Soccer 7-0', 
        link: 'https://www.instagram.com/p/Cl9uurvPJRD/', 
        image: 'https://lh5.googleusercontent.com/fYxiDzNctPnsCPo_AK845qIMumSDzMNtZ5sUoOMWAHpq5HdCAxUcT6D995iYLR-1zvY=w2400', 
        excerpt: 'Varsity Girls Soccer defeated Capuchino High School 7-0 on Wednesday, Dec. 8.', 
        tags: []
    },
    { 
        title: 'Kickboxing', 
        link: 'https://www.instagram.com/p/Cl44VUlLdp7/', 
        image: 'https://drive.google.com/uc?export=view&id=1ZmgNuhthWYWf0K1mmfPeTuz8-KK9Q8Fw', 
        excerpt: 'MVHS hosted a finals prep event on Dec. 7 during lunch at the Rally Court.', 
        tags: []
    },
]

const media : NextPage = () => {
  return (
    <div className='bg-gray-500 overflow-hidden'>
        <Navbar />
        <motion.div className='sm:px-16 px-8 md:py-5'>
            <div className='container mx-auto flex flex-col justify-center items-center pt-10'>
                <div className='flex justify-between mb-4 border-b border-gray-300 w-full'>
                    <div className='text-[50px] text-gray-300'>
                        Social Media
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
    </div>
  )
}

export default media