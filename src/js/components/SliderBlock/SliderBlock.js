import React, {useContext, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import Arrows from "./ArrowsBlock";
import SlidePagination from "./SlidePagination";
import TextDesc from "./TextDesc";
import RoundAnimation from "./RoundAnimation";
import {AuthContext} from "../../App";
import {SET_SLIDE, SET_EVENTS} from "../../types";
import IsLoadingEventsReducer from "../../redux/reducers/isLoadingEventsReducer";

const SliderBlock = () => {
    const [pos, setPos] = useState({posX: 500, posY: 500})
    const {numberOfSlide, listEvents} = useSelector(state => state.numberOfSlideReducer)
    const {loading} = useSelector(state => state.IsLoadingEventsReducer)


    const setRoundPos = (e) => {
        const round = document.getElementById("round_animation");
        const arrowRight = document.getElementById("arrow_right_cover")
        const arrowLeft = document.getElementById("arrow_left_cover")

        if (e.clientY > 120) {
            setPos({
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
            setPosition(arrowLeft, round)
        } else if (e.target.id === "arrow_right_cover") {
            setPosition(arrowRight, round)
        }
    }

    const clearTextDescAnimationBeforeRender = () => {
        const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
        arrTextSlide.map(el => {
            el.style.animationName = "none"
        })
        return arrTextSlide;
    }

    const setPosition = (arrow, round) => {
        setPos({
            posX: arrow.getBoundingClientRect().left + 15,
            posY: arrow.getBoundingClientRect().top + 15,
        })
        round.style.width = arrow.getBoundingClientRect().width + 4 + "px";
        round.style.height = arrow.getBoundingClientRect().height + 4 + "px";
    }

    let appearancePrevSlide = listEvents.length - 1;
    numberOfSlide > 0 ? appearancePrevSlide = numberOfSlide - 1 : numberOfSlide == listEvents.length ? appearancePrevSlide = 0 : appearancePrevSlide

    return (
        <div id="slider_block" onMouseMove={setRoundPos} className="slider_block">
            <RoundAnimation posX={pos.posX} posY={pos.posY}/>

            <div className="right_pixel_decoration"/>
            {
                (loading)
                    ?
                    <h1 id="main_slide" className="main_slide">LOADING</h1>
                    :
                    <React.Fragment>
                        <div id="main_slide" className="main_slide"
                             style={{backgroundImage: listEvents[numberOfSlide].imgPath}}/>

                        <div id="slide_before" className="slide_before"
                             style={{backgroundImage: listEvents[appearancePrevSlide].imgPath}}>
                        </div>
                    </React.Fragment>
            }
            <TextDesc clearAnimation={clearTextDescAnimationBeforeRender}/>
            <SlidePagination clearAnimation={clearTextDescAnimationBeforeRender}/>
            <Arrows clearAnimation={clearTextDescAnimationBeforeRender}/>
        </div>
    )
    // }
}
export default SliderBlock;



//------------------------------------------------------------------------

// const mapStateToProps = (state) => {
//     return {
//         state: state
//     }
// }
//
// class SliderBlock extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             posX: 500,
//             posY: 500,
//         }
//     }
//
//
//     setRoundPos = (e) => {
//         const round = document.getElementById("round_animation");
//         const arrowRight = document.getElementById("arrow_right_cover")
//         const arrowLeft = document.getElementById("arrow_left_cover")
//
//         if (e.clientY > 120) {
//             this.setState({
//                 posX: e.clientX,
//                 posY: e.clientY,
//             });
//             round.style.width = "35px"
//             round.style.height = "35px"
//             round.style.opacity = "1"
//             round.style.transition = ".05s"
//
//         } else if (e.clientY <= 120) {
//             round.style.opacity = "0"
//             round.style.transition = ".5s"
//         }
//
//         if (e.target.id === "arrow_left_cover") {
//             this.setState({
//                 // here to change set round relatively arrow
//                 posX: arrowLeft.getBoundingClientRect().left + 15,
//                 posY: arrowLeft.getBoundingClientRect().top + 15,
//             })
//             round.style.width = arrowLeft.getBoundingClientRect().width + 4 + "px";
//             round.style.height = arrowLeft.getBoundingClientRect().height + 4 + "px";
//         }
//         else if (e.target.id === "arrow_right_cover") {
//             this.setState({
//                 posX: arrowRight.getBoundingClientRect().left + 15,
//                 posY: arrowRight.getBoundingClientRect().top + 15,
//             })
//             round.style.width = arrowRight.getBoundingClientRect().width + 4 + "px";
//             round.style.height = arrowRight.getBoundingClientRect().height + 4 + "px";
//         }
//     }
//
//     render() {
//         const {numberOfSlide} = this.props.state.numberOfSlideReducer
//         let appearancePrevSlide = listEvents.length - 1;
//         numberOfSlide > 0 ? appearancePrevSlide = numberOfSlide - 1 : numberOfSlide == listEvents.length ? appearancePrevSlide = 0 : appearancePrevSlide
//
//         return (
//             <div id="slider_block" onMouseMove={this.setRoundPos} className="slider_block">
//                 <RoundAnimation posX={this.state.posX} posY={this.state.posY}/>
//                 <div className="right_pixel_decoration"/>
//
//                 <div id="main_slide" className="main_slide"
//                      style={{backgroundImage: listEvents[numberOfSlide].imgPath}}/>
//
//                 <div id="slide_before" className="slide_before"
//                      style={{backgroundImage: listEvents[appearancePrevSlide].imgPath}}>
//                 </div>
//                 <TextDesc/>
//                 <SlidePagination/>
//                 <Arrows/>
//             </div>
//         )
//     }
// }
//
// export default connect(mapStateToProps, null)(SliderBlock)
