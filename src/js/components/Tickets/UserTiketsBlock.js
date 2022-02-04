import React, {useContext, useEffect, useState} from "react"
import {connect, useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types"
import {ADD_USER, LOGIN, LOGOUT} from "../../types";
import {AuthContext} from "../../App";
import {addUser, logIn} from "../../redux/actions/actions";
import Ticket from "./Ticket";



const YourTicketsBlock = () => {
    // const dispatch = useDispatch();
    // const {getPrincipal} = useContext(AuthContext);
    const userDetails = useSelector(state => state.userDetailsReducer.userDetails)
    const isAuth = useSelector(state => state.isAuthReducer.login)


    useEffect(() => {
        if(isAuth){}

        // animationOfTickets()
    }, [isAuth])

    // const animationOfTickets = () => {
    //     let arrOfTickets = Array.from(document.getElementsByClassName("wrapper-ticket"))
    //     let scaleElem = 0.7
    //     for (let i = 0; i < arrOfTickets.length; i++) {
    //         arrOfTickets[i].style.opacity = '0'
    //         arrOfTickets[i].style.animationName = 'ticket_animation_appear'
    //         arrOfTickets[i].style.right = (1 + i) * 80 + 'px'
    //         arrOfTickets[i].style.transform = `scale(${scaleElem})`
    //         arrOfTickets[i].style.animationDelay = i / 6 + "s"
    //         setTimeout(()=>{
    //             arrOfTickets[i].style.opacity = '1'
    //         }, 500)
    //         scaleElem = scaleElem + 0.1
    //         arrOfTickets[i].style.transition = 0.3 + 's'
    //     }
    // }

    // const showTicket = (e) => {
    //     const arrTickets = Array.from(document.getElementsByClassName("wrapper-ticket"))
    //     const arrButtonClose = Array.from(document.getElementsByClassName("hide_ticket_button"))
    //     arrButtonClose.map(el => el.classList.remove("hide_ticket_button_active"))
    //     arrTickets.map(el => el.classList.remove("your_tickets_active"))
    //     arrTickets[e.currentTarget.dataset.id].classList.add("your_tickets_active")
    //     arrButtonClose[e.currentTarget.dataset.id].classList.add("hide_ticket_button_active")
    // }
    // const hideTicket = (e) => {
    //     const arrButtonClose = Array.from(document.getElementsByClassName("hide_ticket_button"))
    //     const arrTickets = Array.from(document.getElementsByClassName("wrapper-ticket"))
    //     setTimeout(() => {
    //         // for (let i = 0; i < arrTickets.length; i++) {
    //         arrTickets[e.target.dataset.id].classList.remove("your_tickets_active")
    //         arrButtonClose[e.target.dataset.id].classList.remove("hide_ticket_button_active")
    //         // }
    //     }, 0)
    //     e.target.classList.remove("hide_ticket_button_active")
    //     console.log(arrTickets[e.target.dataset.id])
    // }
    return (
        <div className="wrapper-user-tickets-block_mod">
            <div className="user-tickets-block_mod">
                {
                    (isAuth) ?
                        userDetails.tickets.map((el, index) => (
                            <Ticket
                                key={el.id}
                                // showTicket={showTicket}
                                dataId={index}
                                userDetails={userDetails}
                                el={el}
                                index={index}
                            />
                        ))
                        :
                        <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

YourTicketsBlock.propTypes = {
    arrTickets: PropTypes.array
}
export default YourTicketsBlock;











// const mapStateToProps = (state) => {
//     return {
//         tickets: state.ticketsReducer
//     }
// }
//
// class YourTicketsBlock extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     animationOfTickets = () => {
//         let arrOfTickets = Array.from(document.getElementsByClassName("your_tickets_array_cover"))
//         arrOfTickets = arrOfTickets.reverse()
//         let scaleElem = 1
//         for (let i = 0; i < arrOfTickets.length; i++) {
//             arrOfTickets[i].style.left = 60 * i + "px"
//             arrOfTickets[i].style.transform = `scale(${scaleElem})`
//             scaleElem = scaleElem - 0.1
//         }
//     }
//
//     componentDidMount() {
//         this.animationOfTickets()
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         this.animationOfTickets()
//     }
//
//     showTicket = (e) => {
//         const arrTickets = Array.from(document.getElementsByClassName("your_tickets_array_cover"))
//         const arrButtonClose = Array.from(document.getElementsByClassName("hide_ticket_button"))
//         arrButtonClose.map(el => el.classList.remove("hide_ticket_button_active"))
//         arrTickets.map((el) => el.classList.remove("your_tickets_active"))
//         arrTickets[e.target.dataset.id].classList.add("your_tickets_active")
//         arrButtonClose[e.target.dataset.id].classList.add("hide_ticket_button_active")
//     }
//
//     hideTicket = () => {
//         const arrButtonClose = Array.from(document.getElementsByClassName("hide_ticket_button"))
//         const arrTickets = Array.from(document.getElementsByClassName("your_tickets_array_cover"))
//        setTimeout(()=>{
//            for (let i=0; i<arrTickets.length; i++){
//                arrTickets[i].classList.remove("your_tickets_active")
//                arrButtonClose[i].classList.remove("hide_ticket_button_active")
//            }
//        }, 0)
//     }
//
//
//     render() {
//         console.log(this.props)
//         const {arrTickets} = this.props.tickets
//         const NameOfDates = ["January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ]
//         const dateOfToDay = new Date()
//
//         const PassedCover = () => (
//             <div className="passed_cover">
//                 <p>PASSED</p>
//                 <div className="cover"/>
//             </div>
//         )
//
//         return (
//             <div className="tickets_which_already_exist_block">
//                 {arrTickets.map((el) => (
//                     <div key={el.id + dateOfToDay.getMilliseconds()}
//                          className="your_tickets_array_cover"
//                     >
//                         <div className="your_tickets_array"
//                              onClick={this.showTicket}>
//                             <h5 className="your_tickets your_tickets_firstName">{el.firstName}</h5>
//                             <h5 className="your_tickets your_tickets_dateOfEvent">{el.dateOfEvent}</h5>
//                             <h5 className="your_tickets your_tickets_secondName">{el.secondName}</h5>
//                             <h5 className="your_tickets your_tickets_placeOfEvent">{el.placeOfEvent}</h5>
//                             <h5 className="your_tickets your_tickets_nameTicket">{el.nameTicket}</h5>
//                             <h5 className="your_tickets your_tickets_price">{el.price}</h5>
//                             <div className="your_tickets qr_code"><p>{el.phoneNumber}</p></div>
//                             <button className="hide_ticket_button"
//                                     data-id={el.id}
//                                     onClick={this.hideTicket}
//                             >Close
//                             </button>
//                             {dateOfToDay.getMonth() > el.month && dateOfToDay.getFullYear() == el.year && <PassedCover/>}
//                             {dateOfToDay.getFullYear() > el.year && <PassedCover/>}
//                             <div data-id={el.id} className="cover"/>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }
//
// YourTicketsBlock.propTypes = {
//     arrTickets : PropTypes.array
// }
//
// export default connect(mapStateToProps, null)(YourTicketsBlock)