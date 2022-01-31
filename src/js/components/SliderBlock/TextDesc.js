import React, {Fragment, useEffect, useState} from 'react';
import {connect, useSelector} from "react-redux";
import {eventInfo} from "../../db/dataBase";
import PropTypes from "prop-types"
import {numberOfSlideReducer} from "../../redux/reducers/numberOfSlideReducer";


const TextDesc = () => {
    const {numberOfSlide, listEvents} = useSelector(state => state.numberOfSlideReducer)
    const [date, setDate] = useState(new Date())
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
        arrTextSlide.map(el => el.style.animationName = " none")
        setTimeout(() => {
            arrTextSlide.map((el) => {
                el.style.animationDelay = "0 !important"
                el.style.animationName = "text_slider_appear"
            })
        }, 10)

        if (listEvents.length) setDate(new Date(listEvents[numberOfSlide].date))
    }, [numberOfSlide])

    useEffect(() => {
        if (listEvents.length) setDate(new Date(listEvents[numberOfSlide].date))
    }, [listEvents.length])


    return (
        (listEvents.length)
        ?
        <Fragment>
            <div className="text_description_block">
                <h5 className="text_description_slide text_description_slide_top">{listEvents[numberOfSlide].titleDesc}</h5>
                <h5 className="text_description_slide text_description_slide_center">Strategy decision <br/>
                    {date.getDate()} <span style={{color: "red"}}> / </span> {date.getMonth() + 1} <span
                        style={{color: "red"}}> / </span> {date.getFullYear()} <br/>
                </h5>
                <h1 className="text_description_slide text_description_slide_bottom">{listEvents[numberOfSlide].title}</h1>
            </div>
            <h1 id="text_description_slide_behind"
                className="text_description_slide_behind">{listEvents[numberOfSlide].title}</h1>
        </Fragment>
        :
        <h1>LOADING</h1>
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