import {LOGIN, LOGOUT} from "../../types";


const initiallyState = {
    isAuth: false
}

export const isAuthReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case LOGIN :
            return {...state, isAuth: true}
        case LOGOUT :
            return {...state, isAuth: false}
        default :
            return state
    }
}