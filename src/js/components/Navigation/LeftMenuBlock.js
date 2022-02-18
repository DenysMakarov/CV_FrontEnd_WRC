import React from 'react';
import {buttonsNav} from "../../utils/constants";
import {Link} from "react-router-dom";

const LeftMenuBlock = ({menuAppear, liAppear}) => {
    return (
        <div style={menuAppear} className='submenu-cover'>
            <ul className='sub-ul-nav'>{
                buttonsNav.map((el, index) => (
                    <li
                        style={{animationDelay: `.${index}s`, animationName: liAppear}}
                        key={index+el.title}
                    >
                        <Link to={el.path}>{el.title}</Link>
                    </li>
                ))
            }</ul>
        </div>
    );
};

export default LeftMenuBlock;