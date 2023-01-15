import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegistrationPanel from "../cmps/Registration/RegistrationPanel";
import SliderBlock from "../cmps/SliderBlock/SliderBlock";
import ContactsBlock from "../cmps/Contacts/ContactsBlock";
import TicketsBlock from "../cmps/Tickets/TicketsBlock";
import Events from "../cmps/Events/Events";
import Portfolio from "../cmps/Portfolio/Portfolio";



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SliderBlock} />
            <Route path="/login" component={RegistrationPanel}/>
            <Route path="/contacts" component={ContactsBlock} />
            <Route path="/tickets" component={TicketsBlock} />
            <Route path="/events" component={Events} />
            <Route path="/portfolio" component={Portfolio}/>
            <Route path='/*' component={RegistrationPanel} />
        </Switch>
    )
}

export default Routes