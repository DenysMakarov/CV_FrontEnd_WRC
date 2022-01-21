// import React from 'react';
// import {eventInfo} from "../../db/dataBase";
//
//
// class TicketsOptions extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     setAnimationAndGetInformOfTicket = (e) => {
//         this.setState({
//             nameTicket: e.target.innerText,
//             numberOfSlide: e.target.dataset.number,
//             date: eventInfo[this.props.numberOfSlide - 1].date,
//             place: eventInfo[this.props.numberOfSlide - 1].place,
//         })
//         console.log(this.props)
//
//         const informImg = document.getElementById("inform_img")
//         const dateOfEvent = document.getElementById("date_of_event")
//         const ticketFormTitle = document.getElementById("ticket_form_title")
//         const arrOptionTitleText = Array.from(document.getElementsByClassName("tickets_option_title"))
//         const TicketTitle = document.getElementById("ticket_form_title")
//
//
//         for (let i = 0; i < arrOptionTitleText.length; i++) {
//             (arrOptionTitleText[i].dataset.number === e.target.dataset.number) ? arrOptionTitleText[i].style.color = "red" : arrOptionTitleText[i].style.color = "#ffffff"
//         }
//
//
//         informImg.style.animationName = "none"
//         dateOfEvent.style.animationName = "none"
//         ticketFormTitle.style.animationName = "none"
//
//         setTimeout(() => {
//             informImg.style.animationName = "ticket_slide_appear"
//             dateOfEvent.style.animationName = "ticket_date_appear"
//             ticketFormTitle.style.animationName = "ticket_form_title_appear"
//         }, 100)
//
//         TicketTitle.style.color = "white"
//     }
//
//
//     render() {
//         return (
//             <div className="tickets_events">
//                 {eventInfo.map((el) => (
//                     <div data-name={el.textBottom}
//                          key={el.imgPath}
//                          className="tickets_option_cover">
//
//                         <div className="tickets_option">
//                             <h5 onClick={this.setAnimationAndGetInformOfTicket}
//                                 data-number={el.numberId}
//                                 className="tickets_option_text">{el.textBottom}</h5>
//                         </div>
//                         <p data-number={el.numberId}
//                            className="tickets_option_title">{el.textBottom}</p>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
// export default TicketsOptions