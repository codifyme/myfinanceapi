import styled from 'styled-components';
// import {Link} from 'react-router-dom';

export const Card = styled.div`
    min-height:692px;
    /* position:fixed; */
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
    background:linear-gradient(
        108deg,
        rgba(1,147,86,1)0%,
        rgba(10,201,122,1)100%
    );
`;
export const CardBody=styled.div`
    height:100%;
    /* display:flex; */
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:400px){
        height:80%;

    }
`;
export const Form = styled.form`
background:#010101;
max-width:400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:70px 32px;
border-radius:4px;
box-shadow:0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width:400px){
    padding:32px 32px;
}
`;
export const Button=styled.button` 
    background:#01bf71;
    padding:16px 0;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:20px;
    cursor:pointer;
`;
export const h2 =styled.form`
    margin-left:32px;
    margin-top:32px;
    margin-bottom:32px;
    text-decoration:none;
    font-weight:100;
    font-size:25px;
    text-align:center;
    color:#fff;
`;
export const FormGroup=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:400px){
        height:80%;

    }
`;
export const FormLabel=styled.label` 
    margin-bottom:8px;
    font-size:14px;
    color:#fff;
`;
export const FormInput=styled.input` 
    padding:16px 16px;
    margin-bottom:32px;
    border:none;
    border-radius:4px;
`;
export const Text=styled.span`
    text-align:center;
    margin-top:24px;
    color:yellow;
    font-size:14px;
    font-weight:600;
    margin-bottom:24px;
`;