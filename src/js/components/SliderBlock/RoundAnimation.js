import React from "react"


class RoundAnimation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                id="round_animation"
                className="round_animation"
                style={{left: this.props.posX - 17.5 + "px", top: this.props.posY - 17.5 + "px"}}
            >
            </div>
        )
    }
}

export default RoundAnimation