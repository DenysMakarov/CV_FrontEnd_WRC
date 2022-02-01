import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {nextSlide, prevSlide} from "../../redux/actions/actions";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import Arrow from "./Arrow";


const mapStateToProps = (state) => {
    return {
        numberOfSlide: state.numberOfSlideReducer.numberOfSlide,
        listEvents: state.numberOfSlideReducer.listEvents
    }
}

const mapDispatchToProps = {
    nextSlide,
    prevSlide,
}

class Arrows extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.changeAnimationSlide()
    }

    changeAnimationSlide = () => {
        let getMainSlide = document.getElementById("main_slide")
        let getBeforeSlide = document.getElementById("slide_before")

        this.props.clearAnimation()
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

    prevSlide = () => {
        this.props.prevSlide()
        this.changeAnimationSlide()
    }

    nextSlide = () => {
        this.props.nextSlide()
        this.changeAnimationSlide()
    }

    render() {
        return (
            <Fragment>
                <Arrow changeSlide={this.prevSlide} icon={faArrowLeft} id="arrow_left" classN="arrow arrow_left" childId="arrow_left_cover" childClass="arrow_left_cover"/>
                <Arrow changeSlide={this.nextSlide} icon={faArrowRight} id="arrow_right" classN="arrow arrow_right" childId="arrow_right_cover" childClass="arrow_right_cover"/>
            </Fragment>
        )
    }
}

Arrows.propTypes = {
    numberOfSlide: PropTypes.number,
    nextSlide: PropTypes.func,
    prevSlide: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows)