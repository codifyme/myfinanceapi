import React from 'react';
import HeroSection from '../../HeroSection';
import ScrollToTop from '../SignIn/ScrollToTop';
import { homeObjOne, homeObjTwo, homeObjThree} from './Data';

function Services() {
  return (
    <>
      
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <ScrollToTop/>
    </>
  );
}

export default Services;