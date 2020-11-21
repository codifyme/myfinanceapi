import React from 'react';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel,FormInput, Text, FormButton} from './RegisterElements';

const Register = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Don't have an account</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1> Register</FormH1>
                        <FormLabel htmlFor='for'>First Name</FormLabel>
                        <FormInput type='firstname' required/>

                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='lastname' required/>

                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>

                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>

                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput type='confirmpassword' required/>



                        <FormButton type='signup'>Sign Up</FormButton>
                        {/* <Text>Forgot password</Text> */}
                    </Form>

                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default Register;