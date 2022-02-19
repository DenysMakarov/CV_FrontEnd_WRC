import {ADD_TICKET, REMOVE_TICKET, GET_ALL_TICKETS} from "../../types";


const initiallyState = {
    tickets: [

    ]
}

export const ticketsReducer = (state = initiallyState, action) => {

    switch (action.type) {
        case ADD_TICKET :
            return {...state, tickets: state.tickets.concat(action.payload)}
        case REMOVE_TICKET :
            return {
                ...state, tickets: state.tickets.filter(e => e.id !== action.payload)
        }
        case GET_ALL_TICKETS :
            return {...state, tickets: action.payload}
        default:
            return state
    }
}