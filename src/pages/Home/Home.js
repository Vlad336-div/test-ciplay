import React from 'react';
import {HomeWrap} from "./styles";
import {useSelector} from "react-redux";

const Home = () => {
    const {activeUser, loggined} = useSelector(state => state.app)

    return (
        <HomeWrap>
            {loggined ? <p>Hello, {activeUser.email}</p> : <p>Please login</p>}
        </HomeWrap>
    );
};

export default Home;