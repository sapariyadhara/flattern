import React from 'react';
import { ImageCustom } from './Images.style';

function Image({ className,...rest}) {
    return (
        <ImageCustom    {...rest}/>
    );
}

export default Image;