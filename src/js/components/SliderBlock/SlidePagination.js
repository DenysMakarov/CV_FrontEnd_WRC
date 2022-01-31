import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSlide} from "../../redux/actions/actions";




//  =================  USES FUNCTION WITH HOOKS ================= //

export default ({clearAnimation}) => {
    const {numberOfSlide, listEvents} = useSelector(state => state.numberOfSlideReducer)
    const setSlideDispatch = useDispatch()

    useEffect(() => {
        if (listEvents.length > 0) {
            setAnimation()
        }
    }, [numberOfSlide])

    const setSlider = (e) => {
        const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
        arrTextSlide.map(el => {
            el.style.animationName = "none"
        })
        setSlideDispatch(setSlide(e.target.dataset.id - 1))
    }

    const setAnimation = () => {
        clearAnimation()
        const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
        arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
        arrPag[numberOfSlide].classList.add("pagination_panel_number_active")
    }

    return (
        <div>
            <ul className="slide_pagination_panel">
                {
                    (!listEvents.length) ?
                        <h1></h1>
                        :
                        listEvents.map((el, index) => (
                            <li
                                key={index}
                                onClick={setSlider}
                                data-id={index + 1}
                                style={{height: 100 / listEvents.length + "%"}}
                                className="pagination_panel_number">{"0" + (index + 1)}</li>
                        ))
                }
            </ul>
        </div>
    )
}


// const mapPropsToState = (state) => {
//     return {
//         num: state.numberOfSlideReducer.numberOfSlide,
//         eventInfo: state.numberOfSlideReducer.sliderInfo
//     }
// }
//
// const mapDispatchToProps = {
//     setSlide
// }
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
//         console.log(this.props.listEvents)
//         return (
//             <div>
//                 <ul className="slide_pagination_panel">
//                     {/*{this.props.listEvents.map((el) => (*/}
//                     {/*    <li*/}
//                     {/*        key={el.numberId}*/}
//                     {/*        data-id={el.numberId}*/}
//                     {/*        onClick={this.setSlider}*/}
//                     {/*        style={{height: 100 / this.props.listEvents.length + "%"}}*/}
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
