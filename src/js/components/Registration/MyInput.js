import React from 'react';

const MyInput = (props) => {
    return (
        <React.Fragment>
            <label htmlFor={props.nameId}>
                <span id="nameError" className="text_error"/>
                Login
            </label>
            <input onChange={props.fun}
                   id={props.nameId}
                   className="input_panel"
                   name={props.nameId}
                   type="text"
                   value={props.login}
            />
        </React.Fragment>
    );
};

export default MyInput;