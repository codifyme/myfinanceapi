import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height:692px;
    position:fixed;
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

export const FormWrap=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:400px){
        height:100%;

    }
`;
 export const Icon=styled(Link)` 
    margin-left:32px;
    margin-top:32px;
    text-decoration:none;
    color:#fff;
    font-weight:700;
    font-size:32px;

    @media screen and (max-width:480px){
        margin-left:16px;
        margin-top:8px;
    }
 `;

 export const FormContent = styled.div` 
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:480px){
        padding:10px;
    }
 `;

 export const Form=styled.form`
    background:#010101;
    max-width:400px;
    height:auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding:80px 32px;
    border-radius:4px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width:400px){
        padding:32px 32px;
    }
`;
export const FormH1=styled.form`
    margin-left:32px;
    margin-top:32px;
    margin-bottom:32px;
    text-decoration:none;
    font-weight:100;
    font-size:25px;
    text-align:center;
    color:#fff;
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
`
export const FormButton=styled.button` 
    background:#01bf71;
    padding:16px 0;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:20px;
    cursor:pointer;
`;
export const Text=styled.span`
    text-align:center;
    margin-top:24px;
    color:yellow;
    font-size:16px;
    font-weight:600;
    margin-bottom:24px;
`;
export const TextPass=styled.div`
    text-align:center;
    margin-top:24px;
    /* margin-bottom:5px; */
    color:lightgreen;
    font-size:14px;
    font-weight:500;
    vertical-align:middle;
`;
// export const TextA=styled.a`
//     text-align:center;
//     margin-top:14px;
//     color:orange;
//     font-size:14px;
//     align-items:center;
//     font-weight:700;
//     margin-bottom:14px;
// `;


// export const TextReg=styled(Link)` 
// /* margin-left:24px; */
// margin-top:24px;
// text-decoration:none;
// color:lightgreen;
// /* font-weight:700; */
// /* font-size:32px; */
// flex:auto;

// @media screen and (max-width:400px){
//     margin-left:16px;
//     margin-top:8px;
//     align-items:center;
// }
// `;
