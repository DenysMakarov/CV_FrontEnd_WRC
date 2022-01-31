import React from 'react';
import {LOADING_EVENTS, LOADING_EVENTS_DONE} from "../../types";

const initiallyState = {
    loading: true
}

const IsLoadingEventsReducer = (state = initiallyState, action) => {
    switch (action.type){
        case (LOADING_EVENTS) :
            return {...state, loading : true}
        case (LOADING_EVENTS_DONE) :
            return {...state, loading: false}
        default : return state
    }
};

export default IsLoadingEventsReducer;