import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {eventInfo} from "../../db/dataBase";
import PropTypes from "prop-types"



const mapStateToProps = (state) => {
    return {
        numberOfSlide: state.numberOfSlideReducer.numberOfSlide
    }
}

class TextDesc extends React.Component {
    constructor(props) {
        super(props);
    }


    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
        arrTextSlide.map(el => el.style.animationName = " none")
        setTimeout(()=>{
            arrTextSlide.map((el) => {
                el.style.animationDelay = "0 !important"
                el.style.animationName = "text_slider_appear"
            })
        }, 10)
     }

    render() {
        const {numberOfSlide} = this.props
        const dateNew = new Date()

        return (
            <Fragment>
                <div className="text_description_block">
                    <h5 className="text_description_slide text_description_slide_top">{eventInfo[numberOfSlide].textTop}</h5>
                    <h5 className="text_description_slide text_description_slide_center">Strategy
                        decision <br/>
                        {dateNew.getDate()} <span style={{color: "red"}}> / </span> {dateNew.getMonth() + 1} <span style={{color: "red"}}> / </span> {dateNew.getFullYear()} <br/>
                    </h5>
                    <h1 className="text_description_slide text_description_slide_bottom">{eventInfo[numberOfSlide].textBottom}</h1>
                </div>
                <h1 id="text_description_slide_behind" className="text_description_slide_behind">{eventInfo[numberOfSlide].textBottom}</h1>
            </Fragment>
        )
    }
}

TextDesc.propTypes = {
    numberOfSlide : PropTypes.number
}

export default connect(mapStateToProps, null)(TextDesc)