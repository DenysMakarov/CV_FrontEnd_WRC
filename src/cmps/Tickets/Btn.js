import React from 'react';

const Btn = ({byTicketFun}) => {
    return (
        <button
            onClick={byTicketFun}
            type="submit"
            className="btn_ticket_form">Buy Ticket
        </button>
    );
};

export default Btn;