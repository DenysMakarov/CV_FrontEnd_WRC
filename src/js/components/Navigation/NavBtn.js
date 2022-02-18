
import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';


const NavBtn = ({title, path, num,  setActiveBtn, location}) => {
    const [cls, setCls] = useState('nav-btn-active')

    useEffect(() => {
        (location.pathname == path) ? setCls('nav-btn-active') : setCls('')
    }, [location])

    return (
            <div className='nav_link'>
                <div className="">
                    <p className='number_menu'>{num}</p>
                    <Link
                        onClick={setActiveBtn}
                        data-path={path}
                        to={path} className={`text_of_headers_menu ${cls}`} >{title}
                    </Link>
                </div>
                {/*<ul className="submenu">*/}
                    {/*{position.map((el)=>(*/}
                    {/*    <li key={el.id}>*/}
                    {/*        <Link  onMouseOver={changeColorMenu} className="header_of_submenu" to={el.link}>{el.name}</Link>*/}
                    {/*    </li>*/}
                    {/*))}*/}
                {/*</ul>*/}
            </div>
    )
}

export default NavBtn
