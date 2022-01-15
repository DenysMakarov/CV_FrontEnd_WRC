import React from 'react';
import {subMenu} from "../../db/dataBase";
import {createSubMenu} from "../Navigation/CreateSubMenu"

class MenuList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {home, events, tickets, portfolio, contacts} = subMenu
        return (
            <div className={`menu_list`} id="menu_list">

                <div className="menu_list_block">

                    {createSubMenu(home, '/', "Home", "01", "nav_link nav_link_menu_list")}
                    {createSubMenu(events, '/events', "Events", "02",  "nav_link nav_link_menu_list")}
                    {createSubMenu(tickets, '/tickets', "Tickets", "03", "nav_link nav_link_menu_list")}
                    {createSubMenu(portfolio, '/portfolio', "Portfolio", "04", "nav_link nav_link_menu_list")}
                    {createSubMenu(contacts, '/contacts', "Contacts", "05", "nav_link nav_link_menu_list")}
                    {/*<div id="sub_menu_cover"/>*/}

                </div>

                <div className="contacts_block">
                    <div className="get_in_touch">
                        <div className="social_network_icon_block"/>
                    </div>
                    <div className="work_inquires"/>
                </div>
            </div>

        )
    }
}

export default MenuList
