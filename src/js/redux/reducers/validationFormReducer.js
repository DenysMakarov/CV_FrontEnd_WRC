import {VALID, INVALID} from "../../types";

const initiallyState = {
    validation: false
}

export const validationFormReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case VALID :
            return {validation: true}
        case INVALID :
            return {validation: false}
        default:
            return state
    }
}