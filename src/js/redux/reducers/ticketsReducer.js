import {ADD_TICKET, REMOVE_TICKET} from "../../types";


const initiallyState = {
    arrTickets: [

    ]
}

export const ticketsReducer = (state = initiallyState, action) => {

    switch (action.type) {
        case ADD_TICKET :
            return {...state, arrTickets: state.arrTickets.concat(action.payload)}
        case REMOVE_TICKET :
            return {
            userDetails: {
                ...state, arrTickets: state.arrTickets.filter(e => e.id !== action.payload)
            }
        }
        default:
            return state
    }
}