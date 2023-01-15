import React from 'react';

class HeaderInfo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header_contacts_block">
                <h1 className="header_contacts_first_text">Contact: Blocks</h1>
                <h5 className="header_contacts_second_text">Leave us a little info, and we’ll be in touch</h5>
                <button  className="header_contacts_button"><a href="mailto:makarovdenys1985@gmail.com">Send Us an Email</a></button>
            </div>
        )
    }
}

export default HeaderInfo