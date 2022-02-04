import React from 'react';

const Btn = ({byTicketFun}) => {
    return (
        <button
            onClick={byTicketFun}
            type="submit"
            id="btn_ticket_form"
            className="btn_ticket_form">Buy Ticket
        </button>
    );
};

export default Btn;