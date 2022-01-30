import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
// import {eventInfo} from "../../db/dataBase";
import {setSlide} from "../../redux/actions/actions";
import {changeAnimationSlide} from "./ArrowsBlock"
import PropTypes from "prop-types"


const mapPropsToState = (state) => {
    return {
        num: state.numberOfSlideReducer.numberOfSlide,
        eventInfo: state.numberOfSlideReducer.sliderInfo
    }
}

const mapDispatchToProps = {
    setSlide
}


// class SlidePagination extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     componentDidMount() {
//         const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
//         arrPag[this.props.num].classList.add("pagination_panel_number_active")
//     }
//     //
//     // UNSAFE_componentWillUpdate(nextProps, nextState) {
//     //     const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
//     //     arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
//     //     arrPag[nextProps.num].classList.add("pagination_panel_number_active")
//     // }
//
//     setSlider = (e) => {
//         this.props.setSlide(e.target.dataset.id - 1)
//         changeAnimationSlide()
//     }
//
//     render() {
//         console.log(this.props.eventInfo)
//         return (
//             <div>
//                 <ul className="slide_pagination_panel">
//                     {/*{this.props.eventInfo.map((el) => (*/}
//                     {/*    <li*/}
//                     {/*        key={el.numberId}*/}
//                     {/*        data-id={el.numberId}*/}
//                     {/*        onClick={this.setSlider}*/}
//                     {/*        style={{height: 100 / this.props.eventInfo.length + "%"}}*/}
//                     {/*        className="pagination_panel_number">{"0" + el.numberId}*/}
//                     {/*    </li>*/}
//                     {/*))}*/}
//                 </ul>
//             </div>
//         )
//     }
// }
//
// SlidePagination.propTypes = {
//     num : PropTypes.number,
//     setSlide: PropTypes.func
// }
//
// export default connect(mapPropsToState, mapDispatchToProps)(SlidePagination)
//

//  =================  USES FUNCTION WITH HOOKS ================= //

export default () => {
    const number = useSelector(state => state.numberOfSlideReducer.numberOfSlide)
    const sliderInfo = useSelector(state => state.numberOfSlideReducer.sliderInfo)
    const setSlideDispatch = useDispatch()

    useEffect(() => {
        if (sliderInfo.length > 0) {
            setAnimation()
        }
    }, [number])

    const setSlider = (e) => {
        setSlideDispatch(setSlide(e.target.dataset.id - 1))
    }

    const setAnimation = () => {
        const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
        arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
        arrPag[number].classList.add("pagination_panel_number_active")
    }

    return (
        <div>
            <ul className="slide_pagination_panel">
                {
                    (!sliderInfo.length) ?
                        <h1></h1>
                        :
                        sliderInfo.map((el, index) => (
                            <li
                                key={index}
                                onClick={setSlider}
                                data-id={index + 1}
                                style={{height: 100 / sliderInfo.length + "%"}}
                                className="pagination_panel_number">{"0" + (index + 1)}</li>
                        ))
                }
            </ul>
        </div>
    )
}

