import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ArrowTicket = ({changeTicket, icon}) => {
    return (
        <div className='arrow-tickets' onClick={changeTicket}>
            <FontAwesomeIcon icon={icon}/>
        </div>
    );
};

export default ArrowTicket;