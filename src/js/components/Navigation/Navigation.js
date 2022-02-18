import React from 'react';

//------------------------------
import MenuTextBtn from "./MenuTextBtn";
import NavBtnBlock from "./NavBtnBlock";
import MenuBtn from "./MenuBTN";
import MenuList from "./MenuList";

const Navigation = () => {
        return (
                <div className="navigation_block" id="navigation_block">
                    <MenuBtn/>
                    <MenuTextBtn/>
                    <NavBtnBlock/>
                    {/*<MenuList/>*/}
                </div>
        )
}
export default Navigation
