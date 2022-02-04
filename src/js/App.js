import React, {createContext, Fragment, useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Nav from "./components/Navigation/Nav"
import MenuBtn from "./components/Navigation/MenuBTN";
import MenuList from "./components/Navigation/MenuList";
import Routes from "./Routes";
import {
    ADD_USER,
    IS_ERROR,
    IS_ERROR_FALSE,
    IS_ERROR_TRUE,
    LOADING_EVENTS_DONE,
    LOGIN,
    LOGOUT,
    SET_EVENTS
} from "./types";
import {addUser, isErrorFalse, isErrorTrue, loadingEvents, loadingEventsDone, logIn} from "./redux/actions/actions";
import {userDetailsReducer} from "./redux/reducers/userDetailsReducer";
import {isAuthReducer} from "./redux/reducers/isAuthReducer";


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
    const [pos, setPos] = useState({posX: 0, posY: 0})
    // const [error, setError] = useState(false)
    // const [isLoadingEvents, setIsLoadingEvents] = useState(true)
    const {loading} = useSelector(state => state.IsLoadingEventsReducer)
    const {error, listEvents} = useSelector(state => state.numberOfSlideReducer)
    const {userDetails} = useSelector(state => state.userDetailsReducer)
    const {login} = useSelector(state => state.isAuthReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        isAuth()
        getEvents()
            .then(data => {
                setErrorFalse(dispatch)
                dispatch({type: SET_EVENTS, payload: data})
                isLoadingFalse(dispatch)
            })
            .catch((e) => {
                setErrorTrue(dispatch)
                isLoadingFalse(dispatch)
            })
    }, [login])

    const moveRound = (e) => {
        setPos({posX: e.clientX, posY: e.clientY})
    }

    const isAuth = () => {
        const token = localStorage.getItem('token')
        if (token) {
            fetch("http://localhost:8080/login", {
                method: 'post',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json;charset=utf-8',
                },
            })
                .then(data => data.json())
                .then(data => dispatch(addUser(data)))
                .then(() => dispatch(logIn()))
        }
    }

    // const isLoadingTrue = (dispatch) => {
    //     return dispatch(loadingEvents())
    // }

    const isLoadingFalse = (dispatch) => {
        return dispatch(loadingEventsDone())
    }

    const setErrorTrue = (dispatch) => {
        return dispatch(isErrorTrue())
    }

    const setErrorFalse = (dispatch) => {
        return dispatch(isErrorFalse())
    }
    const getEvents = () => {
        return fetch("http://localhost:8080/events/events")
            .then(data => data.json())
    }

    return (
        // <AuthContext.Provider
        //     value={{getPrincipal}}
        // >
        <HashRouter>
            <div onMouseMove={moveRound} className="App">
                {/*<MenuBtn/>*/}
                <div className="main_container">
                    {(error) ?
                        <Fragment>
                            <h1 className='text-error'>ERROR</h1>
                            <Routes/>
                        </Fragment>
                        :
                        <Fragment>
                            <Nav/>
                            <Routes/>
                        </Fragment>
                    }
                    {/*<Nav/>*/}
                    {/*<h1 className='text-error' >ERROR</h1>*/}
                    {/*<Routes/>*/}
                </div>
                {/*<MenuList/>*/}
            </div>
        </HashRouter>
        // </AuthContext.Provider>
    );
}

export default App;


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posX: 0,
//             posY: 0
//         }
//     }
//
//     moveRound = (e) => {
//         this.setState({
//             posX:e.clientX,
//             posY: e.clientY
//         })
//     }
//
//     render() {
//         return (
//             <AuthContext.Provider
//
//             >
//                 <HashRouter>
//                     <div onMouseMove={this.moveRound} className="App">
//                         <MenuBtn/>
//                         <div className="main_container">
//                             <Nav/>
//                             <Routes/>
//                         </div>
//                         <MenuList/>
//                     </div>
//                 </HashRouter>
//             </AuthContext.Provider>
//
//         );
//     }
// }
//
// export default App;


