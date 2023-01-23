import type { NextPage } from 'next'
import { Navbar, Footer } from '../sections';

// The homepage. Gets all of its components from other parts.
const Contact: NextPage = () => {
  return (
    <div className='bg-gray-500'>
        <Navbar />
        <div className='bg-gray-500 overflow-hidden w-screen h-screen flex justify-center'>
            <div className='text-lg text-white text-bold'>Work in Progress!</div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact
