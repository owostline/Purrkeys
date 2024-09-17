import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Products from './components/Products';


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Products />
    </>
  )
}

export default App;