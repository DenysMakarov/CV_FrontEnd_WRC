import React from 'react';

const Btn = ({createTicket}) => {
    return (
        <button
            onClick={createTicket}
            type="submit"
            id="btn_ticket_form"
            className="btn_ticket_form">Buy Ticket
        </button>
    );
};

export default Btn;