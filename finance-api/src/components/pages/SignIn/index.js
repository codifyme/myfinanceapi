import React from 'react';
// import {Link} from 'react-router-dom';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel,FormInput, Text, TextPass, FormButton} from './SigninElements';

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/fath">Sign In</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1> Welcome Back</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <TextPass>Forgot your password?</TextPass>
                    </Form>

                </FormContent>
                <Text class="bold center">Don't have an account?
                <a id="createAccount" class="center block bold underline " href="/register">
                             Create an account
                    </a></Text>
            </FormWrap>
            {/* <Text>Don't have an account?</Text>
                    <Link to='/register' className='nav-links'>
                            Create an account
                    </Link> */}
                    
        </Container>
            
        </>
    )
}

export default SignIn;

// to='/register' className='link'>
