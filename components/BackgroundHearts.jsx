import React from 'react'

const BackgroundHearts = () => {
  return (
    <div>
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[100px] hover:w-[130px] top-10 right-5 rotate-[30deg] hover:rotate-[10deg] transition-all duration-500 transform`}
        /> 
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[150px] hover:w-[180px] top-40 left-5 rotate-[-30deg] hover:rotate-[-10deg] transition-all duration-500 transform`}
        /> 
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[70px] hover:w-[80px] bottom-20 left-36 rotate-[-10deg] hover:rotate-[10deg] transition-all duration-500 transform`}
        /> 
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[70px] hover:w-[90px] bottom-20 right-20 rotate-[-30deg] hover:rotate-[0deg] transition-all duration-500 transform`}
        /> 
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[120px] hover:w-[135px] bottom-20 left-1/3 rotate-[10deg] hover:rotate-[0deg] transition-all duration-500 transform`}
        /> 
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[110px] hover:w-[120px] top-32 right-72 rotate-[-20deg] hover:rotate-[0deg] transition-all duration-500 transform`}
        /> 
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[90px] hover:w-[110px] bottom-32 right-[30rem] rotate-[75deg] hover:rotate-[45deg] transition-all duration-500 transform`}
        /> 
        <img 
            src="/heart.svg" 
            alt="heart" 
            className={`absolute w-[120px] hover:w-[135px] top-20 left-1/3 rotate-[10deg] hover:rotate-[0deg] transition-all duration-500 transform`}
        /> 
    </div>
  )
}

export default BackgroundHearts