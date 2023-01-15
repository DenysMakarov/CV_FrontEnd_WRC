import React from 'react'

class PilotBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pilot_block">
                <h1 className="header_description">Favorites:</h1>
                <div className="pilot_1">
                    <div className="photo_pilot"
                         style={{backgroundImage: this.props.el.pilotImg_1}}></div>
                    <div className="desc_pilot">
                        <p className="header_desc_pilot name_of_pilot">
                            <span>{this.props.el.pilotName_1}</span>
                        </p>
                        <p className="header_desc_pilot"> Age:
                            <span>{" " + this.props.el.pilotAge_1}</span>
                        </p>
                        <p className="header_desc_pilot"> Exp:
                            <span>{" " + this.props.el.pilotExperience_1 + " years"} </span>
                        </p>
                        <p className="header_desc_pilot"> Awards:
                            <span>{" " + this.props.el.pilotAwards_1} </span>
                        </p>
                    </div>
                </div>
                <div className="pilot_2">
                    <div className="photo_pilot"
                         style={{backgroundImage: this.props.el.pilotImg_2}}></div>
                    <div className="desc_pilot">
                        <p className="header_desc_pilot name_of_pilot">
                            <span>{this.props.el.pilotName_2}</span>
                        </p>
                        <p className="header_desc_pilot"> Age:
                            <span>{" " + this.props.el.pilotAge_2}</span>
                        </p>
                        <p className="header_desc_pilot"> Exp:
                            <span>{" " + this.props.el.pilotExperience_2 + " years"} </span>
                        </p>
                        <p className="header_desc_pilot"> Awards:
                            <span>{" " + this.props.el.pilotAwards_2} </span>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default PilotBlock;