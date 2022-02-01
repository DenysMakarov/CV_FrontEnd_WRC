import React from 'react';

//------------------------------
import MenuTextBtn from "./MenuTextBtn";
import SubNavigation from "./SubNavigation";
import MenuBtn from "./MenuBTN";
import MenuList from "./MenuList";

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="navigation_block" id="navigation_block">
                    <MenuBtn/>
                    <MenuTextBtn/>
                    <SubNavigation/>
                    {/*<MenuList/>*/}
                </div>
        )
    }
}
export default Nav
