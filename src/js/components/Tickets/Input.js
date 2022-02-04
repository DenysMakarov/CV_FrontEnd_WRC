import React, {Fragment, useEffect, useState} from 'react';

const Input = ({getValueFromInput, valueOfData, textLabel, name}) => {
    const [invalidStyle, setInvalidStyle] = useState({
        brd: {border: "2px solid transparent"},
        clr: { color: "white"}
    })


    useEffect(() => {
        (!valueOfData)
            ? setInvalidStyle({clr : {color: "red"}, brd: {border: "2px solid red"}})
            : setInvalidStyle({clr : {color: "white"}, brd: {border: "2px solid transparent"}})
    }, [valueOfData])


    return (
        <Fragment>
            <label htmlFor="firstName">{textLabel}</label>
            <input id="input_ticket_first_name"
                   className="input_ticket input_ticket_first_name"
                   onChange={getValueFromInput}
                   name={name}
                   value={valueOfData}
                   type="text"
                   style={invalidStyle.brd}
            />
        </Fragment>
    );
};

export default Input;