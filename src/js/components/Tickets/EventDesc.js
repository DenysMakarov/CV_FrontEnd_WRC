import React, {Fragment, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const EventDesc = () => {
    const {listEvents, numberOfSlide} = useSelector(state => state.numberOfSlideReducer)
    const [styleEventsAppear, setStyleEventsAppear] = useState({animationName: 'ticket_slide_appear'})
    const [styleTitleAppear, setStyleTitleAppear] = useState({animationName: 'ticket_form_title_appear'})
    const [styleDescAppear, setStyleDescAppear] = useState({animationName: 'ticket_date_appear'})


    useEffect(() => {
        if (listEvents.length) animation()
    }, [numberOfSlide, listEvents])


    // just animation
    const animation = () => {
        [setStyleEventsAppear, setStyleTitleAppear, setStyleDescAppear ].map(e => e({...e, animationName: 'none'}))

        setTimeout(() => {
            setStyleEventsAppear({
                animationName: 'ticket_slide_appear',
                backgroundImage: listEvents[numberOfSlide]['imgPath']
            })
            setStyleTitleAppear({...styleTitleAppear, animationName: 'ticket_form_title_appear'})
            setStyleDescAppear({...styleDescAppear, animationName: 'ticket_date_appear'})
        }, 100)
    }

    return (
        (listEvents.length)
            ?
            <Fragment>
                <h3 style={styleDescAppear} className="date_of_event">{listEvents[numberOfSlide].date}
                    <br/> {listEvents[numberOfSlide].place}</h3>
                <div className="inform_img" style={styleEventsAppear}/>
                <h1 style={styleTitleAppear} className="ticket_form_title">{listEvents[numberOfSlide].title}</h1>
            </Fragment>

            : <h1 style={{color: 'white'}}>LOADING...</h1>
    );
};

export default EventDesc;