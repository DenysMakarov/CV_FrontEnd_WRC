import {LOGIN, LOGOUT} from "../../utils/types";

export function logIn() {
    return {
        type: LOGIN,
    }
}

export function logOut() {
    return {
        type: LOGOUT,
    }
}
