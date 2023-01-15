import React from 'react';
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import ArrowTicket from "./ArrowTicket";

const ArrowsTicketsBlock = ({prevSlide, nextSlide}) => {
    return (
        <div className='arrow-tickets-block' >
            <ArrowTicket changeTicket={prevSlide} icon={faArrowLeft}/>
            <ArrowTicket changeTicket={nextSlide} icon={faArrowRight}/>
        </div>

    );
};

export default ArrowsTicketsBlock;