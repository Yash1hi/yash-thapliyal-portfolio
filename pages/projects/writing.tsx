import React from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from '../../components'
import { Navbar } from '../../sections';
import { navVarients } from '../../utils/motion'

const Projects = [
    { 
        title: 'Take our November news quiz', 
        link: 'https://elestoque.org/2022/12/16/news/take-our-november-news-quiz-2/', 
        image: 'https://elestoque.org/wp-content/uploads/2022/12/Featured_Image-900x643.png', 
        excerpt: 'Test your knowledge of key events last month', 
        tags: []
    },
    { 
        title: 'Girls Soccer defeats Capuchino High School 7-0', 
        link: 'https://elestoque.org/2022/12/12/sports/girls-soccer-defeats-capuchino-high-school-7-0/', 
        image: 'https://elestoque.org/wp-content/uploads/2022/12/DSC6733-900x646.jpg', 
        excerpt: 'Matadors dominate in their second game of the league season', 
        tags: []
    },
    { 
        title: 'Take our October news quiz', 
        link: 'https://elestoque.org/2022/11/09/news/october-news-quiz/', 
        image: 'https://elestoque.org/wp-content/uploads/2022/11/finalbackground-1-900x506.png', 
        excerpt: 'Test your knowledge of key events last month', 
        tags: []
    },
    { 
        title: 'Take our September news quiz', 
        link: 'https://elestoque.org/2022/10/19/news/take-our-september-news-quiz-2/', 
        image: 'https://elestoque.org/wp-content/uploads/2022/10/finalbackground-900x506.png', 
        excerpt: 'Test your knowledge of key events last month', 
        tags: []
    },
    { 
        title: 'Matadors in Focus: Annika Polavarapu', 
        link: 'https://elestoque.org/2022/10/17/matadors-in-focus/matadors-in-focus-annika-polavarapu/', 
        image: 'https://elestoque.org/wp-content/uploads/2022/10/MIF_Anika-900x600.jpg', 
        excerpt: '', 
        tags: []
    },
    { 
        title: 'Sigma supremacy sweeps MVHS', 
        link: 'https://elestoque.org/2022/10/12/opinion/sigma-supremacy-sweeps-mvhs/', 
        image: 'https://elestoque.org/wp-content/uploads/2022/10/Screen_Shot_2022_08_23_at_4.22.21_PM.0-900x600.webp', 
        excerpt: 'Examining the negative impact of sigma male culture on the MVHS community', 
        tags: []
    },
]

export const writing : NextPage = () => {
  return (
    <div className='bg-gray-500 overflow-hidden'>
        <Navbar />
        <motion.div
            className='sm:px-16 px-8 md:py-5'
        >
            <div className='container mx-auto flex flex-col justify-center items-center pt-10'>
                <div className='flex justify-between mb-4 border-b border-gray-300 w-full'>
                    <div className='text-[50px] text-gray-300'>
                        Articles
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

export default writing