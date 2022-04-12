import React from 'react';
import {InputComponent} from "./styles"

const Input = React.forwardRef((props, ref) => {
    return (
        <InputComponent ref={ref} {...props}/>
    );
});

export default Input;