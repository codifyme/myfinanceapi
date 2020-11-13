import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne} from './Data'
import {homeObjTwo} from './Data'
import {homeObjThree} from './Data'
import {homeObjFour} from './Data'

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjFour} />
            
        </>
    )
}

export default Home
