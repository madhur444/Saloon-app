import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Tittle from '../component/Tittle/Tittle'
import About from './about/About'
import Footer from './footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Tittle/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home