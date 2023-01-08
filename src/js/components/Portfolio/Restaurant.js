import React from "react"
import {portfolioData} from "../../utils/constants";

function goToLink () {
    window.location = portfolioData.portfolio[3].link
}

function Restaurant () {
    return (
        <div onClick={goToLink} className="block_of_works block_of_works_cover block_of_works_cover_restaurant">
            <div className="restaurant_block" data-name="Restaurant">
                <div className="restaurant_block_block_middle" data-name="Restaurant"/>
                <div className="restaurant_block_mobile" data-name="Restaurant"/>
            </div>
        </div>
    )
}

export default Restaurant