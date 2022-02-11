import {ADD_TICKET, ADD_TICKET_IN_CASE, ADD_USER, REMOVE_TICKET, REMOVE_USER} from "../../types";


const initiallyState = {
    userDetails: {}
}

export const userDetailsReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case ADD_USER : return {userDetails: Object.assign({}, action.payload) }
        case REMOVE_USER : return {userDetails: {}}
        case ADD_TICKET: return {userDetails: {...state.userDetails, tickets: action.payload}}
        case REMOVE_TICKET: return {
            userDetails: {
                ...state.userDetails,
                tickets: state.userDetails.tickets.filter(e => e.id != action.payload)
            }
        }
        default : return state
    }
}