import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from '../components'

import { navVarients } from '../utils/motion'

// Here is a list of my current projects. I should really try to automate this sometime.
const currentProjects = [
    { title: 'El Estoque News Quiz Website', link: 'https://el-estoque-news-quiz.vercel.app/', image: '/projectImages/EENewsQuiz.png', excerpt: 'A website built I made to create, host, and organize quizzes without having to code', tags: ['Coding', 'Writing', 'Design']},
    { title: 'Girls Soccer defeats Capuchino High School 7-0', link: 'https://elestoque.org/2022/12/12/sports/girls-soccer-defeats-capuchino-high-school-7-0/', image: '/projectImages/SoccerGameReview.jpg', excerpt: 'A game review I wrote with Samika Bhatkar and Vincent Zhao on a recent soccer game at MVHS', tags: ['Writing', 'Photography']},
    { title: 'Signing Santa Instagram Post', link: 'https://www.instagram.com/p/CmApjwGLiLE/', image: '/projectImages/SigningSantaInsta.jpg', excerpt: "A social media post covering Cupertino's Christmas event for the hard-of-hearing with Ananya Chaudhary", tags: ['Photography']},
]

/*
This section is the recent projects of the homepage. It uses the ProjectCard
component to display recent projects from a manually inputted set. It has a 
title and these cards that link to the various projects.
*/
export const Recent = () => {
  return (
    <motion.div
        className='sm:px-16 px-8 md:py-5'
    >
        <div className='container mx-auto flex flex-col justify-center items-center pt-10'>
            <div className='flex justify-between mb-4 border-b border-gray-300 w-full'>
                {/* title */}
                <div className='text-[50px] text-gray-300'>
                    My Recent Projects
                </div>
                <Link href='/projects/coding' className='mt-4 text-xl text-gray-600 font-bold bg-gray-300 px-5 py-2 rounded-full mb-3 hidden md:block'>
                    See More Projects
                </Link>
            </div>
            {/* Loops through all the projects from the above section and makes them into project cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                {currentProjects.map((project, index) => (
                    <div className='lg:col-span-4 col-span-1'>
                        <ProjectCard project={project} key={project.title} />
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Recent