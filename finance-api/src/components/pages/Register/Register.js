import React from 'react';
import ScrollToTop from '../SignIn/ScrollToTop';
import Register from './../Register';
// import HeroSection from '../../HeroSection';
// import { AuthProvider } from '../../contexts/AuthContest';
// import "bootstrap/dist/css/bootstrap.min.css"
// import {Container} from 'react-bootstrap';
// import SignUp from '../SignUp/SignUp';


function RegisterPage() {
    return (
        <>
        {/* <AuthProvider> */}
            
            <Register/>
            <ScrollToTop/>
            {/* <HeroSection/> */}
        {/* </AuthProvider> */}
        </>
    );
};

export default RegisterPage;