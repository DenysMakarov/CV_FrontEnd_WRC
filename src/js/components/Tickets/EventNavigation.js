import React from 'react';

const EventNavigation = ({events, setAnimation, createTicket}) => {
    return (
        <div className="tickets_events">
            {events.map((el) => (
                <div data-name={el.title} key={el.id} className="tickets_option_cover">
                    <div className="tickets_option">
                        <p onClick={createTicket} data-id={el.id}
                            className="tickets_option_text">{el.title}
                        </p>
                    </div>
                    <p data-id={el.id} className="tickets_option_title">{el.title}</p>
                </div>
            ))}
        </div>
    );
};

export default EventNavigation;