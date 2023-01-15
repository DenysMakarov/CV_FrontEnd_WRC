import React from 'react';
import {Link} from "react-router-dom";

const BtnEvent = () => {
    return (
        <Link className="event-btn" to='/tickets'>
            <div className='text_description_slide event-btn_block'>BY TICKET</div>
        </Link>
    );
};

export default BtnEvent;