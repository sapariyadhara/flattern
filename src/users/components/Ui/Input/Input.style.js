import { styled } from "styled-components";


export const InputText = styled.input`
    border : ${props => props.ErrorT !== '' ? '1px solid red' : '1px solid grey'};

`;

export const ErrorText = styled.span`
    display : ${props => props.ErrorT !== '' ? 'inline-block' : 'none'};
    color : red;
`;