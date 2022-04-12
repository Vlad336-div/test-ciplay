import React from 'react';
import {ErrorWrap} from "./styles";
import {ReactComponent as ErrorIcon} from "../../assets/images/error.svg";
import {useSelector} from "react-redux";

const Error = () => {
    const {error, errorMessage} = useSelector(state => state.messages)

    return (
        <ErrorWrap visible={error}>
            <ErrorIcon/>
            {errorMessage}
        </ErrorWrap>
    );
};

export default Error;