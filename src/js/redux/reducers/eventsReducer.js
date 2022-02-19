import {IS_ERROR_FALSE, IS_ERROR_TRUE, NEXT_SLIDE, SET_EVENTS} from "../../types";
import {PREV_SLIDE} from "../../types";
import {SET_SLIDE} from "../../types";
import {NUMBER_OF_SLIDE} from "../../types"
import {eventInfo} from "../../db/dataBase";


const initiallyState = {
    numberOfSlide: 0,
    listEvents: [],
    error: true
}

export const eventsReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case NEXT_SLIDE :
            if (state.numberOfSlide < state.listEvents.length - 1) {
                return {
                    ...state, numberOfSlide: state.numberOfSlide + 1
                };
            } else {
                return {
                    ...state, numberOfSlide: 0
                };
            }

        case PREV_SLIDE :
            if (state.numberOfSlide > 0) {
                return {
                    ...state, numberOfSlide: state.numberOfSlide - 1
                };
            } else {
                return {
                    ...state, numberOfSlide: state.listEvents.length - 1
                };
            }
        case SET_SLIDE :
            return {
                ...state, numberOfSlide: action.payload
            }
        case SET_EVENTS :
            return {
                ...state, listEvents: action.payload
            }
        default :
            return state

    }
}
//
// const initiallyState = {
//     numberOfSlide: 0,
//     listEvents: listEvents
// }
//
// export const eventsReducer = (state = initiallyState, action) => {
//     switch (action.type) {
//         case NEXT_SLIDE :
//             if (state.numberOfSlide < listEvents.length - 1){
//                 return {
//                     ...state, numberOfSlide : state.numberOfSlide + 1
//                 };
//             } else {
//                 return {
//                     ...state, numberOfSlide : 0
//                 };
//             }
//
//         case PREV_SLIDE :
//             if (state.numberOfSlide > 0){
//                 return {
//                     ...state, numberOfSlide : state.numberOfSlide - 1
//                 };
//             } else {
//                 return {
//                     ...state, numberOfSlide : listEvents.length - 1
//                 };
//             }
//         case SET_SLIDE :
//             return {
//                 ...state, numberOfSlide : action.payload
//             }
//         default :
//             return state
//
//     }
// }
