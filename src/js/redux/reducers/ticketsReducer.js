import {ADD_TICKET, REMOVE_TICKET} from "../../types";


const initiallyState = {
    arrTickets: [

    ]
}

export const ticketsReducer = (state = initiallyState, action) => {

    switch (action.type) {
        case ADD_TICKET :
            return {...state, arrTickets: state.arrTickets.concat(action.payload)}
        default:
            return state
    }
}