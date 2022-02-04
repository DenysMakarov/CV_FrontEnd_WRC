import React, {Fragment} from 'react';

const Input = ({getValueFromInput, valueOfData, textLabel}) => {
    return (
        <Fragment>
            <label htmlFor="firstName">{textLabel}</label>
            <input id="input_ticket_first_name"
                   className="input_ticket input_ticket_first_name"
                   onChange={getValueFromInput}
                   name="firstName"
                   value={valueOfData}
                   type="text"/>
        </Fragment>
    );
};

export default Input;