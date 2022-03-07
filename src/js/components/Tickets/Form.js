import React from 'react';
import Input from "./Input";
import Btn from "./Btn";
import EventDesc from "./EventDesc";

const Form = ({firstName, secondName, phoneNumber, getValueFromInput, byTicketFun, handleValidation}) => {
    return (
        <form className="ticket_form" action="">
            <Input  getValueFromInput={getValueFromInput} valueOfData={firstName} name="firstName" textLabel='First name'/>
            <Input  getValueFromInput={getValueFromInput} valueOfData={secondName} name="secondName" textLabel='Second name'/>
            <Input  getValueFromInput={getValueFromInput} valueOfData={phoneNumber} name="phoneNumber" textLabel='Phone number'/>
            <EventDesc/>
            <Btn handleValidation={handleValidation} byTicketFun={byTicketFun}/>
        </form>
    );
};

export default Form;












{/*<label htmlFor="firstName">First Name</label>*/
}
{/*<input id="input_ticket_first_name"*/
}
{/*       className="input_ticket input_ticket_first_name"*/
}
{/*       onChange={getValueFromInput}*/
}
{/*       name="firstName"*/
}
{/*       value={firstName}*/
}
{/*       type="text"/>*/
}
{/*<label htmlFor="secondName">Second Name</label>*/
}
{/*<input id="input_ticket_second_name"*/
}
{/*       className="input_ticket input_ticket_second_name"*/
}
{/*       onChange={getValueFromInput}*/
}
{/*       name="secondName"*/
}
{/*       value={secondName}*/
}
{/*       type="text"/>*/
}
{/*<label htmlFor="phoneNumber">Phone Number</label>*/
}
{/*<input id="input_ticket_phoneNumber"*/
}
{/*       className="input_ticket input_ticket_phoneNumber"*/
}
{/*       onChange={getValueFromInput}*/
}
{/*       name="phoneNumber"*/
}
{/*       value={phoneNumber}*/
}
{/*       type="text"/>*/
}

{/*<button*/
}
{/*    onClick={this.createTicket}*/
}
{/*    type="submit"*/
}
{/*    id="btn_ticket_form"*/
}
{/*    className="btn_ticket_form">Buy Ticket*/
}
{/*</button>*/
}