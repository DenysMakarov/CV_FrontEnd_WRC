import React, {useContext, useEffect, useState} from "react"
import {connect, useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types"
// import {addUserAction, logIn, removeTicket, removeTicketAction} from "../../redux/actions/actions";
import Ticket from "./Ticket";
import NoticeRemoveBlock from "./NoticeRemoveBlock";

import ArrowsTicketsBlock from "./ArrowsTicketsBlock";
import {Link} from "react-router-dom";
import {ticketsReducer} from "../../redux/reducers/ticketsReducer";
import {removeTicket} from "../../redux/actions/ticketsActions";
// import {removeTicket} from "../../redux/actions/actions";


const UserTicketsBlock = ({animationStyle}) => {
    const {userDetails} = useSelector(state => state.userDetailsReducer)
    const {isAuth} = useSelector(state => state.isAuthReducer)
    const [num, setNum] = useState(0)
    // const [tickets, setTickets] = useState([])
    const {tickets} = useSelector(state => state.ticketsReducer)
    const [removeNotice, setRemoveNotice] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(tickets)
    }, [isAuth, userDetails,])


    const nextSlide = () => {
        if (num === tickets.length - 1) setNum(0)
        else setNum(num + 1)

    }
    const prevSlide = () => {
        if (num === 0) setNum(tickets.length - 1)
        else setNum(num - 1)

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

    const showRemoveNotice = () => {
        setRemoveNotice(true)
    }

    const hideRemoveNotice = () => {
        setRemoveNotice(false)
    }

    const removeTicketFromUser = () => {
        const login = userDetails.username
        const ticketId = tickets[num].id
        dispatch(removeTicket(login, ticketId))
        hideRemoveNotice()
        setNum(0)
    }


    return (
        <div className="wrapper-user-tickets-block_mod">
            <div className="user-tickets-block_mod user-tickets-block_mod_slide">
                {
                    removeNotice && <NoticeRemoveBlock hideRemoveNotice={hideRemoveNotice} removeTicket={removeTicketFromUser}/>
                }
                {
                    (!isAuth) ?
                        <div className='relocation-block' style={{animationName: animationStyle}}>
                            <Link to={'/login'}>Please Login!</Link>
                        </div> :
                        (tickets.length) ?
                            <div>
                                {tickets.map((el, index) => (
                                    <Ticket
                                        key={el.id}
                                        dataId={index}
                                        dataNumber={el.id}
                                        el={el}
                                        index={index}
                                        numberOfSlide={num}
                                        cls={active(index, num)}
                                        btnClassActive={showBtnClass(index, num)}
                                        removeTicketNotice={showRemoveNotice}
                                    />
                                ))}
                                <ArrowsTicketsBlock prevSlide={prevSlide} nextSlide={nextSlide}/>
                            </div>
                            : <h1>Nothing</h1>
                }
            </div>
        </div>
    )
}


export default UserTicketsBlock;


// const UserTicketsBlock = ({animationStyle}) => {
//     const {userDetails} = useSelector(state => state.userDetailsReducer)
//     const {isAuth} = useSelector(state => state.isAuthReducer)
//     const [num, setNum] = useState(0)
//     const [tickets, setTickets] = useState([])
//     const [removeNotice, setRemoveNotice] = useState(false)
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         if (isAuth) {
//             setTickets([...userDetails.tickets])
//         }
//     }, [isAuth, userDetails])
//
//
//     const nextSlide = () => {
//         if (num === userDetails.tickets.length - 1) setNum(0)
//         else setNum(num + 1)
//
//     }
//     const prevSlide = () => {
//         if (num === 0) setNum(userDetails.tickets.length - 1)
//         else setNum(num - 1)
//
//     }
//
//     const active = (index, num) => {
//         if (index === num) return 'wrapper-ticket_mod_slide_active'
//         if ((index === num - 1) || (num === 0 && index === tickets.length - 1)) return 'wrapper-ticket_mod_slide_right'
//         if ((index === num + 1) || (num === tickets.length - 1 && index === 0)) return 'wrapper-ticket_mod_slide_left'
//         else return 'wrapper-ticket_mod_slide_hide'
//     }
//     const showBtnClass = (index, num) => {
//         if (index === num) return 'btn-remove-active'
//         else return 'btn-remove-hide'
//     }
//
//     const showRemoveNotice = () => {
//         setRemoveNotice(true)
//     }
//
//     const hideRemoveNotice = () => {
//         setRemoveNotice(false)
//     }
//
//     const removeTicketFromRedux = (id) => {
//         dispatch(removeTicketFromThis(id))
//     }
//
//     const removeTicket = () => {
//         const login = userDetails.username
//         const ticketId = tickets[num].id
//         const token = localStorage.getItem('token')
//         fetch(`http://localhost:8080/ticket/remove/${login}/${ticketId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': token,
//             }
//         })
//             .then(data => data.json())
//             .then(data => {
//                 removeTicketFromRedux(data.id)
//                 hideRemoveNotice()
//                 setNum(0)
//             }).catch(e => e.message)
//     }
//
//
//     return (
//         <div className="wrapper-user-tickets-block_mod">
//             <div className="user-tickets-block_mod user-tickets-block_mod_slide">
//                 {
//                     removeNotice && <NoticeRemoveBlock hideRemoveNotice={hideRemoveNotice} removeTicket={removeTicket}/>
//                 }
//                 {
//                     (!isAuth) ?
//                         <div className='relocation-block' style={{animationName: animationStyle}}>
//                             <Link to={'/login'}>Please Login!</Link>
//                         </div> :
//                         (tickets.length) ?
//                             <div>
//                                 {tickets.map((el, index) => (
//                                     <Ticket
//                                         key={el.id}
//                                         dataId={index}
//                                         dataNumber={el.id}
//                                         el={el}
//                                         index={index}
//                                         numberOfSlide={num}
//                                         cls={active(index, num)}
//                                         btnClassActive={showBtnClass(index, num)}
//                                         removeTicketNotice={showRemoveNotice}
//                                     />
//                                 ))}
//                                 <ArrowsTicketsBlock prevSlide={prevSlide} nextSlide={nextSlide}/>
//                             </div>
//                             : <h1>Nothing</h1>
//                 }
//             </div>
//         </div>
//     )
// }