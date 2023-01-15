import React, {Fragment} from 'react'
import PilotBlock from "./PilotBlock";
import {Link} from "react-router-dom";


class EventsDesc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="event_block_desc">
                    <h1 className="header_description">Description:</h1>
                    <h4 className="text_description">{this.props.el.roadDescription}</h4>
                    <div className="date_block">
                        <h1 className="header_description">Date:</h1>
                        <h4 className="text_description">{this.props.el.date}</h4>
                    </div>
                    <div className="place_block">
                        <h1 className="header_description">Place:</h1>
                        <h4 className="text_description">{this.props.el.place}</h4>
                    </div>
                    <div className="clearfix"/>


                    <PilotBlock el={this.props.el}/>

                    <button className="btn_events_go_to_buy_tickets">
                        <Link to="/tickets">Go to ticket</Link>
                    </button>
                </div>

                <div className="event_block_map" style={{backgroundImage: this.props.el.mapImg}}/>
            </Fragment>

        );
    }
}

export default EventsDesc