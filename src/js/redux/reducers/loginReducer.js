import {LOGIN, LOGOUT} from "../../types";


const initiallyState = {
    login: false
}

export const loginReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case LOGIN :
            return {...state, login: true}
        case LOGOUT :
            return {...state, login: false}
        default :
            return state
    }
}