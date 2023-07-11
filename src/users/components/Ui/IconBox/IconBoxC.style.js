import { styled } from "styled-components";


export const Box = styled.div`
padding: 50px 20px;
margin-top: 35px;
margin-bottom: 25px;
text-align: center;
border: 1px solid #ebe6e4;
height: 200px;
position: relative;
background: #faf9f8;
    &:hover i{
    color: #f03c02;
}
    &:hover a{
    color: #f03c02;
}
    &:hover div{
        border: 1px solid #f03c02;
        background: #fff;
    }
`;

export const IconD = styled.div`
position: absolute;
top: -36px;
left: calc(50% - 36px);
transition: 0.2s;
border-radius: 50%;
border: 6px solid #fff;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 72px;
height: 72px;
background: #f03c02;
}
`;

export const I = styled.i`
color: #fff;
font-size: 24px;
line-height: 0;
`;

export const H4 = styled.h4`
font-weight: 700;
margin-bottom: 15px;
font-size: 18px;
text-transform: uppercase;
`;

export const P = styled.p`
line-height: 24px;
font-size: 14px;
`;

export const A = styled.a`
color: #343a40;
`;