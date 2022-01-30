import {
    SET_USERS,
    VALID,
    INVALID,
    LOGIN,
    LOGOUT,
    ADD_TICKET,
    REMOVE_TICKET,
    NEXT_SLIDE,
    PREV_SLIDE,
    SET_SLIDE, REMOVE_USER, ADD_USER, SET_SLIDES,

} from "../../types"

export function showHideMenu(typeText) {
    return {
        type: typeText
    }
}

export function nextSlide() {
    return {
        type: NEXT_SLIDE,
    }
}

export function prevSlide() {
    return {
        type: PREV_SLIDE,
    }
}

export function setSlide(num) {
    return {
        type: SET_SLIDE,
        payload: num
    }
}

export function setSlides(arr) {
    return {
        type: SET_SLIDES,
        payload: arr
    }
}

export function validForm() {
    return {
        type: VALID,
    }
}
export function inValidForm() {
    return {
        type: INVALID,
    }
}

export function setUsers(user) {
    return {
        type:SET_USERS,
        payload: user
    }
}

export function logIn() {
    return {
        type: LOGIN,
    }
}

export function logOut() {
    return {
        type:LOGOUT,
    }
}

export function addTicket(ticket) {
    return {
        type: ADD_TICKET,
        payload: ticket
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}
export function removeUser() {
    return {
        type: REMOVE_USER,
        payload: {}
    }
}


