import {
    SET_USERS,
    VALID,
    INVALID,
    LOGIN,
    LOGOUT,
    ADD_TICKET,
    REMOVE_TICKET,
    NEXT_SLIDE,
    PREV_SLIDE,
    SET_SLIDE,
    REMOVE_USER,
    ADD_USER,
    SET_EVENTS,
    IS_ERROR,
    IS_ERROR_TRUE,
    IS_ERROR_FALSE,
    LOADING_EVENTS,
    LOADING_EVENTS_DONE, GET_ALL_TICKETS,

} from "../../types"

export function showHideMenu(typeText) {
    return {
        type: typeText
    }
}

export function nextSlide() {
    return {
        type: NEXT_SLIDE,
    }
}

export function prevSlide() {
    return {
        type: PREV_SLIDE,
    }
}

export function setSlide(num) {
    return {
        type: SET_SLIDE,
        payload: num
    }
}

export function dispatchEvents(arr) {
    return {
        type: SET_EVENTS,
        payload: arr
    }
}

export function isErrorTrue() {
    return {
        type: IS_ERROR_TRUE
    }
}

export function isErrorFalse() {
    return {
        type: IS_ERROR_FALSE
    }
}

export function loadingEvents() {
    return {
        type: LOADING_EVENTS
    }
}

export function loadingEventsDone() {
    return {
        type: LOADING_EVENTS_DONE
    }
}

export function validForm() {
    return {
        type: VALID
    }
}

export function inValidForm() {
    return {
        type: INVALID
    }
}

export function setUsers(user) {
    return {
        type: SET_USERS,
        payload: user
    }
}

export function logIn() {
    return {
        type: LOGIN,
    }
}

export function logOut() {
    return {
        type: LOGOUT,
    }
}

export function addTicketAction(ticket) {
    return {
        type: ADD_TICKET,
        payload: ticket
    }
}

export const addTicket = (userDetails, event) => (dispatch) => {
    const token = localStorage.getItem('token')

    fetch(`http://localhost:8080/user/tickets/${userDetails.username}/${event['id']}`, {
        method: 'put',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(data => data.json())
        .then((data) => {
            dispatch(addTicketAction(data))
        })
        .catch(e => e.message)
}

export function removeTicketAction(id) {
    return {
        type: REMOVE_TICKET,
        payload: id
    }
}

export const removeTicket = (login, ticketId) => (dispatch) => {
    const token = localStorage.getItem('token')
    fetch(`http://localhost:8080/ticket/remove/${login}/${ticketId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    })
        .then(data => data.json())
        .then(data => {
            dispatch(removeTicketAction(data.id))
            // hideRemoveNotice()
            // setNum(0)
        }).catch(e => e.message)
}

export const getAllTicketsAction = (tickets) => {
    return {
        type: GET_ALL_TICKETS,
        payload: tickets
    }
}


export function addUserAction(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const authUser = () => (dispatch) => {
    const token = localStorage.getItem('token')
    if (token) {
        fetch("http://localhost:8080/login", {
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then(data => data.json())
            .then(data => {
                dispatch(addUserAction(data))
                dispatch(logIn())
                dispatch(getAllTicketsAction(data['tickets']))
            })
    }
}

export const setEvents = (events) => {
    return {
        type: SET_EVENTS,
        payload: events
    }
}

export const getEvents = () => async (dispatch) => {
    try {
        const event = await fetch("http://localhost:8080/events/events")
        const data = await event.json()
        dispatch(setEvents(data))
    } catch (e) {
        // dispatch(error)
    }

}


export function removeUser() {
    return {
        type: REMOVE_USER
    }
}


