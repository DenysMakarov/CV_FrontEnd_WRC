import React from 'react';
import NavBtn from "./NavBtn";
import {useLocation} from "react-router";
import {BUTTONS_NAV} from "../../utils/constants";


const NavBtnBlock = () => {
    const location = useLocation();
    return (
        <div className="nav_elements">
            <div id="nav_links_block" className="nav_links_block">
                {
                    BUTTONS_NAV.map((e, index) => (
                        <NavBtn
                            title={BUTTONS_NAV[index].title}
                            path={BUTTONS_NAV[index].path}
                            num={BUTTONS_NAV[index].num}
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
