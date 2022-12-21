import React from 'react'
// const imageSize = '[12vh]'
// const finalImageSize = '[13vh]'

const SkillCircle = ({ skill }) => {
  
  return (
    <div className={`flex justify-center items-center group w-[20vh] h-[20vh] hover:w-[24vh] hover:h-[24vh] overflow-hidden rounded-[100%] bg-gray-700 relative text-center transition-all duration-500 transform  relative`}>
        <div className={`flex justify-center items-center w-full h-full bg-gray-700 transition-all duration-500 transform group-hover:brightness-[0.2]`}>
          <img 
              src={skill.image}
              alt={skill.name}
              className={`max-w-full max-h-full bg-gray-700 p-5`}
          />  
        </div>
        <div className={`opacity-0 transition-all duration-500 transform group-hover:opacity-100 absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-default`}>
          <p className='text-white font-semibold text-sm'>{skill.name}</p>
          {/* <p className='text-white font-light text-sm'>{skill.level}</p> */}
        </div>
  
    </div> 
  )
}

export default SkillCircle