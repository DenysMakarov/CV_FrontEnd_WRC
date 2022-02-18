import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {isEmail, isLowerWord, isNumber, isUpperWord} from "./validationForm";
import {setUsers, validForm, inValidForm} from "../../redux/actions/actions";
import MyInput from "./MyInput";
import {test} from "npm/lib/utils/module-name";
import CongratulationsBlock from "./CongratulationsBlock";


const RegistrationForm = () => {
    const [user, setUser] = useState(
        {
            login: {name: 'login', text: 'Login', textError: '', valueInput: ''},
            username: {name: 'username', text: 'Name', textError: '', valueInput: ''},
            email: {name: 'email', text: 'Email', textError: '', valueInput: ''},
            password: {name: 'password', text: 'Password', textError: '', valueInput: ''},
            repeatPassword: {name: 'repeatPassword', text: 'Repeat password', textError: '', valueInput: ''},
            phoneNumber: {name: 'phoneNumber', text: 'Phone number', textError: '', valueInput: ''},
            country: {name: 'country', text: 'Country', textError: '', valueInput: ''},
            city: {name: 'city', text: 'City', textError: '', valueInput: ''},
            street: {name: 'street', text: 'Street', textError: '', valueInput: ''},
        }
    )
    const [animation, setAnimation] = useState('clear')
    const [styleBlockCongratulations, setStyleBlockCongratulations] = useState('')
    const [textDesc, setTextDesc] = useState('')

    const fieldForm = []
    for (let key in user) {
        fieldForm.push(key)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: {...user[e.target.name], valueInput: e.target.value}
        })
    }


    const postUser = (user) => {
        fetch("http://localhost:8080/registration", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(data => {
                if (data.status >= 200 && data.status <= 299) {
                    setTextDesc(`Congratulations! Now you can enter in your account.`)
                    setStyleBlockCongratulations('congratulations-block-appear')
                } else {
                    setTextDesc(`Sorry! Probably account has already exist.`)
                    setStyleBlockCongratulations('congratulations-block-appear')
                }
            })
    }

    const hideCongratulationsBlock = () => {
        setStyleBlockCongratulations('congratulations-block-hide')
    }

    const createUser = (e) => {
        e.preventDefault()

        const errors = {
            loginError: !(user.login.valueInput) ? 'login error' : '',
            userError: !(user.username.valueInput) ? 'name error' : '',
            emailError: !(user.email.valueInput) ? 'email error' : '',
            passError: !(user.password.valueInput) ? 'pass error' : '',
            repeatPassError: !(user.repeatPassword.valueInput) ? 'pass not the same' : ''
        }

        setUser({
            ...user,
            login: {...user.login, textError: errors.loginError},
            username: {...user.username, textError: errors.userError},
            email: {...user.email, textError: errors.emailError},
            password: {...user.password, textError: errors.passError},
            repeatPassword: {...user.repeatPassword, textError: errors.repeatPassError},
        })

        if (errors.loginError || errors.userError || errors.emailError || errors.passError || errors.repeatPassError) {
            setAnimation('error-text-registration')
            return;
        }

        const userAccount = {
            login: user.login.valueInput,
            username: user.username.valueInput,
            email: user.email.valueInput,
            password: user.password.valueInput,
            phoneNumber: user.phoneNumber.valueInput,
            address: {
                country: user.country.valueInput,
                city: user.city.valueInput,
                street: user.street.valueInput,
            }
        }
        postUser(userAccount)

    }

    return (
        <form className="registration_block registration_panel">
            <span className="name_of_block">REGISTRATION</span>
            {
                fieldForm.map((el) => {
                    return <MyInput
                        onChangeValue={handleChange}
                        key={el}
                        name={el}
                        labelText={user[el].text}
                        valueInput={user[el].valueInput}
                        textError={user[el].textError}
                        animation={animation}
                    />
                })
            }
            <CongratulationsBlock
                textDesc={textDesc}
                styleBlockCongratulations={styleBlockCongratulations}
                hideCongratulationsBlock={hideCongratulationsBlock}
            />
            <button onClick={createUser} className="btn_form btn_registration">REGISTRATION</button>
        </form>
    )
}

export default RegistrationForm

// ========================================= //


