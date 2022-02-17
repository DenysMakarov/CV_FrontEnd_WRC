import React, {Fragment, useEffect, useState} from 'react';
import {connect, useSelector} from "react-redux";
import {eventInfo} from "../../db/dataBase";
import PropTypes from "prop-types"
import {numberOfSlideReducer} from "../../redux/reducers/numberOfSlideReducer";
import Slides from "./Slides";
import BtnEvent from "./BtnEvent";


const TextDesc = ({clearAnimation}) => {
    const {numberOfSlide, listEvents, error} = useSelector(state => state.numberOfSlideReducer)
    const {loading} = useSelector(state => state.IsLoadingEventsReducer)

    useEffect(() => {
        clearAnimation().map(el => el.style.animationName = "text_slider_appear")
    }, [numberOfSlide])

    return (
        (loading) ? <h1>LOADING...</h1>
            : (error) ? <h1>ERROR</h1>
                :
                <Fragment>
                    <div className="text_description_block">
                        <h5 className="text_description_slide text_description_slide_top">{listEvents[numberOfSlide].titleDesc}</h5>
                        <h5 className="text_description_slide text_description_slide_center">Strategy decision <br/>
                            {new Date(listEvents[numberOfSlide].date).getDate()}
                            <span
                                style={{color: "red"}}> / </span> {new Date(listEvents[numberOfSlide].date).getMonth() + 1}
                            <span style={{color: "red"}}> / </span> {new Date(listEvents[numberOfSlide].date).getFullYear()}<br/>
                        </h5>
                        <h1 className="text_description_slide text_description_slide_bottom">{listEvents[numberOfSlide].title}</h1>
                        {/*<BtnEvent/>*/}
                    </div>
                    <h1 id="text_description_slide_behind"
                        className="text_description_slide_behind">{listEvents[numberOfSlide].title}</h1>
                </Fragment>
    )
}

export default TextDesc;


// const mapStateToProps = (state) => {
//     return {
//         numberOfSlide: state.numberOfSlideReducer.numberOfSlide
//     }
// }
//
// class TextDesc extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//
//     UNSAFE_componentWillUpdate(nextProps, nextState) {
//         const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
//         arrTextSlide.map(el => el.style.animationName = " none")
//         setTimeout(()=>{
//             arrTextSlide.map((el) => {
//                 el.style.animationDelay = "0 !important"
//                 el.style.animationName = "text_slider_appear"
//             })
//         }, 10)
//      }
//
//     render() {
//         const {numberOfSlide} = this.props
//         const dateNew = new Date()
//
//         return (
//             <Fragment>
//                 <div className="text_description_block">
//                     <h5 className="text_description_slide text_description_slide_top">{eventInfo[numberOfSlide].titleDesc}</h5>
//                     <h5 className="text_description_slide text_description_slide_center">Strategy decision <br/>
//                         {dateNew.getDate()} <span style={{color: "red"}}> / </span> {dateNew.getMonth() + 1} <span style={{color: "red"}}> / </span> {dateNew.getFullYear()} <br/>
//                     </h5>
//                     <h1 className="text_description_slide text_description_slide_bottom">{eventInfo[numberOfSlide].title}</h1>
//                 </div>
//                 <h1 id="text_description_slide_behind" className="text_description_slide_behind">{eventInfo[numberOfSlide].title}</h1>
//             </Fragment>
//         )
//     }
// }
//
// TextDesc.propTypes = {
//     numberOfSlide : PropTypes.number
// }
//
// export default connect(mapStateToProps, null)(TextDesc)