import React from "react"
import {PORTFOLIO_DATA} from "../../utils/constants";

function goToLink () {
    window.location = PORTFOLIO_DATA.portfolio[0].link
}

function GameBlock () {

    return (
        <div onClick={goToLink} className="block_of_works block_of_works_cover block_of_works_cover_game " >
            <div className="game_block" data-name="Game">
                <div className="game_block_cards" data-name="Game"/>
                <div className="game_block_cards" data-name="Game"/>
                <div className="game_block_cards" data-name="Game"/>
                <div className="game_block_cards" data-name="Game"/>
                <div className="game_block_cards" data-name="Game"/>
                <div className="game_block_cards" data-name="Game"/>
                <div className="game_block_cards" data-name="Game"/>
                <div className="game_block_cards" data-name="Game"/>
            </div>
        </div>
    )
}

export default GameBlock