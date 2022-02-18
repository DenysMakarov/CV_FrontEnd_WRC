import React from 'react';
import TickedDesc from "./TickedDesc";
import BtnRemoveTicket from "./BtnRemoveTicket";


const Ticket = ({dataId, el, dataNumber, cls, btnClassActive, removeTicketNotice}) => {
    return (
        <div className={`wrapper-ticket_mod wrapper-ticket_mod_slide ${cls}`} data-id={dataId}>
            <TickedDesc id={el.id} date={el.date} place={el.place} title={el.title} dataId={dataId}/>
            <BtnRemoveTicket btnClassActive={btnClassActive} dataNumber={dataNumber} removeTicketNotice={removeTicketNotice}/>
        </div>
    );
};

export default Ticket;

