import React from 'react';
import NavBtn from "./NavBtn";
import {useLocation} from "react-router";
import {buttonsNav} from "../../utils/constants";


const NavBtnBlock = () => {
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
