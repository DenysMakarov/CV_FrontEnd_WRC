import {ADD_TICKET, GET_ALL_TICKETS, REMOVE_TICKET} from "../../types";

export function addTicketAction(ticket) {
    return {
        type: ADD_TICKET,
        payload: ticket
    }
}

export const addTicket = (userDetails, event) => (dispatch) => {
    const token = localStorage.getItem('token')



    fetch(`http://localhost:8080/user/tickets/${userDetails.login}/${event['id']}`, {
        method: 'put',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(data => data.json())
        .then((data) => {
            console.log(data)
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