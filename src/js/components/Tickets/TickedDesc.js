import React from 'react';

const TickedDesc = ({date, place, title, id, dataId}) => {
    return (
        <div className="wrapper-item_mod" >
            <div className="ticket-item_mod ticket-item_mod_slide">
                <h5 className="ticket-desc_mod your_tickets_dateOfEvent">{date}</h5>
                <h5 className="ticket-desc_mod your_tickets_placeOfEvent">{place}</h5>
                <h5 className="ticket-desc_mod your_tickets_nameTicket_mod">{title}</h5>
                <div className="ticket-desc_mod qr_code_mod"><p>{id}</p></div>

                <div  className="cover"/>
            </div>
        </div>
    );
};

export default TickedDesc;