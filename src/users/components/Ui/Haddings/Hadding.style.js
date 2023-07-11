import { styled } from "styled-components";


export const H2 = styled.h2`
font-size: 28px;
font-weight: 300;
color: #fff;
`;

export const P = styled.p`
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`;

export const An = styled.a`
font-family: "Muli", sans-serif;
font-weight: 500;
font-size: 14px;
letter-spacing: 1px;
display: inline-block;
padding: 12px 32px;
border-radius: 4px;
transition: 0.5s;
line-height: 1;
margin: 10px;
color: #f03c02;
animation-delay: 0.8s;
border: 2px solid #f03c02;
&:hover{
    color: #fff;
    background:#f03c02;
}
`;