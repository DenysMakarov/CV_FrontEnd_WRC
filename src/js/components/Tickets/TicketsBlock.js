import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserTicketsBlock from "./UserTiketsBlock";
import EventNavigation from "./EventNavigation";
import Form from "./Form";
import {setSlide} from "../../redux/actions/eventsActions";
import {addTicket} from "../../redux/actions/ticketsActions";

const TicketsBlock = () => {
    const [event, setEvent] = useState(null)
    const [eventId, setEventId] = useState(0)
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
    }, [listEvents.length])

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
        return !(!firstName || !secondName || !phoneNumber || !event)
        // setValidation(!(!firstName || !secondName || !phoneNumber || !event))
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
            }, 50)
        }
    }
    const buyTicket = (e) => {
        e.preventDefault();
        changeAnimationBtnLogin()

        const valid = handleValidation()
        console.log(validation)

        if (!isAuth || !valid || event == null) return
        // if(!validation) return;
        // if (event == null) return;

        dispatch(addTicket(userDetails, event))
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
