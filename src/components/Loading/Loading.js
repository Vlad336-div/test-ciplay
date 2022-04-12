import React from 'react';
import {LoadingWrap} from "./styles";
import {useSelector} from "react-redux";

const Loading = () => {
    const {loading} = useSelector(state => state.app)

    return (
        <LoadingWrap visible={loading}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoadingWrap>
    );
};

export default Loading;