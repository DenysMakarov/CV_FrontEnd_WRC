import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";


const Ticket = ({dataId, userDetails, el, index, dataNumber}) => {
    const [isHide, setIsHide] = useState(false)
    const [className, setClassName] = useState('')
    const [classNameBtn, setClassNameBtn] = useState('')
    const [animation, setAnimation] = useState({
        // opacity : '0',
        // animationName: 'ticket_animation_appear',
        // right: (1 + index) * 80 + 'px',
        // transform: `scale(${0.7 + (index / 10)})`,
        // animationDelay: index / 6 + "s",
        // zIndex: index+10,
        // transition: .3 +'s',
    })

    const showTicket = () => {
        setIsHide(true)
    }

    const hideTicket = () => {
        setIsHide(false)
    }

    const removeTicket = (e) => {
        const login = userDetails.username
        const ticketId = e.currentTarget.dataset.id
        const token = localStorage.getItem('token')
        fetch(`http://localhost:8080/ticket/remove/${login}/${ticketId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            }
        })
            .then(data => {
                if (data.status == 401) console.log("401 NOT AUTHORIZE -> add functional to method")
                return data.json
            })
            .then(data => console.log(data))
    }

    useEffect(() => {
        if (isHide) {
            setClassName("ticket-item_mod-active")
            setClassNameBtn("hide_ticket_button_active")
        } else {
            setClassName("")
            setClassNameBtn("")
        }

    }, [isHide])


    return (
        <div className={`wrapper-ticket_mod ${className}`}
            // style={animation}
             data-id={dataId}
        >
            <div className="wrapper-item_mod" onClick={showTicket}>
                <div className="ticket-item_mod">
                    <h5 className="ticket-desc_mod your_tickets_dateOfEvent">{el.date}</h5>
                    <h5 className="ticket-desc_mod your_tickets_placeOfEvent">{el.place}</h5>
                    <h5 className="ticket-desc_mod your_tickets_nameTicket_mod">{el.title}</h5>
                    <div className="ticket-desc_mod qr_code_mod"><p>{el.id}</p></div>

                    <div data-id={dataId} className
                        ="cover"/>
                </div>
            </div>
            <button onClick={hideTicket} className={`btn-close hide_ticket_button ${classNameBtn}`}
                    data-id={dataId}> Close
            </button>
            <button data-id={dataNumber} onClick={removeTicket}
                    className={`btn-close btn-rem hide_ticket_button ${classNameBtn}`}>REM
            </button>

        </div>
    );
};

export default Ticket;


//
//
// <div className={`wrapper-ticket ${className}`}
//      style={animation}
//      onClick={showTicket}
//      onMouseOver={(e)=>console.log(e.currentTarget)}
//      data-id={dataId}
// >
//     <div className="ticket-item">
//         <p className="ticket-desc your_tickets_firstName">{userDetails.firstName}</p>
//         <h5 className="ticket-desc your_tickets_dateOfEvent">{el.date}</h5>
//         <h5 className="ticket-desc your_tickets_secondName">{userDetails.secondName}</h5>
//         <h5 className="ticket-desc your_tickets_placeOfEvent">{el.place}</h5>
//         <h5 className="ticket-desc your_tickets_nameTicket">{el.title}</h5>
//         <h5 className="ticket-desc your_tickets_price">{'$' + el.price}</h5>
//         <div className="ticket-desc qr_code"><p>{el.id}</p></div>
//         <button onClick={hideTicket} className={`hide_ticket_button ${classNameBtn}`} data-id={dataId}> Close
//         </button>
//         <div data-id={dataId} className="cover"/>
//     </div>
// </div>

// const showTicketA = (e) => {
//     const arrTickets = Array.from(document.getElementsByClassName("wrapper-ticket"))
//     const arrButtonClose = Array.from(document.getElementsByClassName("hide_ticket_button"))
//     arrButtonClose.map(el => el.classList.remove("hide_ticket_button_active"))
//     arrTickets.map(el => el.classList.remove("your_tickets_active"))
//     arrTickets[e.currentTarget.dataset.id].classList.add("your_tickets_active")
//     arrButtonClose[e.currentTarget.dataset.id].classList.add("hide_ticket_button_active")
// }
// const hideTicket = (e) => {
//     const arrButtonClose = document.getElementsByClassName("hide_ticket_button")
//     const arrTickets = document.getElementsByClassName("wrapper-ticket")
//
//     e.target.classList.remove("hide_ticket_button_active")
//     console.log(arrTickets[e.target.dataset.id])
// }