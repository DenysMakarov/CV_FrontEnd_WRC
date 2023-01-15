import React, {createContext, Fragment,  useEffect, useState} from 'react';
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Navigation from "./cmps/Navigation/Navigation"
import Routes from "./routes/Routes";
import {authUser} from "./store/actions/userActions";
import {getEvents} from "./store/actions/eventsActions";

export const AuthContext = createContext({
    getPrincipal: (base64decoder) => {
        return fetch("http://localhost:8080/login", {
            method: 'post',
            headers: {
                'Authorization': base64decoder,
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
    },
});

const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authUser())
        dispatch(getEvents())
    }, [])

    return (
        <HashRouter>
            <div className="App">
                <div className="main_container">
                        <Fragment>
                            <Navigation/>
                            <Routes/>
                        </Fragment>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;


