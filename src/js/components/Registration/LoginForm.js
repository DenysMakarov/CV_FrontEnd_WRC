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

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUserDetails(token)
        }
    }, [])


    useEffect(() => {
        console.log(isAuth)
        console.log(userDetails)
    }, [userDetails])

    let logout = () => {
        dispatch({type: LOGOUT});
        dispatch({type: REMOVE_USER})
        localStorage.removeItem('token');
    };

    const animationTextLoginInform = (color) => {
        const loginInfoBlock = document.getElementById("logInform");
        loginInfoBlock.style.animationName = "none";
        setTimeout(() => {
            loginInfoBlock.style.animationName = "login_inform_appear";
            loginInfoBlock.style.color = color;
            login_inform_text.innerText = 'Something was wrong. Try again later'
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
                        <label htmlFor="login_email">Email</label>
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

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersReducer.users,
//         isAuth: state.isAuthReducer.isAuth
//     }
// }
//
// const mapDispatchToProps = {
//     logIn,
//     logOut
// }
//
//
// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             email: "",
//             password: "",
//             isAuth: ""
//         }
//     }
//
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         const loginBtn = document.getElementById("btnLogin");
//         (this.props.isAuth === false) ? loginBtn.innerText = "SIGN IN" : loginBtn.innerText = "SIGN OUT"
//     }
//
//     animationTextLoginInform = (color) => {
//         const loginInfoBlock = document.getElementById("logInform")
//         loginInfoBlock.style.animationName = "none"
//         setTimeout(() => {
//             loginInfoBlock.style.animationName = "login_inform_appear"
//             loginInfoBlock.style.color = color
//         }, 0)
//     }
//
//     getValueInput = (e) => {
//         e.preventDefault()
//         const {name, value} = e.target
//         this.setState({
//             [name]: value
//         })
//     }
//
//     loginBack = async () => {
//         let isAuth = {
//             isAuth: this.state.email,
//             password: this.state.password
//         }
//         const base64decoder = btoa(isAuth.isAuth + ':' + isAuth.password)
//         console.log(`Basic ${base64decoder}`)
//
//         fetch("http://localhost:8080/login", {
//             method: 'post',
//             headers: {
//                 // 'Access-Control-Allow-Origin':'*',
//                 'Authorization': 'Basic ' + base64decoder,
//                 'Content-Type': 'application/json;charset=utf-8',
//             },
//         })
//             .then(data => data.json())
//             .then(data => localStorage.setItem('auth', data))
//
//         const user = localStorage.getItem('auth')
//         console.log(user)
//     }
//
//     logIn = (e) => {
//         e.preventDefault()
//         this.loginBack()
//
//     }
//
//     // logIn = (e) => {
//     //     e.preventDefault()
//     //     const {users} = this.props
//     //     const loginInformText = document.getElementById("login_inform_text")
//     //
//     //     if (this.props.isAuth === false && this.state.email !== "" && this.state.password !== "") {
//     //
//     //         // check email and password in db
//     //         for (let i = 0; i < users.length; i++) {
//     //             if (users[i].email === this.state.email && users[i].newPassword === this.state.password) {
//     //                 console.log(users[i].name)
//     //                 // add to local storage
//     //                 let setPerson = {
//     //                     name: users[i].name,
//     //                     email: users[i].email,
//     //                     password: users[i].newPassword,
//     //                 }
//     //                 localStorage.user = JSON.stringify(setPerson)
//     //                 this.props.logIn()
//     //                 this.setState({
//     //                     email: "",
//     //                     password: ""
//     //                 })
//     //
//     //                 loginInformText.innerText = `${users[i].name}, Thank you for visited us!`
//     //                 this.animationTextLoginInform("green")
//     //
//     //                 Array.from(document.getElementsByClassName("input_login")).map(el => el.style.border = "2px solid transparent")
//     //                 break
//     //             } else {
//     //                 this.animationTextLoginInform("red")
//     //
//     //                 loginInformText.innerText = "There is no account with this email. Please try again"
//     //                 Array.from(document.getElementsByClassName("input_login")).map(el => el.style.border = "2px solid red")
//     //             }
//     //         }
//     //     } else if (this.props.isAuth === true) {
//     //         this.animationTextLoginInform("white")
//     //
//     //         this.props.logOut()
//     //         localStorage.removeItem("user")
//     //         loginInformText.innerText = "By! See you soon!"
//     //         setTimeout(() => {
//     //             loginInformText.innerText = "You can sign in your personal account if you have"
//     //         }, 3000)
//     //     }
//     // }
//
//     render() {
//
//         return (
//             <form  className="registration_block login_panel">
//                 <span className="name_of_block">ACCOUNT</span>
//                 <label htmlFor="login_email">Email</label>
//                 <input id="login_email" onChange={this.getValueInput} value={this.state.email}
//                        className="input_panel input_login" name="email" type="text"/>
//                 <label htmlFor="login_password">Password</label>
//                 <input id="login_password" onChange={this.getValueInput} value={this.state.password}
//                        className="input_panel input_login" name="password" type="text"/>
//                 <div id="logInform" className="logInform"><h5 id="login_inform_text">You can sign in your personal
//                     account if you have</h5></div>
//                 <button onClick={this.logIn} id="btnLogin" type="submit"
//                         className="btn_form btn_login ">SIGN IN
//                 </button>
//             </form>
//         )
//     }
// }

LoginForm.propTypes = {
    users: PropTypes.array,
    login: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func

}

export default LoginForm;

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)