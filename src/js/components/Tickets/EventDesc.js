import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSlide} from "../../redux/actions/actions";

const EventDesc = () => {
    const {listEvents, numberOfSlide} = useSelector(state => state.numberOfSlideReducer)
    const [styleEventsAppear, setStyleEventsAppear] = useState({animationName: 'ticket_slide_appear'})
    const [styleTitleAppear, setStyleTitleAppear] = useState({animationName: 'ticket_form_title_appear'})
    const [styleDescAppear, setStyleDescAppear] = useState({animationName: 'ticket_date_appear'})


    useEffect(() => {
        if (listEvents.length) animation()
    }, [numberOfSlide, listEvents])

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
                <h3 id="date_of_event" style={styleDescAppear} className="date_of_event">{listEvents[numberOfSlide].date}
                    <br/> {listEvents[numberOfSlide].place}</h3>
                <div id="inform_img " className="inform_img" style={styleEventsAppear}/>
                <h1 id="ticket_form_title" style={styleTitleAppear} className="ticket_form_title">{listEvents[numberOfSlide].title}</h1>
            </Fragment>

            : <h1 style={{color: 'white'}}>LOADING...</h1>
    );
};

export default EventDesc;