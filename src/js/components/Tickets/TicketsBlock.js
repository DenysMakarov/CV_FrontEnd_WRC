import React from 'react';
import {eventInfo} from "../../db/dataBase";
import {connect, useDispatch, useSelector} from "react-redux";
import {addTicket, setSlide} from "../../redux/actions/actions";
import YourTicketsBlock from "./UserTiketsBlock";
import PropTypes from "prop-types"
import {numberOfSlideReducer} from "../../redux/reducers/numberOfSlideReducer";
import EventNavigation from "./EventNavigation";
import Form from "./Form";


const mapStateToProps = (state) => {
    return {
        tickets: state.ticketsReducer,
        events: state.numberOfSlideReducer.listEvents,
        userDetails: state.userDetailsReducer.userDetails,
        num: state.numberOfSlideReducer.numberOfSlide,
    }
}


const mapDispatchToProps = {
    addTicket,
    setSlide
}

class TicketsBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfSlide: 1,
            firstName: "",
            secondName: "",
            phoneNumber: "",
            event: null,
            eventsId: 0,
            validation: false,
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
            numberOfSlide: e.target.dataset.id,
        })

        const informImg = document.getElementById("inform_img")
        const dateOfEvent = document.getElementById("date_of_event")
        const ticketFormTitle = document.getElementById("ticket_form_title")
        const arrOptionTitleText = Array.from(document.getElementsByClassName("tickets_option_title"))

        for (let i = 0; i < arrOptionTitleText.length; i++) {
            (arrOptionTitleText[i].dataset.id === e.target.dataset.id) ? arrOptionTitleText[i].style.color = "red" : arrOptionTitleText[i].style.color = "#ffffff"
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

    handleValidation = () => {
        const {firstName, secondName, phoneNumber, event} = this.state
        this.setState({
            validation: (!(!firstName || !secondName || !phoneNumber || event == null))
        })

    }
    // ticket_slide_appear

    createTicket = (e) => {
        e.preventDefault()
        this.props.setSlide(e.currentTarget.dataset.id-1)


        fetch(`http://localhost:8080/event/${e.currentTarget.dataset.id}`)
            .then(data => data.json())
            .then(data => this.setState({
                    event: data,
                    eventsId: data.id
                })
            )
            .catch(e => e.message)
    }

    buyTicket = async (e) => {
        e.preventDefault();
        await this.handleValidation(e);
        await (this.state.validation) ? console.log(this.state.validation) : console.log(this.state.validation);


        // const token = localStorage.getItem('token')
        // if (this.state.event == null) return;
        // fetch(`http://localhost:8080/user/tickets/${this.props.userDetails.username}/${this.state.event['id']}`, {
        //     method: 'put',
        //     headers: {
        //         'Authorization': token,
        //         'Content-Type': 'application/json;charset=utf-8'
        //     }
        // })
        //     .then(data => console.log(data))
        //     .catch(e => e.message)
    }

    render() {
        return (
            <div className="tickets_block_cover ">
                <div className="tickets_block">
                    <div className="left_pixel_decoration"/>

                    {!this.props.events.length && <h1>Loading</h1>}

                    <EventNavigation events={this.props.events} createTicket={this.createTicket}/>

                    <Form firstName={this.state.firstName}
                          secondName={this.state.secondName}
                          phoneNumber={this.state.phoneNumber}
                          getValueFromInput={this.getValueFromInput}
                          events={this.props.events}
                          byTicketFun={this.buyTicket}
                    />
                    {/*<button onClick={this.handleValidation}>CLICK</button>*/}

                    <YourTicketsBlock arrTickets={this.props.tickets.arrTickets}/>
                </div>
            </div>
        )
    }
}

TicketsBlock.propTypes = {
    tickets: PropTypes.shape({
        arrTickets: PropTypes.array
    }),
    addTicket: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsBlock)


