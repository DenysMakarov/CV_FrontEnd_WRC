import React from 'react';

const BtnRemoveTicket = ({dataNumber, removeTicketNotice, btnClassActive}) => {



    return (
        <button data-id={dataNumber}
                onClick={removeTicketNotice}
                className={`btn-remove ${btnClassActive}`}>REMOVE
        </button>
    );
};

export default BtnRemoveTicket;