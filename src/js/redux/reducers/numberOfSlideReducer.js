import {NEXT_SLIDE, SET_EVENTS} from "../../types";
import {PREV_SLIDE} from "../../types";
import {SET_SLIDE} from "../../types";
import {NUMBER_OF_SLIDE} from "../../types"
import {eventInfo} from "../../db/dataBase";


const initiallyState = {
    numberOfSlide: 0,
    listEvents: []
    // listEvents: fetch("http://localhost:8080/events/events")
    //     .then(data => data.json())
    //     .then((data) => {
    //         // console.log(data)
    //         return data
    //     })
}

export const numberOfSlideReducer = (state = initiallyState, action) => {
    // console.log(state.numberOfSlide)
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
// export const numberOfSlideReducer = (state = initiallyState, action) => {
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
