import React from 'react';
import HeroSection from '../../HeroSection';
import ScrollToTop from '../SignIn/ScrollToTop';
import { homeObjFour, homeObjThree } from './Data';


function Products() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <ScrollToTop/>
    </>
  );
}

export default Products;