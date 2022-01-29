import React, {createContext, useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"; // хуки позволяющий дипатчить акшины и получать state

//----------------------------
import Nav from "./components/Navigation/Nav"
import MenuBtn from "./components/Navigation/MenuBTN";
import MenuList from "./components/Navigation/MenuList";
import Routes from "./Routes";
import {ADD_USER, LOGIN, LOGOUT} from "./types";


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
    getEvents: () => {
        return fetch("http://localhost:8080/events/events")
            .then(data => data.json())
    }
});

const App = () => {
    const [pos, setPos] = useState({posX: 0, posY: 0})
    const [events, setEvents] = useState([])

    const moveRound = (e) => {
        setPos({posX: e.clientX, posY: e.clientY})
    }

    // const getPrincipal = (base64decoder) => {
    //     return fetch("http://localhost:8080/login", {
    //         method: 'post',
    //         headers: {
    //             'Authorization': base64decoder,
    //             'Content-Type': 'application/json;charset=utf-8',
    //         },
    //     })
    // }

    // const getEvents = () => {
    //     return fetch("http://localhost:8080/events/events")
    //         .then(data => data.json())
    //         .then(data => console.log(data))
    // }

    return (
        // <AuthContext.Provider
        //     value={{getPrincipal}}
        // >
            <HashRouter>
                <div onMouseMove={moveRound} className="App">
                    <MenuBtn/>
                    <div className="main_container">
                        <Nav/>
                        <Routes/>
                    </div>
                    <MenuList/>
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


