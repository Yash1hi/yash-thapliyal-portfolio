import React, { useState } from 'react'
import Head from 'next/head';
import type { NextPage } from 'next'
import { BackgroundHearts } from '../../components'

const text = [
  {
    text: 'Hi Tulasi!',
    style: 'text-white font-itim text-[8rem] z-10 text-center',
  },
  {
    text: 'I wanted to make you something to show you how much I appreciate and love you',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'Hover over the hearts, they expand!',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'Anyways,',
    style: 'text-white font-itim text-[8rem] z-10 text-center',
  },
  {
    text: 'Tulasi, will you be my valentine?',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'Did you mean to say yes?',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'I really think you meant to say yes.',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'Tulasiii, say yes please.',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'Do you love me Tulasi?',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'This is your last chance baby, say yes?',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'Thank you, finally! Now enjoy the rest of the day baby.',
    style: 'text-white font-itim text-[3rem] z-10 text-center',
  },
  {
    text: 'Error',
    style: '',
  },
]

const tulasi : NextPage = () => {
  const [page, setPage] = useState(0);
  const [showText, setShowText] = useState(true);
  const [saidYes, setSaidYes] = useState(false);
  
  const nextPage = () => {
    if (page == 10) {
      window.location.href =' https://www.youtube.com/watch?v=hkJdYtU565A'
      return false
    }
    if (page < text.length) {
      setPage(page+1)
    }
    
  }

  const decisionYes = () => {
    setPage(10)
    setSaidYes(true)
  }

  const decisionNo = () => {
    if (page < 9) {
      setPage(page + 1)
    }
    else {
      setPage(4)
    }
  }

  const changeShow = () => {
    if (page == 11) {
      return false
    }
    setShowText(!showText)
  }

  return (
    <div className='bg-[#FF7377] w-screen h-screen relative'>
        <Head>
            <title>Tulasi Valentine</title>
            <link rel="icon" href="/Heart.svg" />
        </Head>
        <BackgroundHearts />
        <button 
          onClick={changeShow} 
          className='absolute top-2 right-2 bg-white hover:bg-gray-100 text-[#BF565A] text-xs font-semibold py-1 px-3 border border-[#BF565A] rounded shadow z-15'
        > 
          { showText ? "Hide Text" : "Show Text" }
        </button>
        {showText ? (        
          <div className='flex justify-center items-center w-screen h-screen flex-col'>
            <p className={ text[page].style }>{ text[page].text }</p>
            {(!saidYes && page > 3) ? (
              <>
                <div className='flex flex-row gap-3'>
                  <button 
                    onClick={decisionYes} 
                    className='bg-white hover:bg-gray-100 text-[#BF565A] font-semibold py-2 px-4 rounded shadow'
                  > 
                    Yes! 
                  </button>
                  <button 
                    onClick={decisionNo} 
                    className='bg-white hover:bg-gray-100 text-[#BF565A] font-semibold py-2 px-4 rounded shadow'
                  > 
                    No 😞 
                  </button>
                </div>
              </>
            ) : (
              <>
              <button 
                onClick={nextPage} 
                className='bg-white hover:bg-gray-100 text-[#BF565A] font-semibold py-2 px-4 rounded shadow'
              > 
                Next Page 
              </button>
              </>
            )}
          </div>
        )   
        : (
          <></>
        )}
    </div>
  )
}

export default tulasi