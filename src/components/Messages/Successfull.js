import React from 'react';
import {SuccessfullWrap} from "./styles";
import {useSelector} from "react-redux";
import {ReactComponent as SuccessIcon} from "../../assets/images/successfull.svg";

const Successfull = () => {
    const {success, successMessage} = useSelector(state => state.messages)

    return (
        <SuccessfullWrap visible={success}>
            <SuccessIcon/>
            {successMessage}
        </SuccessfullWrap>
    );
};

export default Successfull;