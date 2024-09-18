import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Products from './components/Products';
import Pricing from './components/Pricing';


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Products />
      <Pricing />
    </>
  )
}

export default App;