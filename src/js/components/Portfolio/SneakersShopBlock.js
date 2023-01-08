import React from "react"
import {portfolioData} from "../../utils/constants";


function goToLink () {
    window.location = portfolioData.portfolio[2].link
}

function SneakersShopBlock () {
    return (
        <div onClick={goToLink} className="block_of_works block_of_works_cover block_of_works_cover_sneakers_shop">
            <div className="sneakers_shop_block" data-name="Sneakers Shop">
                <div className="sneakers_shop_block_middle" data-name="Sneakers Shop"/>
                <div className="sneakers_shop_block_mobile" data-name="Sneakers Shop"/>
            </div>
        </div>
    )
}

export default SneakersShopBlock