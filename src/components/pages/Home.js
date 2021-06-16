import React from 'react';
import AboutUs from '../home/AboutUs';
import HeroSlider from '../home/HeroSlider';
import Info from '../home/Info';
import Intro from '../home/Intro';
import Strengths from '../home/Strengths';
import Footer from '../common/Footer';
const Home = () => {
  return (
    <div className='home-page'>
      <HeroSlider />
      <Intro />
      <AboutUs />
      <Strengths />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
