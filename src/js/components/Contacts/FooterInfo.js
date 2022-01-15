import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {isEmail} from "../Registration/validationForm";

class FooterInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            approvedEmail: false
        }
    }

    animationButtonShow = () => {
        document.getElementById("bnt_footer_block_top_animation").style.animationName = "btn_animate_contacts"
    }
    animationButtonHide = () => {
        document.getElementById("bnt_footer_block_top_animation").style.animationName = "none"
    }

    clearInputText = (e) => {
        e.target.value = ""
    }

    inputEmail = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

        console.log(this.state)
    }

    approveEmail = () => {
        const emailSubscribeContacts = document.getElementById("email_subscribe_contacts")
        const emailSubscribe = document.getElementById("email_subscribe")

        if (isEmail(this.state.email)) {
            emailSubscribe.style.border = "2px solid transparent"
            emailSubscribeContacts.style.animationName = "emailSubscribeContactsTrue"
            emailSubscribeContacts.innerText = "Thank for subscribe!"
        } else {
            emailSubscribe.style.border = "2px solid #c8454c"
            emailSubscribeContacts.style.animationName = "emailSubscribeContactsFalse"
            emailSubscribeContacts.innerText = "Please, enter email properly!"
        }
    }

    render() {
        return (
            <div className="footer_contacts_block">
                <div className="footer_block_top">
                    <div className="footer_block_top_inform">
                        <p className="footer_block_top_text_top">CAREERS</p>
                        <h5 className="footer_block_top_text_center">Join our team.</h5>
                        <div className="footer_block_top_line"/>
                        <p className="footer_block_top_text_underline">We’re a team of creatives who are excited about
                            unique ideas and help fin-tech companies to create amazing identity by crafting top-notch
                            UI/UX.</p>
                        <div className="bnt_footer_block_top_cover">
                            <button id="bnt_footer_block_top" className="bnt_footer_block_top"> See open position
                                <FontAwesomeIcon style={{marginLeft: "25px"}} icon={faArrowRight}/>
                            </button>
                            <div onMouseOver={this.animationButtonShow} onMouseLeave={this.animationButtonHide}
                                 id="bnt_footer_block_top_animation" className="bnt_footer_block_top_animation"/>
                        </div>
                    </div>
                </div>

                <div className="footer_blocks_bottom">
                    <div className="footer_blocks_bottom_cover">
                        <div className="footer_block_bottom">
                            <h1>WRC <br/>
                                EVENTS
                            </h1>
                        </div>
                        <div className="footer_block_bottom">
                            <h5 className="footer_block_bottom_first">Barcelona</h5>
                            <h4>365 Gran Via de Corts,
                                Catalanes, BA 08015</h4>
                            <h5 className="footer_block_bottom_three">Rotterdam</h5>
                            <h4>Graaf Florisstraat 22A,
                                3021 CH Rotterdam,
                                Netherlands</h4>
                        </div>
                        <div className="footer_block_bottom">
                            <h5 className="footer_block_bottom_first">Work inquiries</h5>
                            <h4>Interested in working with us?
                                makarovdenys1985@gmail.com</h4>
                            <h5 className="footer_block_bottom_three">Phone</h5>
                            <h4>Ph: +3.230.705.5448</h4>
                        </div>
                        <div className="footer_block_bottom">
                            <h5 className="footer_block_bottom_first">Stay in touch</h5>
                            <div id="email_subscribe" className="email_subscribe">
                                <input onClick={this.clearInputText} onChange={this.inputEmail} name="email"
                                       className="email_subscribe_input"
                                       defaultValue="Your email address" type="text"/>
                                <button onClick={this.approveEmail} className="email_subscribe_btn">Subscribe</button>
                                <div id="email_subscribe_contacts" className="email_subscribe_contacts">Please, enter
                                    email properly!
                                </div>
                            </div>
                        </div>
                        <div className="footer_block_bottom_fifth">
                            © 2020, RALLY EVENTS Portfolio. Made with passion by Makarov Denys.
                            <div className="contacts_icon"><i className="fab fa-youtube"/></div>
                            <div className="contacts_icon"><i className="fab fa-facebook-square"/></div>
                            <div className="contacts_icon"><i className="fab fa-twitter-square"/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterInfo