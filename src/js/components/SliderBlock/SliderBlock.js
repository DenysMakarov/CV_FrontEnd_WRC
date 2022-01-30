import React, {useContext, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import Arrows from "./ArrowsBlock";
import {eventInfo} from "../../db/dataBase";
import SlidePagination from "./SlidePagination";
import TextDesc from "./TextDesc";
import RoundAnimation from "./RoundAnimation";
import {AuthContext} from "../../App";
import {SET_SLIDE, SET_SLIDES} from "../../types";

const SliderBlock = () => {
    const dispatch = useDispatch();

    const [pos, setPos] = useState({posX: 500, posY: 500})
    const [events, setEvents] = useState({})
    const [loading, setLoading] = useState(true)
    const [img, setImg] = useState("url(img/f1_maclaren_2.jpg)")
    const {numberOfSlide} = useSelector(state => state.numberOfSlideReducer)
    const {sliderInfo} = useSelector(state => state.numberOfSlideReducer)
    const {getEvents} = useContext(AuthContext)

    useEffect(() => {
        getEvents()
            .then(data => {
                setEvents(data)
                setLoading(false)
                return data
            })
            .then(data => dispatch({type: SET_SLIDES, payload: data}))
    }, [])

    console.log(events)

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
            setPos({
                // here to change set round relatively arrow
                posX: arrowLeft.getBoundingClientRect().left + 15,
                posY: arrowLeft.getBoundingClientRect().top + 15,
            })
            round.style.width = arrowLeft.getBoundingClientRect().width + 4 + "px";
            round.style.height = arrowLeft.getBoundingClientRect().height + 4 + "px";
        } else if (e.target.id === "arrow_right_cover") {
            setPos({
                posX: arrowRight.getBoundingClientRect().left + 15,
                posY: arrowRight.getBoundingClientRect().top + 15,
            })
            round.style.width = arrowRight.getBoundingClientRect().width + 4 + "px";
            round.style.height = arrowRight.getBoundingClientRect().height + 4 + "px";
        }
    }

    const setSld = () => {
        dispatch({type: SET_SLIDE, payload: 3})
    }

    let appearancePrevSlide = events.length - 1;
    numberOfSlide > 0 ? appearancePrevSlide = numberOfSlide - 1 : numberOfSlide == events.length ? appearancePrevSlide = 0 : appearancePrevSlide

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
                             style={{backgroundImage: events[numberOfSlide].imgPath}}/>

                        <div id="slide_before" className="slide_before"
                             style={{backgroundImage: events[appearancePrevSlide].imgPath}}>
                        </div>
                    </React.Fragment>
            }
            <button onClick={setSld} style={{marginTop: '800px', zIndex: "10000"}}>CLICK</button>

            <TextDesc/>
            <SlidePagination/>
            <Arrows/>
        </div>
    )
    // }
}
export default SliderBlock;
// export default connect(mapStateToProps, null)(SliderBlock)


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
//         let appearancePrevSlide = eventInfo.length - 1;
//         numberOfSlide > 0 ? appearancePrevSlide = numberOfSlide - 1 : numberOfSlide == eventInfo.length ? appearancePrevSlide = 0 : appearancePrevSlide
//
//         return (
//             <div id="slider_block" onMouseMove={this.setRoundPos} className="slider_block">
//                 <RoundAnimation posX={this.state.posX} posY={this.state.posY}/>
//                 <div className="right_pixel_decoration"/>
//
//                 <div id="main_slide" className="main_slide"
//                      style={{backgroundImage: eventInfo[numberOfSlide].imgPath}}/>
//
//                 <div id="slide_before" className="slide_before"
//                      style={{backgroundImage: eventInfo[appearancePrevSlide].imgPath}}>
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