import React from 'react';
import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN, LOGOUT} from "../../types";


const LoginForm = () => {
    const [auth, setAuth] = useState({login: '', password: ''});
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.loginReducer.login)

    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch({type: LOGIN})
        }
    }, [])

    let logout = () => {
        dispatch({type: LOGOUT})
        localStorage.removeItem('token')
    };

    const getValueInput = (e) => {
        e.preventDefault()
        // const {name, value} = e.target
        // // this.setState({
        // //     [name]: value
        // // })
        setLogin(value)
        setPassword(value)
    }

    const logIn = async (e) => {
        e.preventDefault()
        const base64decoder = btoa(auth.login + ':' + auth.password)
        console.log(`Basic ${base64decoder}`)

        await fetch("http://localhost:8080/login", {
            method: 'post',
            headers: {
                'Authorization': 'Basic ' + base64decoder,
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then(data => {
                console.log(data.status)
                    if (data.status == 200) {
                        dispatch({type: LOGIN})
                        localStorage.setItem('token', `Basic ${base64decoder}`)
                    } else {
                        dispatch({type: LOGOUT})
                    }
                })


        const user = localStorage.getItem('auth')
        console.log(user)
        console.log(isAuth)
    }


    return (
        <form className="registration_block login_panel">
            {
                (!isAuth)
                    ? <React.Fragment>
                        <span className="name_of_block">ACCOUNT</span>
                        <label htmlFor="login_email">Email</label>
                        <input id="login_email" onChange={e => setAuth({...auth, login: e.target.value})} value={auth.login}
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
                    : <button onClick={logout} id="btnLogin"
                              className="btn_form btn_login ">LOGOUT
                    </button>
            }
        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersReducer.users,
//         login: state.loginReducer.login
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
//             login: ""
//         }
//     }
//
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         const loginBtn = document.getElementById("btnLogin");
//         (this.props.login === false) ? loginBtn.innerText = "SIGN IN" : loginBtn.innerText = "SIGN OUT"
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
//         let login = {
//             login: this.state.email,
//             password: this.state.password
//         }
//         const base64decoder = btoa(login.login + ':' + login.password)
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
//     //     if (this.props.login === false && this.state.email !== "" && this.state.password !== "") {
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
//     //     } else if (this.props.login === true) {
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