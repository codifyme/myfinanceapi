// import React from 'react';
// import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel,FormInput, FormButton} from './RegisterElements';
// const Register = () => {
//     return (
//         <>
//         <Container>
//             <FormWrap>
//                 <Icon to="/"></Icon>
//                 <FormContent >
//                     <Form action="#">
//                         <FormH1> Account Registration</FormH1>
//                         <FormLabel htmlFor='for'>First Name</FormLabel>
//                         <FormInput type='firstname' required/>

//                         <FormLabel htmlFor='for'>Last Name</FormLabel>
//                         <FormInput type='lastname' required/>

//                         <FormLabel htmlFor='for'>Email</FormLabel>
//                         <FormInput type='email' required/>

//                         <FormLabel htmlFor='for'>Password</FormLabel>
//                         <FormInput type='password' required/>

//                         <FormLabel htmlFor='for'>Confirm Password</FormLabel>
//                         <FormInput type='confirmpassword' required/>

//                         <FormButton type='signup'>Register</FormButton>
//                         {/* <Text>Forgot password</Text> */}
//                     </Form>

//                 </FormContent>
//             </FormWrap>
//         </Container>
//         </>
//     )
// }
// export default Register;

import React, {useRef} from 'react';
// import React, {useRef, useState} from 'react';
// import {useAuth} from '../../contexts/AuthContest'
// import {Alert} from 'react-bootstrap'
// import {Link} from 'react-router-dom';
import {Container, FormWrap, Form, FormContent, FormGroup, FormH1, FormLabel,FormInput, FormButton, Text} from './RegisterElements';

export default function Register() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const fullnameRef=useRef()

    // const {register}=useAuth()
    // const [error, setError]=useState('')
    // const [loading, setLoading]=useState(false)

    // async function handleSubmit(e){
    //     e.preventDefault()
    //     if(passwordRef.current.value !==passwordConfirmRef.current.value){
    //         return setError('Passwords do not match')
    //     }

    //     try{
    //         setError("")
    //         setLoading(true)
    //         await register(emailRef.current.value, passwordRef.current.value)
    //     }catch{
    //     setError('Failed to create an account')
    //     }
    //     setLoading(false)
    // }
    return(
                <>
                <Container>
                    <FormWrap>
                        <FormContent>
                        <Form action="#">
                        <FormH1 className="text-center mb-4">Create your account</FormH1>
                        
                        {/* {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}></Form> */}
                            <FormGroup id="email">
                                <FormLabel>Full Name</FormLabel>
                                <FormInput type="fullname" ref={fullnameRef} required />
                            </FormGroup>
                            <FormGroup id="email">
                                <FormLabel>Email</FormLabel>
                                <FormInput type="email" ref={emailRef} required />
                            </FormGroup>
                            <FormGroup id="password">
                                <FormLabel>Password</FormLabel>
                                <FormInput type="password" ref={passwordRef} required />
                            </FormGroup>
                            <FormGroup id="password-confirm">
                                <FormLabel>Password Confirmation</FormLabel>
                                <FormInput type="password" ref={passwordConfirmRef} required />
                            </FormGroup>
                            <FormButton className="w-100" type="submit">Create Account</FormButton>
                            {/* <FormButton disable={loading} className="w-100" type="submit">Create Account</FormButton> */}
                        </Form>
                        </FormContent>
                        <Text class="bold center">Already have an account?
                        <a id="createAccount" class="center block bold underline " href="/signin">
                             Log in
                        </a></Text>
                    </FormWrap>
                    
                    {/* <div className="larco">
                        <div class="sm-flex flex-justify-center flex-center">
                            <div class="bold-center sm-px6">Already have an account?</div>
                            <a id="signin" class="sm-px1 center block bold underline" href="#/SignIn">Sign in</a>
                        </div>
                    </div> */}
                </Container>
                </>
            )
        }
    

    //         return(
    //         <>
    //         <Container>
    //             <FormWrap>
    //                 <FormContent>
    //                 <Form action="#">
    //                 <FormH1 className="text-center mb-4">Sign Up</FormH1>
                    
    //                     <FormGroup id="email">
    //                         <FormLabel>Email</FormLabel>
    //                         <FormInput type="email" ref={emailRef} required />
    //                     </FormGroup>
    //                     <FormGroup id="password">
    //                         <FormLabel>Password</FormLabel>
    //                         <FormInput type="password" ref={passwordRef} required />
    //                     </FormGroup>
    //                     <FormGroup id="password-confirm">
    //                         <FormLabel>Password Confirmation</FormLabel>
    //                         <FormInput type="password" ref={passwordConfirmRef} required />
    //                     </FormGroup>
    //                     <FormButton className="w-100" type="submit">Sign Up</FormButton>
    //                 </Form>
    //                 </FormContent>
    //             </FormWrap>
    //         </Container>
    //             <div className="w-100 text-center mt-2">
    //                 Already have an account? Log In
    //             </div>
    
    //         </>
    //     )
    // }