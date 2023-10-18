import React, {useState} from 'react'

// Import Components
import Hero from '../../components/Hero';
import About from '../../components/About';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import CtaSection from '../../components/CtaSection';

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <CtaSection />
    </div>
  )
}

export default Home
