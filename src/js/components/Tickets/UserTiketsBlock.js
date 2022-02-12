import React, {useContext, useEffect, useState} from "react"
import {connect, useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types"
import {ADD_USER, LOGIN, LOGOUT} from "../../types";
import {AuthContext} from "../../App";
import {addUser, logIn, removeTicketFromThis} from "../../redux/actions/actions";
import Ticket from "./Ticket";


const UserTicketsBlock = () => {
    const {userDetails} = useSelector(state => state.userDetailsReducer)
    const {isAuth} = useSelector(state => state.isAuthReducer)
    const [num, setNum] = useState(0)
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        if (isAuth) {
            setTickets([...userDetails.tickets])
        }
    }, [isAuth])



    const nextSlide = () => {
        if (num === userDetails.tickets.length - 1) {
            setNum(0)
        } else {
            setNum(num + 1)
        }
    }
    const prevSlide = () => {
        if (num === 0) {
            setNum(userDetails.tickets.length - 1)
        } else {
            setNum(num - 1)
        }
    }

    const active = (index, num) => {
        if (index === num) return 'wrapper-ticket_mod_slide_active'
        if ((index === num - 1) || (num === 0 && index === tickets.length - 1)) return 'wrapper-ticket_mod_slide_right'
        if ((index === num + 1) || (num === tickets.length - 1 && index === 0)) return 'wrapper-ticket_mod_slide_left'
        else return 'wrapper-ticket_mod_slide_hide'
    }

    const showBtnClass = (index, num) => {
        if (index === num) return 'btn-remove-active'
        else return 'btn-remove-hide'
    }


    return (
        <div className="wrapper-user-tickets-block_mod">
            <div className="user-tickets-block_mod user-tickets-block_mod_slide">
                {
                    (tickets.length) ?
                        tickets.map((el, index) => (
                            <Ticket
                                key={el.id}
                                // showTicket={showTicket}
                                dataId={index}
                                dataNumber={el.id}
                                userDetails={userDetails}
                                el={el}
                                index={index}
                                numberOfSlide={num}
                                cls={active(index, num)}
                                btnClassActive={showBtnClass(index, num)}
                            />
                        ))
                        :
                        <h1>Loading...</h1>
                }
            </div>
            <button onClick={prevSlide}>PREV</button>
            <button onClick={nextSlide}>NEXT</button>

        </div>
    )
}

UserTicketsBlock.propTypes = {
    arrTickets: PropTypes.array
}
export default UserTicketsBlock;


// const mapStateToProps = (state) => {
//     return {
//         tickets: state.ticketsReducer
//     }
// }
//
// class UserTicketsBlock extends React.Component {
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
// UserTicketsBlock.propTypes = {
//     arrTickets : PropTypes.array
// }
//
// export default connect(mapStateToProps, null)(UserTicketsBlock)

// const activeSlide = {
//     // transform: 'scale(1.3)',
//     marginTop: '50px',
//     marginLeft: '40%',
//     // background: 'red',
// }
// const leftTicket = {
//     marginTop: '150px',
//     marginLeft: '5%',
//     // background: 'yellow',
// }
// const rightTicket = {
//     marginTop: '150px',
//     marginLeft: '75%',
//     // background: 'green',
// }