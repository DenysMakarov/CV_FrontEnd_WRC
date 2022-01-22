import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


const changeColorMenu = (e) => {
    const arraySubMenu = Array.from(document.getElementsByClassName(e.target.className))
    arraySubMenu.map((el)=>{
        el.style.color = "#807f81"
        e.target.style.color = "white"
    })
}

export function createSubMenu (position, link, text, number, classN, id) {
    return (
        <Fragment>
            <div className={classN}>
                <div className=""><p className='number_menu'>{number}</p><Link  id={id} to={link} onMouseOver={changeColorMenu}  className="text_of_headers_menu">{text}</Link></div>
                <ul className="submenu">
                    {position.map((el)=>(
                        <li key={el.id}>
                            <Link  onMouseOver={changeColorMenu} className="header_of_submenu" to={el.link}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

