import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Products />
      <Pricing />
      <Testimonials />
    </>
  )
}

export default App;