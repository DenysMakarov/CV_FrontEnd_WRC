import React, {Fragment} from 'react';
import {connect, useDispatch} from "react-redux";
import {nextSlide, prevSlide, setSlide} from "../../redux/actions/actions";
import {eventInfo} from "../../db/dataBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import {SET_SLIDE} from "../../types";



const mapStateToProps = (state) => {
    return {
        numberOfSlide: state.numberOfSlideReducer.numberOfSlide,
        eventInfo: state.numberOfSlideReducer.sliderInfo
    }
}

const mapDispatchToProps = {
    nextSlide,
    prevSlide,
    setSlide
}


export const changeAnimationSlide = () => {
    let getMainSlide = document.getElementById("main_slide")
    let getBeforeSlide = document.getElementById("slide_before")

    getMainSlide.style.animationName = "none"
    getBeforeSlide.classList.remove("slider_before_appear")
    getBeforeSlide.classList.add("slider_block_hide")
    getMainSlide.classList.remove("slider_block_appear")
    getMainSlide.classList.add("slider_block_hide")

    setTimeout(() => {
        getBeforeSlide.classList.remove("slider_block_hide")
        getBeforeSlide.classList.add("slider_before_appear")
        getMainSlide.classList.remove("slider_block_hide")
        getMainSlide.classList.add("slider_block_appear")
    }, 200)
}

class Arrows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideNumber: 0,
            // sliderInfo: eventInfo
        }
    }

    prevSlide = () => {
        this.props.prevSlide()
        changeAnimationSlide()
    }

    nextSlide = () => {
        this.props.nextSlide()
        changeAnimationSlide()
    }

    setSlider = () => {
        this.props.setSlide(3)

        // this.props.setSlide(e.target.dataset.id - 1)
        // changeAnimationSlide()
    }

    render() {
        return (
            <Fragment>
                <div id="arrow_left"  className="arrow arrow_left">
                    <div onClick={this.prevSlide} id="arrow_left_cover" className="arrow_left_cover"/>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <div id="arrow_right" className="arrow arrow_right">
                    <div onClick={this.nextSlide} id="arrow_right_cover" className="arrow_right_cover"/>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </Fragment>
        )
    }
}

Arrows.propTypes = {
    numberOfSlide : PropTypes.number,
    nextSlide : PropTypes.func,
    prevSlide : PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows)