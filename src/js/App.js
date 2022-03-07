import React, {createContext, Fragment,  useEffect, useState} from 'react';
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Navigation from "./components/Navigation/Navigation"
import Routes from "./Routes";
import {SET_EVENTS} from "./types";
import {authUser} from "./redux/actions/userActions";
import {getEvents} from "./redux/actions/eventsActions";
// import {getEvents} from "./redux/actions/actions";
// import {
//     addUserAction,
//     authUser,
//     getEvents,
//     isErrorFalse,
//     isErrorTrue,
//     loadingEventsDone,
//     logIn
// } from "./redux/actions/actions";



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
    const {loading} = useSelector(state => state.IsLoadingEventsReducer)
    const {error, listEvents} = useSelector(state => state.numberOfSlideReducer)
    const {userDetails} = useSelector(state => state.userDetailsReducer)
    const {isAuth} = useSelector(state => state.isAuthReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authUser())
        dispatch(getEvents())
        // getEvents()
        //     .then(data => {
        //         setErrorFalse(dispatch)
        //         dispatch({type: SET_EVENTS, payload: data})
        //         isLoadingFalse(dispatch)
        //     })
        //     .catch((e) => {
        //         setErrorTrue(dispatch)
        //         isLoadingFalse(dispatch)
        //     })
    }, [])


    // const isAuthentication = () => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //         fetch("http://localhost:8080/login", {
    //             method: 'post',
    //             headers: {
    //                 'Authorization': token,
    //                 'Content-Type': 'application/json;charset=utf-8',
    //             },
    //         })
    //             .then(data => data.json())
    //             .then(data => dispatch(addUser(data)))
    //             .then(() => dispatch(logIn()))
    //     }
    // }

    // const isLoadingFalse = (dispatch) => {
    //     return dispatch(loadingEventsDone())
    // }
    //
    // const setErrorTrue = (dispatch) => {
    //     return dispatch(isErrorTrue())
    // }
    //
    // const setErrorFalse = (dispatch) => {
    //     return dispatch(isErrorFalse())
    // }
    // const getEvents = () => {
    //     return fetch("http://localhost:8080/events/events")
    //         .then(data => data.json())
    // }

    return (
        <HashRouter>
            <div className="App">
                <div className="main_container">
                    {/*{(error) ?*/}
                    {/*    <Fragment>*/}
                    {/*        <h1 className='text-error'>ERROR</h1>*/}
                    {/*        <Routes/>*/}
                    {/*    </Fragment>*/}
                    {/*    :*/}
                    {/*    <Fragment>*/}
                    {/*        <Navigation/>*/}
                    {/*        <Routes/>*/}
                    {/*    </Fragment>*/}
                    {/*}*/}

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


