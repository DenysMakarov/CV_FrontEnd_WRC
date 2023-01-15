import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"
import Arrow from "./Arrow";
import {nextSlide, prevSlide} from "../../store/actions/eventsActions";


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

    prevSlide = () => {
        this.props.prevSlide()
    }

    nextSlide = () => {
        this.props.nextSlide()
    }

    render() {
        return (
            <Fragment>
                <Arrow refArrow={this.props.leftArrow} changeSlide={this.prevSlide} icon={faArrowLeft} id="arrow_left" classN="arrow arrow_left" childId="arrow_left_cover" childClass="arrow_left_cover"/>
                <Arrow refArrow={this.props.rightArrow} changeSlide={this.nextSlide} icon={faArrowRight} id="arrow_right" classN="arrow arrow_right" childId="arrow_right_cover" childClass="arrow_right_cover"/>
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