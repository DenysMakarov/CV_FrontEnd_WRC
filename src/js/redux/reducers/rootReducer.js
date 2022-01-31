import {combineReducers} from "redux";
import {numberOfSlideReducer} from "./numberOfSlideReducer"
import {usersReducer} from "./usersReducer";
import {validationFormReducer} from "./validationFormReducer"
import {isAuthReducer} from "./isAuthReducer";
import {ticketsReducer} from "./ticketsReducer";
import {userDetailsReducer} from "./userDetailsReducer";
import IsLoadingEventsReducer from "./isLoadingEventsReducer";

export const rootReducer = combineReducers({
    numberOfSlideReducer,
    usersReducer,
    validationFormReducer,
    isAuthReducer,
    ticketsReducer,
    userDetailsReducer,
    IsLoadingEventsReducer
})