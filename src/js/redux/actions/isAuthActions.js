import {LOGIN, LOGOUT} from "../../types";

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
