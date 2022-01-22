import {LOGIN, LOGOUT} from "../../types";


const initiallyState = {
    login: false
}

export const isAuthReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case LOGIN :
            return {...state, login: true}
        case LOGOUT :
            return {...state, login: false}
        default :
            return state
    }
}