import {GET_USERS, SET_USERS} from "../../types";


const initiallyState = {
        users: []
}

export const usersReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case GET_USERS :
            return {...state, users: state.users.concat(action.payload)}
        case SET_USERS :
            return {...state, users: state.users.concat(action.payload)}
        default:
            return state
    }
}