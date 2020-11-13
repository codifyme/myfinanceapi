import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjectOne} from './Data'

function Home() {
    return (
        <>
        <HeroSection {...homeObjectOne} />
            
        </>
    )
}

export default Home
