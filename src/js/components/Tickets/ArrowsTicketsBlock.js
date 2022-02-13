import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Arrow from "../SliderBlock/Arrow";
import ArrowTicket from "./ArrowTicket";

const ArrowsTicketsBlock = ({prevSlide, nextSlide}) => {
    return (
        <div className='arrow-tickets-block' >
            <ArrowTicket changeTicket={prevSlide} icon={faArrowLeft}/>
            <ArrowTicket changeTicket={nextSlide} icon={faArrowRight}/>
            {/*<div className='arrow-tickets' onClick={prevSlide}>*/}
            {/*    <FontAwesomeIcon icon={faArrowLeft}/>*/}
            {/*</div>*/}

            {/*<div className='arrow-tickets' onClick={nextSlide}>*/}
            {/*    <FontAwesomeIcon icon={faArrowRight}/>*/}
            {/*</div>*/}
        </div>

    );
};

export default ArrowsTicketsBlock;