import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import Ticket from "./Ticket";
import NoticeRemoveBlock from "./NoticeRemoveBlock";
import ArrowsTicketsBlock from "./ArrowsTicketsBlock";
import {Link} from "react-router-dom";
import {removeTicket} from "../../redux/actions/ticketsActions";


const UserTicketsBlock = ({animationStyle}) => {
    const {userDetails} = useSelector(state => state.userDetailsReducer)
    const {isAuth} = useSelector(state => state.isAuthReducer)
    const [num, setNum] = useState(0)
    const {tickets} = useSelector(state => state.ticketsReducer)
    const [removeNotice, setRemoveNotice] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {

    }, [userDetails])


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
                                    <div key={el.id + index}>
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
                                    </div>

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
