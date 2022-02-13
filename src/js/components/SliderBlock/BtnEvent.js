import React from 'react';
import {Link} from "react-router-dom";

const BtnEvent = () => {
    return (
        <div className='text_description_slide event-btn_block'>
            <Link className="event-btn" to='/tickets'>BY TICKET</Link>
        </div>
    );
};

export default BtnEvent;