// const mapStateToProps = (state) => {
//     return {
//         users: state.usersReducer.users,
//         validation: state.validationFormReducer
//     }
// }
//
// const mapDispatchToProps = {
//     setUsers,
//     validForm,
//     inValidForm
// }
//
// // This block work with local Storage and rewrite new registration form in Local Storage instead keep it of as a back-end !!!
//
// class RegistrationForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             registration: {
//                 // id: "",
//                 login: "",
//                 username: "",
//                 email: "",
//                 password: "",
//                 repeatPassword: "",
//                 phoneNumber: "",
//                 address: {
//                     country: "",
//                     city: "",
//                     street: ""
//                 }
//             },
//             users: "",
//             foundEmailInToDB: false,
//             conflictAddUser: true,
//             loading: false
//         }
//     }
//
//     // componentDidMount() {
//     //     const {setUsers} = this.props
//     //     fetch('https://jsonplaceholder.typicode.com/users')
//     //         .then(response => response.json())
//     //         .then(data => setUsers(data)) // add to redux
//     //         .then(() => {
//     //             // console.log(this.props)
//     //         })
//     //         .then(data => {
//     //             this.setState({
//     //                 registration: {
//     //                     id: this.props.users.length + 1,
//     //                     name: "",
//     //                     username: "",
//     //                     email: "",
//     //                     password: "",
//     //                     repeatPassword: ""
//     //                 }
//     //             })
//     //         })
//     // }
//
//
//     // get param outside inputs and validation
//     changeValue = (e) => {
//         e.preventDefault()
//         let {name, value} = e.target;
//         return new Promise((res, rej) => {
//             let newAccount = Object.assign(this.state.registration, {});
//             newAccount[name] = value;
//             this.setState({registration: newAccount})
//             res()
//         })
//             .then(() => {
//                 this.validationForm()
//             })
//             // .catch((err) => console.error(err))
//     };
//
//     // check it out the same email in to db (local storage in this project / redux)
//     foundEmailInToDataBase = () => {
//         const {users} = this.props
//         const {registration} = this.state
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].email === registration.email) {
//                 this.setState({
//                     foundEmailInToDB: true
//                 })
//                 break
//             } else {
//                 this.setState({
//                     foundEmailInToDB: false
//                 })
//             }
//         }
//     }
//
//     validationForm = () => {
//         const {login, username, email, password, repeatPassword} = this.state.registration
//         const nameInput = document.getElementById("isAuth")
//         const usernameInput = document.getElementById("username")
//         const nameError = document.getElementById("nameError")
//         const usernameError = document.getElementById("usernameError")
//         const emailForm = document.getElementById("email")
//         const newPass = document.getElementById("password")
//         const emailInvalid = document.getElementById("emailError")
//         const passwordInvalid = document.getElementById("passError")
//         const passwordRepeatInput = document.getElementById("repeatPassword")
//
//         let errorTextPass = []
//         let secondPassInvalid = document.getElementById("secondPassError")
//
//         this.foundEmailInToDataBase()
//
//         // Set style validation form
//         const styleError = {
//             color: "red",
//             border: "1px solid red"
//         }
//         const styleValid = {
//             color: "green",
//             border: "2px solid transparent"
//         }
//
//         if (login === "") {
//             nameError.innerText = "Please write your`s isAuth"
//             nameInput.style.border = styleError.border
//         } else {
//             nameError.innerText = ""
//             nameInput.style.border = styleValid.border
//         }
//
//         if (username === "") {
//             usernameError.innerText = "Please write your`s second isAuth"
//             usernameInput.style.border = styleError.border
//         } else {
//             usernameError.innerText = ""
//             usernameInput.style.border = styleValid.border
//         }
//
//         if (!isEmail(email)) {
//             emailInvalid.innerText = "Incorrect email"
//             emailForm.style.border = styleError.border
//         } else if (this.state.foundEmailInToDB === true) {
//             emailInvalid.innerText = "this email has been already exist"
//             emailForm.style.border = styleError.border
//         } else {
//             emailInvalid.innerText = ""
//             emailForm.style.border = styleValid.border
//         }
//
//         // add error if smt wrong in ti the inputs
//         if (!isLowerWord(password)) {
//             errorTextPass.push(" Please enter a-z")
//         }
//         if (!isUpperWord(password)) {
//             errorTextPass.push(" Please enter A-Z")
//         }
//         if (!isNumber(password)) {
//             errorTextPass.push(" Please enter 0-9")
//         }
//         if (!isNumber(password) || !isUpperWord(password) || !isLowerWord(password)) {
//             newPass.style.border = styleError.border
//         } else {
//             newPass.style.border = styleValid.border
//         }
//         passwordInvalid.innerText = errorTextPass
//
//         if (repeatPassword !== password || repeatPassword === "") {
//             secondPassInvalid.innerText = "Password is not the same as above"
//             passwordRepeatInput.style.border = styleError.border
//         } else {
//             secondPassInvalid.innerText = ""
//             passwordRepeatInput.style.border = styleValid.border
//         }
//
//         // finally decision validated or not
//         const {inValidForm, validForm} = this.props
//         if (isLowerWord(password) && isUpperWord(password) && isNumber(password) && repeatPassword === password && this.state.foundEmailInToDB === false && login !== "" && username !== "") {
//             validForm()
//         } else {
//             inValidForm()
//         }
//     }
//
//     informPageAppear = () => {
//         const informPage = document.getElementById("informPage_cover");
//         const informPageText = document.getElementById("informPageText");
//
//         // let informText = (!this.state.conflictAddUser) ?
//         //     this.state.nameInfoWindow + "Thank you for registration!"
//         //     : "User " + this.state.nameInfoWindow + " has already done. Please, choose another isAuth"
//         let informText = (!this.state.conflictAddUser) ?
//             "Thank you for registration!"
//             : "User has already registered. Please, choose another isAuth"
//
//
//         informPageText.innerText = informText;
//         informPage.style.display = "flex"
//     }
//
//     informPageAppear2 = () => {
//         const informPage = document.getElementById("informPage_cover");
//         const informPageText = document.getElementById("informPageText");
//
//         informPageText.innerText = "LOADING";
//         informPage.style.display = "flex"
//     }
//
//     addUser = async () => {
//         const {validation} = this.props.validation
//         if (validation) {
//
//             this.props.setUsers(this.state.registration);
//            await this.postUserToDb();
//
//              this.setState({
//                 registration: {
//                     // id: this.props.users.length + 2,
//                     login: "",
//                     username: "",
//                     email: "",
//                     password: "",
//                     repeatPassword: "",
//                     phoneNumber: "",
//                     address: {
//                         country: "",
//                         city: "",
//                         street: ""
//                     }
//                 },
//                 users: "",
//                 foundEmailInToDB: false
//             });
//         }
//     }
//
//
//
//     createNewAccount = async (e) => {
//         e.preventDefault()
//         await this.setState({
//             loading: true
//         })
//         await this.validationForm()
//         await this.addUser()
//
//         // setTimeout(() => {
//         //     this.setState({
//         //         loading: false
//         //     })
//         // }, 1000)
//
//     }
//
//     postUserToDb = () => {
//         fetch("http://localhost:8080/registration", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify(this.state.registration)
//         })
//             .then(data => {
//                 console.log(data.status);
//                 (data.status > 200 || data.status < 299)
//                     ? this.setState({conflictAddUser: false})
//                     : this.setState({conflictAddUser: true})
//                 this.informPageAppear()
//             })
//     }
//
//
//     render() {
//         return (
//             <form onSubmit={this.createNewAccount}
//                   id="registration_block"
//                   className="registration_block registration_panel">
//                 <span className="name_of_block">REGISTRATION</span>
//                 {/*{*/}
//                 {/*    this.state.loading ?*/}
//                 {/*        <h1>LOADING</h1>*/}
//                 {/*        : <h1>OK</h1>*/}
//                 {/*}*/}
//                 {/*<button onClick={this.postUserToDb}>PUSH</button>*/}
//                 {/*<button onClick={this.get}>GET</button>*/}
//                 {/*<MyInput*/}
//                 {/*    props={this.state.registration}*/}
//                 {/*    fun={this.changeValue}*/}
//                 {/*    nameId={"isAuth"}*/}
//                 {/*></MyInput>*/}
//
//                 <label htmlFor="login">
//                     <span id="nameError" className="text_error"/>
//                     Login
//                 </label>
//                 <input onChange={this.changeValue}
//                        id="login"
//                        className="input_panel"
//                        name="login"
//                        type="text"
//                        value={this.state.registration.login}
//                 />
//                 <label htmlFor="username">
//                     <span id="usernameError" className="text_error"/>
//                     Name
//                 </label>
//                 <input onChange={this.changeValue}
//                        id="username"
//                        className="input_panel"
//                        name="username"
//                        type="text"
//                        value={this.state.registration.username}
//                 />
//                 <label htmlFor="email">
//                     <span id="emailError" className="text_error"/>
//                     Email
//                 </label>
//                 <input onChange={this.changeValue}
//                        type="text"
//                        className="input_panel"
//                        id="email"
//                        name="email"
//                        value={this.state.registration.email}
//                 />
//                 <label htmlFor="password">
//                     <span id="passError" className="text_error"/>
//                     Password
//                 </label>
//                 <input onChange={this.changeValue}
//                        className="input_panel"
//                        id="password"
//                        name="password"
//                        type="text"
//                        value={this.state.registration.password}
//                 />
//                 <label htmlFor="repeatPassword">
//                     <span id="secondPassError" className="text_error"/>
//                     Repeat Password
//                 </label>
//                 <input onChange={this.changeValue}
//                        className="input_panel"
//                        id="repeatPassword"
//                        name="repeatPassword"
//                        type="password"
//                        value={this.state.registration.repeatPassword}
//                 />
//                 <button type="submit" className="btn_form btn_registration">REGISTRATION</button>
//             </form>
//         )
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
//
