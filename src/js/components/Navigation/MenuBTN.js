import React, {useEffect, useState} from 'react';
import {buttonsNav} from "../../utils/constants";
import {Link} from "react-router-dom";

const MenuBtn = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [menuAppear, setMenuAppear] = useState({animationName: ''})
    const [liAppear, setLiAppear] = useState('')

    useEffect(()=>{
        if (isChecked){
            setMenuAppear({animationName: 'submenu-cover-appear'})
            setLiAppear( 'sub-menu-appear')
        } else {
            setMenuAppear({animationName: 'submenu-cover-hide'})
            setLiAppear('sub-menu-hide')
        }

    }, [isChecked])

    const animationBtn = (deg) => {
        if (isChecked) {
            return {
                transform: `rotate(${deg}deg)`,
                position: 'absolute'
            }
        }
        return {
            transform: `rotate(0deg)`,
            position: 'relative'
        }
    }


    const operatorMenu = () => {
        (isChecked) ? setIsChecked(false) : setIsChecked(true)
    }


    return (
        <div className='menu-block-wrapper'>
            <div className='menu-block'>
                <div className="btn_menu_block" style={{zIndex: '1000'}}>
                    <div onClick={operatorMenu} className='btn_menu_block-cover'>
                        <div style={animationBtn(45)} className={`menu-btn-line-left menu-btn-line`}/>
                        <div style={animationBtn(-45)} className={`menu-btn-line-right menu-btn-line`}/>
                    </div>
                </div>
            </div>
            {
                // isChecked &&
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
            }

        </div>

    )

}

export default MenuBtn


//========================

// class MenuBtn extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             typeOfMenu: "HIDE_MENU",
//             menuOptions: false
//         }
//     }
//
//     operatorMenu = () => {
//         // const menu_list = document.getElementById("menu_list")
//         // menu_list.setAttribute('style', 'z-index : 100')
//
//         const menuLinks = Array.from(document.getElementsByClassName("nav_link_menu_list"))
//         const lineInBtnTop = document.getElementById("line_in_btn_top")
//         const lineInBtnBottom = document.getElementById("line_in_btn_bottom")
//
//
//         menuLinks.map((el) => {
//             (!this.state.menuOptions) ? el.style.marginTop = "0" : el.style.marginTop = "30px"
//         })
//
//         if (this.state.menuOptions) {
//             lineInBtnTop.classList.remove("line_in_btn_top_active");
//             lineInBtnBottom.classList.remove("line_in_btn_bottom_active")
//
//         } else {
//             lineInBtnTop.classList.add("line_in_btn_top_active");
//             lineInBtnBottom.classList.add("line_in_btn_bottom_active")
//         }
//
//         const menuList = document.getElementById("menu_list")
//         return new Promise((res, rej) => {
//             (this.state.menuOptions===false) ?
//                 this.setState({
//                     menuOptions: true,
//                     menuListClass: "menu_list_show"
//
//                 }) :
//                 this.setState({
//                     menuOptions: false,
//                     menuListClass: "menu_list_hide"
//                 })
//             res(this.state.menuOptions)
//         })
//             .then(() => {
//                 // showHideMenu(this.state.typeOfMenu)
//                 menuList.className = `menu_list ${this.state.menuListClass}`
//             })
//     }
//
//
//     render() {
//         return (
//             <div id="btn_menu_block" className="btn_menu_block" style={{zIndex : '1000000'}}>
//                 <input onClick={this.operatorMenu} type='checkbox' defaultChecked={false} id="btn_menu" className="btn_menu"/>
//
//                 <label id="label_btn_menu" htmlFor="btn_menu" className="label_btn_menu">
//                     <div id="line_in_btn_top" className="line_in_btn line_in_btn_top"/>
//                     <div id="line_in_btn_bottom" className="line_in_btn line_in_btn_bottom"/>
//                 </label>
//             </div>
//         )
//     }
// }
//
// export default MenuBtn