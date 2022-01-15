import React from 'react';

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import InformPage from "./InformPage";


class RegistrationPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="registration_container" className="registration_container">
                <RegistrationForm/>
                <LoginForm/>
                <InformPage/>
                <div className="registration_block_cover"/>
            </div>
        )
    }
}

export default RegistrationPanel