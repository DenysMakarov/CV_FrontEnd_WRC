import React from "react"


const RoundAnimation = ({posX, posY}) => {
        return (
            <div
                id="round_animation"
                className="round_animation"
                style={{left: posX - 17.5 + "px", top: posY - 17.5 + "px"}}
            >
            </div>
        )
}

export default RoundAnimation