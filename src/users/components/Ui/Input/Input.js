import React from 'react';
import {  ErrorText, InputText } from './Input.style';

function Input({className, ErrorT , errors , ...rest}) {
    return (
        <>
       <InputText  className="form-control" {...rest}>

       </InputText>
       <ErrorText ErrorT={ErrorT}>
            {ErrorT}
       </ErrorText>
       </>
    );
}

export default Input;