{/*<form id="ticket_form" className="ticket_form" action="">*/
}
{/*<label htmlFor="firstName">First Name</label>*/
}
{/*<input id="input_ticket_first_name"*/
}
{/*       className="input_ticket input_ticket_first_name"*/
}
{/*       onChange={this.getValueFromInput}*/
}
{/*       name="firstName"*/
}
{/*       value={this.state.firstName}*/
}
{/*       type="text"/>*/
}
{/*<label htmlFor="secondName">Second Name</label>*/
}
{/*<input id="input_ticket_second_name"*/
}
{/*       className="input_ticket input_ticket_second_name"*/
}
{/*       onChange={this.getValueFromInput}*/
}
{/*       name="secondName"*/
}
{/*       value={this.state.secondName}*/
}
{/*       type="text"/>*/
}
{/*<label htmlFor="phoneNumber">Phone Number</label>*/
}
{/*<input id="input_ticket_phoneNumber"*/
}
{/*       className="input_ticket input_ticket_phoneNumber"*/
}
{/*       onChange={this.getValueFromInput}*/
}
{/*       name="phoneNumber"*/
}
{/*       value={this.state.phoneNumber}*/
}
{/*       type="text"/>*/
}


{/*<h3 id="date_of_event" className="date_of_event">{eventInfo[this.state.numberOfSlide - 1].date}*/
}
{/*    <br/> {eventInfo[this.state.numberOfSlide - 1].place}</h3>*/
}
{/*<div id="inform_img" className="inform_img" style={{*/
}
{/*    backgroundImage: eventInfo[this.state.numberOfSlide - 1].imgPath*/
}
{/*}}/>*/
}
{/*<h1 id="ticket_form_title" className="ticket_form_title">{this.state.nameTicket}</h1>*/
}


{/*    <button*/
}
{/*        onClick={this.createTicket}*/
}
{/*        type="submit"*/
}
{/*        id="btn_ticket_form"*/
}
{/*        className="btn_ticket_form">Buy Ticket*/
}
{/*    </button>*/
}
{/*</form>*/
}

// createTicket = (e) => {
//     e.preventDefault()
//     // console.log(e.currentTarget.dataset.id)
//
//     const {firstName, nameTicket, secondName, phoneNumber} = this.state
//         // const ticketInfo = {
//         //     firstName: firstName,
//         //     nameTicket: nameTicket,
//         //     secondName: secondName,
//         //     phoneNumber: phoneNumber,
//         //     placeOfEvent: eventInfo[this.state.numberOfSlide - 1].place,
//         //     dateOfEvent: eventInfo[this.state.numberOfSlide - 1].date,
//         //     monthOfDate: eventInfo[this.state.numberOfSlide - 1].month,
//         //     id: this.props.tickets.arrTickets.length
//         // }
//         // const InputFirstName = document.getElementById("input_ticket_first_name")
//         // const InputSecondName = document.getElementById("input_ticket_second_name")
//         // const InputPhoneNumber = document.getElementById("input_ticket_phoneNumber")
//         // const TicketTitle = document.getElementById("ticket_form_title")
//         //
//         //
//         // if (firstName !== "" && secondName !== "" && nameTicket !== "" && nameTicket !== "CHOOSE EVENT" && phoneNumber !== "") {
//         //     this.props.addTicket(ticketInfo)
//         //     this.setState({
//         //         firstName: "",
//         //         secondName: "",
//         //         phoneNumber: ""
//         //     })
//         // }
//
//
//         (this.firstName === "") ? InputFirstName.style.border = "2px solid red" : InputFirstName.style.border = "2px solid transparent";
//     (this.secondName === "") ? InputSecondName.style.border = "2px solid red" : InputSecondName.style.border = "2px solid transparent";
//     (this.phoneNumber === "") ? InputPhoneNumber.style.border = "2px solid red" : InputPhoneNumber.style.border = "2px solid transparent";
//     // (nameTicket === "CHOOSE EVENT") ? TicketTitle.style.color = "red" : TicketTitle.style.color = "white";
//
//     fetch(`http://localhost:8080/event/${e.currentTarget.dataset.id}`)
//         .then(data => data.json())
//         .then(data => this.setState({
//                 event: data
//             })
//         )
//         .catch(e => e.message)
// }
