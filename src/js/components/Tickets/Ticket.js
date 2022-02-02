import React, {useEffect, useState} from 'react';

const Ticket = ({dataId, userDetails, el}) => {
    const [isHide, setHide] = useState(false)
    const [className, setClassName] = useState('')
    const [classNameBtn, setClassNameBtn] = useState('')


    const showTicket = () => {
        setHide(false)
    }

    const hideTicket = () => {
        setHide(true)
    }

    useEffect(() => {
        if (isHide){
            setClassName("your_tickets_active")
            setClassNameBtn("hide_ticket_button_active")
        } else {
            setClassName("")
            setClassNameBtn("")
        }
    }, [isHide])

    // your_tickets_active

    // const hideTicket = (e) => {
    //     const arrButtonClose = document.getElementsByClassName("hide_ticket_button")
    //     const arrTickets = document.getElementsByClassName("wrapper-ticket")
    //
    //     e.target.classList.remove("hide_ticket_button_active")
    //     console.log(arrTickets[e.target.dataset.id])
    // }

    const showTicketA = (e) => {
        const arrTickets = Array.from(document.getElementsByClassName("wrapper-ticket"))
        const arrButtonClose = Array.from(document.getElementsByClassName("hide_ticket_button"))
        arrButtonClose.map(el => el.classList.remove("hide_ticket_button_active"))
        arrTickets.map(el => el.classList.remove("your_tickets_active"))
        arrTickets[e.currentTarget.dataset.id].classList.add("your_tickets_active")
        arrButtonClose[e.currentTarget.dataset.id].classList.add("hide_ticket_button_active")
    }

    return (
        <div className={`wrapper-ticket ${className}`}

             onClick={showTicket}
             data-id={dataId}
        >
            <div className="ticket-item">
                <h5 className="ticket-desc your_tickets_firstName">{userDetails.firstName}</h5>
                <h5 className="ticket-desc your_tickets_dateOfEvent">{el.date}</h5>
                <h5 className="ticket-desc your_tickets_secondName">{userDetails.secondName}</h5>
                <h5 className="ticket-desc your_tickets_placeOfEvent">{el.place}</h5>
                <h5 className="ticket-desc your_tickets_nameTicket">{el.title}</h5>
                <h5 className="ticket-desc your_tickets_price">{'$' + el.price}</h5>
                <div className="ticket-desc qr_code"><p>{el.id}</p></div>
                <button onClick={hideTicket} className={`hide_ticket_button ${classNameBtn}`} data-id={dataId} > Close</button>
                <div data-id={dataId} className="cover"/>
            </div>
        </div>
    );
};

export default Ticket;