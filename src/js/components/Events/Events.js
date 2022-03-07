import React from 'react'
import EventsDesc from "./EventsDesc";
import {eventInfo} from "../../utils/constants";

const Events = () => {

        return (
            <div className="main_container_event_cover">
                <div className="main_container_event_filter"/>
                <div className="main_container_event">
                    {eventInfo.map((el) => (
                            <div key={el.numberId} className="event_block">
                                <EventsDesc el={el}/>
                            </div>
                        )
                    )}
                </div>
            </div>
        )
}

export default Events