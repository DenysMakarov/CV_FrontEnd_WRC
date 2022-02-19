import React from "react"


const RoundAnimation = ({styleOfRound}) => {


        return (
            <div
                id="round_animation"
                className="round_animation"
                style={styleOfRound}
            >
            </div>
        )

    // return (
    //     <div
    //         id="round_animation"
    //         className="round_animation"
    //         // style={stl}
    //
    //         style={{left: posX - 17.5 + "px", top: posY - 17.5 + "px", ...styleOfRound}}
    //     >
    //     </div>
    // )
}

export default RoundAnimation