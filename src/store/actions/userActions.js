import {ADD_USER, REMOVE_USER, SET_USERS} from "../../utils/types";
import {logIn} from "./isAuthActions";
import {getAllTicketsAction} from "./ticketsActions";

export function setUsers(user) {
    return {
        type: SET_USERS,
        payload: user
    }
}

export function addUserAction(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

export function removeUser() {
    return {
        type: REMOVE_USER
    }
}

export const authUser = () => (dispatch) => {
    const token = localStorage.getItem('token')
    if (token) {
        fetch("http://localhost:8080/login", {
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then(data => data.json())
            .then(data => {
                dispatch(addUserAction(data))
                dispatch(logIn())
                dispatch(getAllTicketsAction(data['tickets']))
            })
    }
}