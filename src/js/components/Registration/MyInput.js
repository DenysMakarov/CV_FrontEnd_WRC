import React from 'react';

const MyInput = ({name, valueInput, onChangeValue, labelText, textError}) => {

    return (
        <React.Fragment>
            <label htmlFor={name}>
                <span id="nameError" className="text_error">{textError}</span>
                {labelText}
            </label>
            <input
                onChange={onChangeValue}
                className="input_panel"
                name={name}
                type="text"
                value={valueInput}
            />
        </React.Fragment>
    );
};

export default MyInput;