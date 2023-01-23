import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Hero, Recent, Skills, Contact, Footer } from '../sections';

// The homepage. Gets all of its components from other parts.
const Home: NextPage = () => {
  return (
    <div className='bg-gray-500 overflow-hidden'>
      <Navbar />
      <Hero />
      <Recent />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home
