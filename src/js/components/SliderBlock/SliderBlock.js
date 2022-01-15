import React from 'react';
import {connect} from "react-redux";
import Arrows from "./ArrowsBlock";
import {eventInfo} from "../../db/dataBase";
import SlidePagination from "./SlidePagination";
import TextDesc from "./TextDesc";
import RoundAnimation from "./RoundAnimation";

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

class SliderBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posX: 500,
            posY: 500,
        }
    }

    setRoundPos = (e) => {
        const round = document.getElementById("round_animation");
        const arrowRight = document.getElementById("arrow_right_cover")
        const arrowLeft = document.getElementById("arrow_left_cover")

        if (e.clientY > 120) {
            this.setState({
                posX: e.clientX,
                posY: e.clientY,
            });
            round.style.width = "35px"
            round.style.height = "35px"
            round.style.opacity = "1"
            round.style.transition = ".05s"

        } else if (e.clientY <= 120) {
            round.style.opacity = "0"
            round.style.transition = ".5s"
        }

        if (e.target.id === "arrow_left_cover") {
            this.setState({
                // here to change set round relatively arrow
                posX: arrowLeft.getBoundingClientRect().left + 15,
                posY: arrowLeft.getBoundingClientRect().top + 15,
            })
            round.style.width = arrowLeft.getBoundingClientRect().width + 4 + "px";
            round.style.height = arrowLeft.getBoundingClientRect().height + 4 + "px";
        }
        else if (e.target.id === "arrow_right_cover") {
            this.setState({
                posX: arrowRight.getBoundingClientRect().left + 15,
                posY: arrowRight.getBoundingClientRect().top + 15,
            })
            round.style.width = arrowRight.getBoundingClientRect().width + 4 + "px";
            round.style.height = arrowRight.getBoundingClientRect().height + 4 + "px";
        }
    }

    render() {
        const {numberOfSlide} = this.props.state.numberOfSlideReducer
        let appearancePrevSlide = eventInfo.length - 1;
        numberOfSlide > 0 ? appearancePrevSlide = numberOfSlide - 1 : numberOfSlide == eventInfo.length ? appearancePrevSlide = 0 : appearancePrevSlide

        return (
            <div id="slider_block" onMouseMove={this.setRoundPos} className="slider_block">
                <RoundAnimation posX={this.state.posX} posY={this.state.posY}/>
                <div className="right_pixel_decoration"/>

                <div id="main_slide" className="main_slide"
                     style={{backgroundImage: eventInfo[numberOfSlide].imgPath}}/>

                <div id="slide_before" className="slide_before"
                     style={{backgroundImage: eventInfo[appearancePrevSlide].imgPath}}>
                </div>
                <TextDesc/>
                <SlidePagination/>
                <Arrows/>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(SliderBlock)