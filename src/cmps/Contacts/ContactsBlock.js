import React from "react"
import HeaderInfo from "./HeaderInfo";
import BodyInfo from "./BodyInfo";
import FooterInfo from "./FooterInfo";


class ContactsBlock extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contacts_block_cover">
                <div className="contacts_block">
                    <HeaderInfo/>
                    <BodyInfo/>
                    <FooterInfo/>
                </div>
            </div>
        )
    }
}

export default ContactsBlock