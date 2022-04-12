import React from 'react';
import {ButtonWrap} from "./styles";

const Button = (props) => {
    return (
        <ButtonWrap type="submit" value={props.children}/>
    );
};

export default Button;