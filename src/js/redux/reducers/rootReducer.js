import {combineReducers} from "redux";
import {numberOfSlideReducer} from "./numberOfSlideReducer"
import {usersReducer} from "./usersReducer";
import {validationFormReducer} from "./validationFormReducer"
import {loginReducer} from "./loginReducer";
import {ticketsReducer} from "./ticketsReducer";
import {isAuthUser} from "./isAuthUser";

export const rootReducer = combineReducers({
    numberOfSlideReducer,
    usersReducer,
    validationFormReducer,
    loginReducer,
    ticketsReducer,
    isAuthUser
})