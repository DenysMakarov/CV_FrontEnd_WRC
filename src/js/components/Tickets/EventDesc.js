import React, {Fragment} from 'react';
import {useSelector} from "react-redux";

const EventDesc = () => {
    const {listEvents, numberOfSlide} = useSelector(state => state.numberOfSlideReducer)

    return (
        (listEvents.length > 0)
            ?
            <Fragment>
                <h3 id="date_of_event" className="date_of_event">{listEvents[numberOfSlide].date}
                    <br/> {listEvents[numberOfSlide].place}</h3>
                <div id="inform_img" className="inform_img" style={{
                    backgroundImage: listEvents[numberOfSlide].imgPath
                }}/>
                <h1 id="ticket_form_title" className="ticket_form_title">{listEvents[numberOfSlide].title}</h1>
            </Fragment>

            : <h1 style={{color: 'white'}}>LOADING...</h1>
    );
};

export default EventDesc;