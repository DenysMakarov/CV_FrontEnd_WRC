import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";



class BodyInfo extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="address_block">
                <div className="map_info info_block"/>
                <div className="info_info info_block">
                    <div className="phone_icon_info_block">
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                        <h4 className="first_text_info_block" >Get in touch</h4>
                        <p className="second_text_info_block">Work and general inquiries</p>
                        <h5 className="first_text_info_block" >+1.807.120.6705</h5>
                        <p className="second_text_info_block">Assistance hours:</p>
                        <p className="assistance_text">Monday – Friday</p>
                        <p className="assistance_text" style={{marginTop: "-15px"}}>6 am to 8 pm EST</p>
                    </div>
                </div>
                <div className="address_info info_block">
                    <div className="address_icon_info_block">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <h4 className="first_text_info_block">Post address</h4>
                        <p className="assistance_text" style={{marginTop: "20px"}}>541 Melville Ave, Palo Alto,</p>
                        <p className="assistance_text" style={{marginTop: "-15px"}}>CA 94301,</p>
                        <p className="assistance_text" style={{marginTop: "-15px"}}>United States</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyInfo