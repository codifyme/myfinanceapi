import React from 'react';
import HeroSection from '../../HeroSection';
import ScrollToTop from '../SignIn/ScrollToTop';
import { homeObjOne, homeObjFour, homeObjThree } from './Data';


function Products() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjOne} />
      <ScrollToTop/>
    </>
  );
}

export default Products;