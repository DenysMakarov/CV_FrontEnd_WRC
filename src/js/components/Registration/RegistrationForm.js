import React, {useState} from 'react';

import MyInput from "./MyInput";
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


