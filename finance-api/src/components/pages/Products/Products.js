import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour, homeObjThree } from './Data';


function Products() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;