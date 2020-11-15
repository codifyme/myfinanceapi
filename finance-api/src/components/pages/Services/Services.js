import React from 'react';
import HeroSection from '../../HeroSection';
// import { homeObjThree } from '../SIgnUp/Data';
import { homeObjOne, homeObjTwo, homeObjThree} from './Data';


function Services() {
  return (
    <>
      
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;