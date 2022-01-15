import React from "react"
import BackgroundText from "./BackgroundText";
import {portfolioData} from "../../db/dataBase";
import GameBlock from "./GameBlock";
import SliderMS from "./SliderMS";
import SneakersShopBlock from "./SneakersShopBlock";
import Restaurant from "./Restaurant";


class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textOfItem: ["H", "e", "l", "l", "o"]
        }
    }

    setTextOfHeader = (e) => {
        let arrHeaderText = e.target.dataset.name.split("")
        this.setState({
            textOfItem: arrHeaderText
        })
        setTimeout(()=>{
            const arrWordsHeaderText = Array.from(document.getElementsByClassName("works_header_words"))
            arrWordsHeaderText.map((el, i)=>{
                el.style.animationDelay = i/15 + "s"
            })
        }, 10)
    }

    render() {
        const {portfolio} = portfolioData
        const works = [
            <GameBlock/>,
            <SliderMS/>,
            <SneakersShopBlock/>,
            <Restaurant/>,
        ]


        return (
            <div className="portfolio_container">
                {portfolio.map((el, i) => (
                    <div key={el.nameOfWork} className="portfolio_item_cover">
                        <div className="portfolio_items">
                            <div onMouseOver={this.setTextOfHeader}
                                 className={`portfolio_item portfolio_items_${el.nameOfWork}`}>
                                {works[i]}
                            </div>
                        </div>
                    </div>
                ))}
                <BackgroundText/>

                <div className="works_header_cover">
                    <div id="works_header" className="works_header">
                        {this.state.textOfItem.map((el, i) => (
                            <p className="works_header_words" key={el + i}>{el}</p>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

}

export default Portfolio