import React from 'react';

const EventNavigation = ({events, setAnimation}) => {
    return (
        <div className="tickets_events">
            {events.map((el, index) => (
                <div data-name={el.title} key={el.id} className="tickets_option_cover">
                    <div className="tickets_option">
                        <h5 onClick={setAnimation} data-number={el.id}
                            className="tickets_option_text">{el.title}</h5>
                    </div>
                    <p data-number={el.id} className="tickets_option_title">{el.title}</p>
                </div>
            ))}
        </div>
    );
};

export default EventNavigation;