import React, {useEffect, useState} from 'react';
import {subMenu} from "../../db/dataBase";
import NavBtn from "./NavBtn";
import {useLocation} from "react-router";


const NavBtnBlock = () => {

    const buttonsNav = [
            {title: 'Home', path: '/', num: '01'},
            {title: 'Events', path: '/events', num: '02'},
            {title: 'Tickets', path: '/tickets', num: '03'},
            {title: 'Portfolio', path: '/portfolio', num: '04'},
            {title: 'Contacts', path: '/contacts', num: '05'},
            {title: 'Login', path: '/login', num: '06'},
    ]

    const location = useLocation();

    return (
        <div className="nav_elements">
            <div id="nav_links_block" className="nav_links_block">
                {
                    buttonsNav.map((e, index) => (
                        <NavBtn
                            title={buttonsNav[index].title}
                            path={buttonsNav[index].path}
                            num={buttonsNav[index].num}
                            location={location}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default NavBtnBlock
