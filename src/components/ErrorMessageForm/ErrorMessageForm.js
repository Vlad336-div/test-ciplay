import React from 'react';
import {ErrorWrap} from "./styles"

const ErrorMessageForm = ({text}) => {
    return (
        <ErrorWrap>{text}</ErrorWrap>
    );
};

export default ErrorMessageForm;