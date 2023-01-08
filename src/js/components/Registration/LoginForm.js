import React, {useContext} from 'react';
import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {ADD_USER, LOGIN, LOGOUT, REMOVE_USER} from "../../types";
import {AuthContext} from "../../App";


const LoginForm = () => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({login: '', password: ''});
    const {isAuth} = useSelector(state => state.isAuthReducer)
    const {userDetails} = useSelector(state => state.userDetailsReducer)
    const {getPrincipal} = useContext(AuthContext);


    let logout = () => {
        dispatch({type: LOGOUT});
        dispatch({type: REMOVE_USER})
        localStorage.removeItem('token');
    };

    const animationTextLoginInform = (color) => {
        /*
        * TO DO AS NEED TO REACT without id
        * */
        const loginInfoBlock = document.getElementById("logInform");
        loginInfoBlock.style.animationName = "none";
        setTimeout(() => {
            loginInfoBlock.style.animationName = "login_inform_appear";
            loginInfoBlock.style.color = color;
            // login_inform_text.innerText = 'Something was wrong. Try again later'
        }, 10)
    }

    const logIn = (e) => {
        e.preventDefault()
        const token = 'Basic ' + btoa(auth.login + ':' + auth.password)
        return getUserDetails(token)
    }

    const getUserDetails = (base64decoder) => {
        getPrincipal(base64decoder)
            .then(data => {
                if (data.status < 200 || data.status > 299) {
                    dispatch({type: LOGOUT});
                    animationTextLoginInform('red');
                    return;
                }
                dispatch({type: LOGIN})
                localStorage.setItem('token', `${base64decoder}`)
                return data.json()
            })
            .then((data) => dispatch({type: ADD_USER, payload: Object.assign({}, {...data})}))
            .catch(e => e.message)
    }

    return (
        <form className="registration_block login_panel">
            {
                (!isAuth)
                    ?
                    <React.Fragment>
                        <span className="name_of_block">ACCOUNT</span>
                        <label htmlFor="login_email">Login</label>
                        <input id="login_email" onChange={e => setAuth({...auth, login: e.target.value})}
                               value={auth.login}
                               className="input_panel input_login" name="email" type="text"/>
                        <label htmlFor="login_password">Password</label>
                        <input id="login_password" onChange={e => setAuth({...auth, password: e.target.value})}
                               value={auth.password}
                               className="input_panel input_login" name="password" type="text"/>
                        <div id="logInform" className="logInform">
                            <h5 id="login_inform_text">You can sign in your personal account if you have</h5>
                        </div>
                        <button onClick={logIn} id="btnLogin" type="submit"
                                className="btn_form btn_login ">LOGIN
                        </button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <h1>{userDetails.username}</h1>
                        <p>{userDetails.roles}</p>
                        <p>{userDetails.email}</p>
                        <button onClick={logout} id="btnLogin"
                                className="btn_form btn_login ">LOGOUT
                        </button>
                    </React.Fragment>

            }
        </form>
    )
}

LoginForm.propTypes = {
    users: PropTypes.array,
    login: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func

}

export default LoginForm;
