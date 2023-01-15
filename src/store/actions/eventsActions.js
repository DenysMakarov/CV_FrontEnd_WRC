import {NEXT_SLIDE, PREV_SLIDE, SET_EVENTS, SET_SLIDE} from "../../utils/types";


export const setEvents = (events) => {
    return {
        type: SET_EVENTS,
        payload: events
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

export const getEvents = () => async (dispatch) => {
    try {
        const event = await fetch("http://localhost:8080/events/events")
        const data = await event.json()
        dispatch(setEvents(data))
    } catch (e) {
        // dispatch(error)
    }
}