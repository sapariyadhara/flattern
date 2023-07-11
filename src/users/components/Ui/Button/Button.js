import React from 'react';
import { ButtonC } from './CustomButton.style';

function Button({children}) {
    return (
       <ButtonC>
            {children}
       </ButtonC>
    );
}

export default Button;