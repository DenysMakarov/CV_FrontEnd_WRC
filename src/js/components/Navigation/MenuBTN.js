import React from 'react';

class MenuBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeOfMenu: "HIDE_MENU",
            menuOptions: false
        }
    }

    operatorMenu = () => {
        const menuLinks = Array.from(document.getElementsByClassName("nav_link_menu_list"))
        const lineInBtnTop = document.getElementById("line_in_btn_top")
        const lineInBtnBottom = document.getElementById("line_in_btn_bottom")


        menuLinks.map((el) => {
            (!this.state.menuOptions) ? el.style.marginTop = "0" : el.style.marginTop = "30px"
        })

        if (this.state.menuOptions) {
            lineInBtnTop.classList.remove("line_in_btn_top_active");
            lineInBtnBottom.classList.remove("line_in_btn_bottom_active")

        } else {
            lineInBtnTop.classList.add("line_in_btn_top_active");
            lineInBtnBottom.classList.add("line_in_btn_bottom_active")
        }

        const menuList = document.getElementById("menu_list")
        return new Promise((res, rej) => {
            this.state.menuOptions === false ?
                this.setState({
                    menuOptions: true,
                    menuListClass: "menu_list_show"
                }) :
                this.setState({
                    menuOptions: false,
                    menuListClass: "menu_list_hide"
                })
            res(this.state.menuOptions)
        })
            .then(() => {
                // showHideMenu(this.state.typeOfMenu)
                menuList.className = `menu_list ${this.state.menuListClass}`
            })
    }


    render() {
        return (
            <div id="btn_menu_block" className="btn_menu_block">
                <input onClick={this.operatorMenu} type='checkbox' defaultChecked={false} id="btn_menu"
                       className="btn_menu"/>

                <label id="label_btn_menu" htmlFor="btn_menu" className="label_btn_menu">
                    <div id="line_in_btn_top" className="line_in_btn line_in_btn_top"/>
                    <div id="line_in_btn_bottom" className="line_in_btn line_in_btn_bottom"/>
                </label>
            </div>
        )
    }
}

export default MenuBtn