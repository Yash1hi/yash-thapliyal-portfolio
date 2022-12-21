import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SkillCircle } from '../components'
import skills from "../styles/skills.json";

import { navVarients } from '../utils/motion'

const Skills = () => {
  return (
    <motion.div
        className='sm:px-16 px-8 py-5 relative'
    >
      <div className='px-1 container mx-auto text-center font-semibold text-5xl text-gray-300 pt-20'>
        Skills
      </div>
      <div className='container py-5 mx-auto flex flex-wrap lg:flex-nowrap gap-20 px-1'>  
        {skills.map((category, index) =>
          <div className='w-full pt-5'>
            <p className='text-center md:text-left text-gray-200 mb-5 text-3xl border-b border-gray-200 pb-1'>
              { category.name }
            </p>
            <div className='flex flex-wrap justify-center'>
              {category.skills.map((skill, index) => (
                <div className='p-1 pt-0'>
                  <SkillCircle skill={skill} key={skill.name}  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Skills