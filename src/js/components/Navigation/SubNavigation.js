import React from 'react';
import {subMenu} from "../../db/dataBase";
import {createSubMenu} from "../Navigation/CreateSubMenu"

class SubNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    linkColorDisable = () => { // need to change as an active class
        const arrTextHeaderOfMenu = Array.from(document.getElementsByClassName("text_of_headers_menu"))
        arrTextHeaderOfMenu.map(el => el.style.color = "#ffffff")
    }

    render() {

        const {home, events, tickets, portfolio, contacts, Login} = subMenu
        return (
                <div className="nav_elements">
                    <div onMouseLeave={this.linkColorDisable} id="nav_links_block" className="nav_links_block">
                        {createSubMenu(home, '/', "Home", "01", "nav_link")}
                        {createSubMenu(events, '/events', "Events", "02", "nav_link")}
                        {createSubMenu(tickets, '/tickets', "Tickets", "03", "nav_link")}
                        {createSubMenu(portfolio, '/portfolio', "Portfolio", "04", "nav_link")}
                        {createSubMenu(contacts, '/contacts', "Contacts", "05", "nav_link")}
                        {createSubMenu(Login, '/login', "Login", "06", "nav_link", )}
                    </div>
                </div>
        )
    }
}


export default SubNavigation
