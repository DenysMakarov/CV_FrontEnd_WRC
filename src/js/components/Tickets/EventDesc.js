import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSlide} from "../../redux/actions/actions";

const EventDesc = () => {
    const {listEvents, numberOfSlide} = useSelector(state => state.numberOfSlideReducer)
    const [styleEventsAppear, setStyleEventsAppear] = useState({
        animationName: 'ticket_slide_appear',
        backgroundImage: 'url(../img/Dakar_kamaz_1.jpg)'
    })

    useEffect(() => {
        if (listEvents.length) animation()
    }, [numberOfSlide, listEvents])

    const animation = () => {
        setStyleEventsAppear({...styleEventsAppear, animationName: 'none'})
        setTimeout(() => {
            setStyleEventsAppear({
                animationName: 'ticket_slide_appear',
                backgroundImage: listEvents[numberOfSlide]['imgPath']
            })
        }, 100)
    }

    return (
        (listEvents.length)
            ?
            <Fragment>
                <h3 id="date_of_event" className="date_of_event">{listEvents[numberOfSlide].date}
                    <br/> {listEvents[numberOfSlide].place}</h3>
                <div id="inform_img " className="inform_img" style={styleEventsAppear}/>
                <h1 id="ticket_form_title" className="ticket_form_title">{listEvents[numberOfSlide].title}</h1>
            </Fragment>

            : <h1 style={{color: 'white'}}>LOADING...</h1>
    );
};

export default EventDesc;