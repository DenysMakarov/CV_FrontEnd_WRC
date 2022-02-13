import React, {useEffect, useState} from 'react';


const Ticket = ({dataId, el,  dataNumber, numberOfSlide, cls, btnClassActive, removeTicketNotice}) => {
    const [isHide, setIsHide] = useState(false)
    const [classNameActive, setClassNameActive] = useState('')


    useEffect(() => {
     if(isHide) setClassNameActive('show-ticket')
     else setClassNameActive('hide-ticket')
    }, [isHide, numberOfSlide])

    return (
        <div className={`wrapper-ticket_mod wrapper-ticket_mod_slide ${cls} ${classNameActive}`}
             data-id={dataId}
        >
            <div className="wrapper-item_mod" >
                <div className="ticket-item_mod ticket-item_mod_slide">
                    <h5 className="ticket-desc_mod your_tickets_dateOfEvent">{el.date}</h5>
                    <h5 className="ticket-desc_mod your_tickets_placeOfEvent">{el.place}</h5>
                    <h5 className="ticket-desc_mod your_tickets_nameTicket_mod">{el.title}</h5>
                    <div className="ticket-desc_mod qr_code_mod"><p>{el.id}</p></div>

                    <div data-id={dataId} className
                        ="cover"/>
                </div>
            </div>
            <button data-id={dataNumber}
                    onClick={removeTicketNotice}
                    className={`btn-remove ${btnClassActive}`}>REMOVE
            </button>

        </div>
    );
};

export default Ticket;


//

// const [isHide, setIsHide] = useState(false)
// const [className, setClassName] = useState('')
// const [classNameBtn, setClassNameBtn] = useState('')
// const [animation, setAnimation] = useState({
//     // opacity : '0',
//     // animationName: 'ticket_animation_appear',
//     // right: (1 + index) * 80 + 'px',
//     // transform: `scale(${0.7 + (index / 10)})`,
//     // animationDelay: index / 6 + "s",
//     // zIndex: index+10,
//     // transition: .3 +'s',
// })
//
// const dispatch = useDispatch();
//
// const array = userDetails.tickets
// const active = {
//     transform: 'scale(2)'
// }
//
//
// useEffect(() => {
//     if (isHide) {
//         setClassName("ticket-item_mod-active")
//         setClassNameBtn("hide_ticket_button_active")
//     } else {
//         setClassName("")
//         setClassNameBtn("")
//     }
//
//     if (numberOfSlide == index){
//         setAnimation(active)
//     }
// }, [isHide, numberOfSlide])
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

// return (
//     <div className={`wrapper-ticket_mod ${className}`}
//         // style={animation}
//          data-id={dataId}
//     >
//
//         <div className="wrapper-item_mod" onClick={showTicket}>
//             <div className="ticket-item_mod">
//                 <h5 className="ticket-desc_mod your_tickets_dateOfEvent">{el.date}</h5>
//                 <h5 className="ticket-desc_mod your_tickets_placeOfEvent">{el.place}</h5>
//                 <h5 className="ticket-desc_mod your_tickets_nameTicket_mod">{el.title}</h5>
//                 <div className="ticket-desc_mod qr_code_mod"><p>{el.id}</p></div>
//
//                 <div data-id={dataId} className
//                     ="cover"/>
//             </div>
//         </div>
//         <button onClick={hideTicket} className={`btn-close hide_ticket_button ${classNameBtn}`}
//                 data-id={dataId}> Close
//         </button>
//         <button data-id={dataNumber} onClick={removeTicket}
//                 className={`btn-close btn-rem hide_ticket_button ${classNameBtn}`}>REM
//         </button>
//
//     </div>
// );

// const active = {
//     transform: 'scale(1.3)',
//     position: 'absolute',
//     top: '25%',
//     left: '25%',
// }
// const leftTicket = {
//     transform: 'scale(1)',
//     position: 'absolute',
//     top: '25%',
//     left: '15%',
// }
// const rightTicket = {
//     transform: 'scale(1)',
//     position: 'absolute',
//     top: '25%',
//     right: '15%',
// }
