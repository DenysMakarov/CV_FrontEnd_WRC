import {ADD_TICKET, REMOVE_TICKET} from "../../types";


const initiallyState = {
    arrTickets: [
        {
            dateOfEvent: "05 March, 2019",
            nameTicket: "FIA WRC",
            firstName: "Jhon",
            secondName: "Richworth",
            phoneNumber: "9347629438",
            placeOfEvent: "OAE",
            price: "110 EUR",
            passed: true,
            month: 5,
            year: 2019,
            id: 0
        },
        {
            dateOfEvent: "11 July, 2019",
            nameTicket: "DACAR",
            firstName: "Sonya",
            secondName: "Velasces",
            phoneNumber: "8479470-02",
            placeOfEvent: "Spanish",
            price: "750 EUR",
            passed: true,
            month: 7,
            year: 2019,
            id: 1
        },
        {
            dateOfEvent: "11 June, 2019",
            nameTicket: "F1",
            firstName: "Antonio",
            secondName: "Alecsa",
            phoneNumber: "8470374798",
            placeOfEvent: "Monte Carlo",
            price: "2500 EUR",
            passed: true,
            month: 6,
            year: 2019,
            id: 2
        }
    ]
}

export const ticketsReducer = (state = initiallyState, action) => {

    switch (action.type) {
        case ADD_TICKET :
            return {...state, arrTickets: state.arrTickets.concat(action.payload)}
        default:
            return state
    }
}