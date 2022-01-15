import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"; // хуки позволяющий дипатчить акшины и получать state

//----------------------------
import Nav from "./components/Navigation/Nav"
import MenuBtn from "./components/Navigation/MenuBTN";
import MenuList from "./components/Navigation/MenuList";
import Routes from "./Routes";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posX: 0,
            posY: 0
        }
    }

    moveRound = (e) => {
        this.setState({
            posX:e.clientX,
            posY: e.clientY
        })
    }

    render() {
        return (
            <HashRouter>
                <div onMouseMove={this.moveRound} className="App">
                    <MenuBtn/>
                    <div className="main_container">
                        <Nav/>
                        <Routes/>
                    </div>
                    <MenuList/>
                </div>
           </HashRouter>
        );
    }
}

export default App;


