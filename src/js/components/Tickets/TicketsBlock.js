import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { setSlide} from "../../redux/actions/actions";
import UserTicketsBlock from "./UserTiketsBlock";
import EventNavigation from "./EventNavigation";
import Form from "./Form";
import {ADD_TICKET, SET_EVENTS} from "../../types";

const TicketsBlock = () => {
    const [event, setEvent] = useState(null)
    const [eventsId, setEventId] = useState(0)
    const [owner, setOwner] = useState({
        firstName: "",
        secondName: "",
        phoneNumber: "",
    })
    const [validation, setValidation] = useState(false)
    const [animationStyle, setAnimationStyle] = useState('clear')

    const {userDetails} = useSelector(state => state.userDetailsReducer)
    const {listEvents, numberOfSlide} = useSelector(state => state.numberOfSlideReducer)
    const {isAuth} = useSelector(state => state.isAuthReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        setEvent(listEvents[numberOfSlide])
    }, [])

    const getValueFromInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setOwner({
            ...owner,
            [name]: value
        })
    }

    const handleValidation = () => {
        const {firstName, secondName, phoneNumber} = owner;
        setValidation((!(!firstName || !secondName || !phoneNumber || !event )))
    }

    const createTicket = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(setSlide(e.currentTarget.dataset.id - 1))
        setEvent(listEvents[e.currentTarget.dataset.id - 1])
        setEventId(listEvents[e.currentTarget.dataset.id - 1].id)
    }

    const changeAnimationBtnLogin = () => {
        if (!isAuth) {
            setAnimationStyle('clear')
            setTimeout(() => {
                setAnimationStyle('ticket-btn-login')
            }, 100)
        }
    }

    const buyTicket = (e) => {
        e.preventDefault();
        handleValidation(e);
        changeAnimationBtnLogin()
        if (!isAuth) return
        // if(!validation) return;

        const token = localStorage.getItem('token')
        if (event == null) return;
        fetch(`http://localhost:8080/user/tickets/${userDetails.username}/${event['id']}`, {
            method: 'put',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(data => data.json())
            .then((data) => {
                let tickets = [...userDetails.tickets, data]
                dispatch({type: ADD_TICKET, payload: tickets})
            })
            .catch(e => e.message)
    }

    return (
        <div className="tickets_block_cover ">
            <div className="tickets_block">
                <div className="left_pixel_decoration"/>

                {!listEvents.length && <h1>Loading</h1>}

                <EventNavigation events={listEvents} createTicket={createTicket}/>

                <Form firstName={owner.firstName}
                      secondName={owner.secondName}
                      phoneNumber={owner.phoneNumber}
                      getValueFromInput={getValueFromInput}
                      events={listEvents}
                      byTicketFun={buyTicket}
                />

                <UserTicketsBlock animationStyle={animationStyle}/>
            </div>
        </div>
    )
}
export default TicketsBlock
