import {ADD_USER, REMOVE_USER} from "../../types";


const initiallyState = {
    userDetails: {
        // login: '',
        // username: '',
        // email: '',
        // password: '',
        // phoneNumber: '',
        // roles: '',
        // birthDate: '',
        // tickets: []
    }
}

export const userDetailsReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case ADD_USER : return {...state, userDetails: Object.assign({}, action.payload) }
        case REMOVE_USER : return {...state, userDetails: {}}
        default : return state
    }
}