import React from 'react'
import momemnt from 'moment'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
    //   <div className='relative overflow-hidden shadow-md pb-80 mb-3'>
        // <img
        //   src={ project.image } 
        //   alt={ project.title }
        //   className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        // />
    //   </div>
  return (
    <div className='container bg-gray-600 shadow-lg rounded-lg pb-1 mb-3 min-h-full max-h-full w-full overflow-hidden'>
        <a href={ project.link } target="_blank" rel="noopener noreferrer">
            <img
                src={ project.image } 
                alt={ project.title }
                className='object-top h-80 w-full object-cover rounded-t-lg shadow-lg transition duration-500 transform hover:brightness-[0.25]'
            />
        </a>
        <div className='flex flex-col text-left justify-start pt-3 px-5 text-gray-300'>
            <div className='h-8 w-full overflow-hidden truncate ...'>
                <a href={project.link} className='cursor:pointer text-lg font-semibold ' target="_blank" rel="noopener noreferrer">
                    {project.title}
                </a>
            </div>
            <p className='text-sm leading-tight'>
                {project.excerpt}
            </p>     
        </div>
        <div className='flex flex-row gap-2 px-5 pt-2'>
            {project.tags.map((tag, index) => (
                <div className='text-xs font-semibold text-gray-600 px-2 bg-gray-300 rounded-full py-1'>
                    {tag}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectCard