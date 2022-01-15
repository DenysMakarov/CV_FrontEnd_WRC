import React from 'react';
import {connect} from "react-redux";
import {eventInfo} from "../../db/dataBase";
import {setSlide} from "../../redux/actions/actions";
import {changeAnimationSlide} from "./ArrowsBlock"
import PropTypes from "prop-types"


const mapPropsToState = (state) => {
    return {
        num: state.numberOfSlideReducer.numberOfSlide
    }
}

const mapDispatchToProps = {
    setSlide
}


class SlidePagination extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
        arrPag[this.props.num].classList.add("pagination_panel_number_active")
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
        arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
        arrPag[nextProps.num].classList.add("pagination_panel_number_active")
    }

    setSlider = (e) => {
        this.props.setSlide(e.target.dataset.id - 1)
        changeAnimationSlide()
    }

    render() {
        return (
            <div>
                <ul className="slide_pagination_panel">
                    {eventInfo.map((el) => (
                        <li
                            key={el.numberId}
                            data-id={el.numberId}
                            onClick={this.setSlider}
                            style={{height: 100 / eventInfo.length + "%"}}
                            className="pagination_panel_number">{"0" + el.numberId}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

SlidePagination.propTypes = {
    num : PropTypes.number,
    setSlide: PropTypes.func
}

export default connect(mapPropsToState, mapDispatchToProps)(SlidePagination)


//  =================  USES FUNCTION WITH HOOKS ================= //

// export default () => {
//     const number = useSelector(state => state.numberOfSlideReducer.numberOfSlide)
//     const slideDispatch = useDispatch()
//
//     const setSlider = (e) => {
//         slideDispatch(setSlide(e.target.dataset.id - 1))
//         changeAnimationSlide()
//         const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
//         arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
//         e.target.classList.add("pagination_panel_number_active")
//     }
//
//     return (
//         <div>
//
//             <ul className="slide_pagination_panel">
//                 {sliderInfo.map((el) => (
//                     <li
//                         key={el.imgPath}
//                         onClick={setSlider}
//                         data-id={el.id}
//                         style={{height: 100 / sliderInfo.length + "%"}}
//                         className="pagination_panel_number">{"0" + el.id}</li>
//                 ))}
//             </ul>
//         </div>
//
//     )
// }

