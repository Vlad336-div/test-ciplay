import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./router";
import Menu from "./components/Menu/Menu";
import Error from "./components/Messages/Error";
import Successfull from "./components/Messages/Successfull";
import Loading from "./components/Loading/Loading"
import {useDispatch, useSelector} from "react-redux";
import {autoLogin, loadingUsers} from "./store/actions";

const App = () => {
    const {users, loggined} = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        if (users.length) localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    useEffect(() => {
        const usersLocal = JSON.parse(localStorage.getItem('users'))
        if (Array.isArray(usersLocal)) dispatch(loadingUsers(usersLocal))
        const loggined = JSON.parse(localStorage.getItem('loggined'))
        if (loggined) dispatch(autoLogin({loggined, activeUser: JSON.parse(localStorage.getItem('activeUser'))}))
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Loading/>
                <Menu/>
                <Router loggined={loggined}/>
                <Error/>
                <Successfull/>
            </BrowserRouter>
        </div>
    );
};

export default App;
