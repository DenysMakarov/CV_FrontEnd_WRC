import React from 'react';

//------------------------------
import MenuTextBtn from "./MenuTextBtn";
import SubNavigation from "./SubNavigation";

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="navigation_block" id="navigation_block">
                    <MenuTextBtn/>
                    <SubNavigation/>
                </div>
        )
    }
}
export default Nav
