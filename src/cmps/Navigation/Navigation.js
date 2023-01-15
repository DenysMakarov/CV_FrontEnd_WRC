import React from 'react';
import MenuTextBtn from "./MenuTextBtn";
import NavBtnBlock from "./NavBtnBlock";
import LeftMenu from "./LeftMenu";

const Navigation = () => {
        return (
                <div className="navigation_block" id="navigation_block">
                    <LeftMenu/>
                    <MenuTextBtn/>
                    <NavBtnBlock/>
                </div>
        )
}
export default Navigation
