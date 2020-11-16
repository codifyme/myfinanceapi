import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour,homeObjFive} from './Data';
// import Pricing from '../Pricing/Pricing'

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjFour} />
        <HeroSection {...homeObjTwo} />
        {/* <Pricing/> */}
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjFive} />
            
        </>
    )
}

export default Home
