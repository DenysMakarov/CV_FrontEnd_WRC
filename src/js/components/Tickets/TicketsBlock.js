import React from 'react';
import {eventInfo} from "../../db/dataBase";
import {connect} from "react-redux";
import {addTicket} from "../../redux/actions/actions";
import YourTicketsBlock from "./YourTickets";
import PropTypes from "prop-types"
import TicketsOptions from "./TicketsOptions";


const mapStateToProps = (state) => {
    return {
        tickets: state.ticketsReducer
    }
}

const mapDispatchToProps = {
    addTicket,
}

class TicketsBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfSlide: 1,
            firstName: "",
            secondName: "",
            phoneNumber: "",
            date: "You need to select event",
            place: "",
            nameTicket: "CHOOSE EVENT",
            month: ""
        }
    }

    getValueFromInput = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    setAnimationAndGetInformOfTicket = (e) => {
        this.setState({
            nameTicket: e.target.innerText,
            numberOfSlide: e.target.dataset.number,
            date: eventInfo[this.state.numberOfSlide - 1].date,
            place: eventInfo[this.state.numberOfSlide - 1].place,
            month: eventInfo[this.state.numberOfSlide - 1].month,

        })

        const informImg = document.getElementById("inform_img")
        const dateOfEvent = document.getElementById("date_of_event")
        const ticketFormTitle = document.getElementById("ticket_form_title")
        const arrOptionTitleText = Array.from(document.getElementsByClassName("tickets_option_title"))

        for (let i = 0; i < arrOptionTitleText.length; i++) {
            (arrOptionTitleText[i].dataset.number === e.target.dataset.number) ? arrOptionTitleText[i].style.color = "red" : arrOptionTitleText[i].style.color = "#ffffff"
        }


        informImg.style.animationName = "none"
        dateOfEvent.style.animationName = "none"
        ticketFormTitle.style.animationName = "none"

        setTimeout(() => {
            informImg.style.animationName = "ticket_slide_appear"
            dateOfEvent.style.animationName = "ticket_date_appear"
            ticketFormTitle.style.animationName = "ticket_form_title_appear"
        }, 100)

        ticketFormTitle.style.color = "white"
    }

    createTicket = (e) => {
        e.preventDefault()
        const {firstName, nameTicket, secondName, phoneNumber} = this.state
        const ticketInfo = {
            firstName: firstName,
            nameTicket: nameTicket,
            secondName: secondName,
            phoneNumber: phoneNumber,
            placeOfEvent: eventInfo[this.state.numberOfSlide - 1].place,
            dateOfEvent: eventInfo[this.state.numberOfSlide - 1].date,
            monthOfDate: eventInfo[this.state.numberOfSlide - 1].month,
            id: this.props.tickets.arrTickets.length
        }
        const InputFirstName = document.getElementById("input_ticket_first_name")
        const InputSecondName = document.getElementById("input_ticket_second_name")
        const InputPhoneNumber = document.getElementById("input_ticket_phoneNumber")
        const TicketTitle = document.getElementById("ticket_form_title")


        if (firstName !== "" && secondName !== "" && nameTicket !== "" && nameTicket !== "CHOOSE EVENT" && phoneNumber !== "") {
            this.props.addTicket(ticketInfo)
            this.setState({
                firstName: "",
                secondName: "",
                phoneNumber: ""
            })
        }

        (firstName === "") ? InputFirstName.style.border = "2px solid red" : InputFirstName.style.border = "2px solid transparent";
        (secondName === "") ? InputSecondName.style.border = "2px solid red" : InputSecondName.style.border = "2px solid transparent";
        (phoneNumber === "") ? InputPhoneNumber.style.border = "2px solid red" : InputPhoneNumber.style.border = "2px solid transparent";
        (nameTicket === "CHOOSE EVENT") ? TicketTitle.style.color = "red" : TicketTitle.style.color = "white";
    }


    render() {
        return (
            <div className="tickets_block_cover ">
                <div className="tickets_block">
                    <div className="left_pixel_decoration"/>

                    <div className="tickets_events">
                        {eventInfo.map((el) => (
                            <div data-name={el.textBottom} key={el.imgPath} className="tickets_option_cover">
                                <div className="tickets_option">
                                    <h5 onClick={this.setAnimationAndGetInformOfTicket} data-number={el.numberId}
                                        className="tickets_option_text">{el.textBottom}</h5>
                                </div>
                                <p data-number={el.numberId} className="tickets_option_title">{el.textBottom}</p>
                            </div>
                        ))}
                    </div>

                    <form id="ticket_form" className="ticket_form" action="">
                        <label htmlFor="firstName">First Name</label>
                        <input id="input_ticket_first_name"
                               className="input_ticket input_ticket_first_name"
                               onChange={this.getValueFromInput}
                               name="firstName"
                               value={this.state.firstName}
                               type="text"/>
                        <label htmlFor="secondName">Second Name</label>
                        <input id="input_ticket_second_name"
                               className="input_ticket input_ticket_second_name"
                               onChange={this.getValueFromInput}
                               name="secondName"
                               value={this.state.secondName}
                               type="text"/>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input id="input_ticket_phoneNumber"
                               className="input_ticket input_ticket_phoneNumber"
                               onChange={this.getValueFromInput}
                               name="phoneNumber"
                               value={this.state.phoneNumber}
                               type="text"/>


                        <h3 id="date_of_event" className="date_of_event">{eventInfo[this.state.numberOfSlide - 1].date}
                            <br/> {eventInfo[this.state.numberOfSlide - 1].place}</h3>
                        <div id="inform_img" className="inform_img" style={{
                            backgroundImage: eventInfo[this.state.numberOfSlide - 1].imgPath
                        }}/>
                        <h1 id="ticket_form_title" className="ticket_form_title">{this.state.nameTicket}</h1>
                        <button
                            onClick={this.createTicket}
                            type="submit"
                            id="btn_ticket_form"
                            className="btn_ticket_form">Buy Ticket
                        </button>
                    </form>
                    <YourTicketsBlock arrTickets = {this.props.tickets.arrTickets}/>
                </div>
            </div>

        )
    }
}

TicketsBlock.propTypes = {
    tickets: PropTypes.shape({
        arrTickets: PropTypes.array
    }),
    addTicket : PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsBlock)