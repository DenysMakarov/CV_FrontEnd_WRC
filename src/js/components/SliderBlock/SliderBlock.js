import React, {useContext, useEffect, useRef, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import Arrows from "./ArrowsBlock";
import SlidePagination from "./SlidePagination";
import TextDesc from "./TextDesc";
import RoundAnimation from "./RoundAnimation";
import Slides from "./Slides";

const SliderBlock = () => {
    const {numberOfSlide, listEvents, error} = useSelector(state => state.numberOfSlideReducer)
    const {loading} = useSelector(state => state.IsLoadingEventsReducer)
    const [prevSlide, setPrevSlide] = useState(0)
    const [styleOfRound, setStyleOfRound] = useState({})

    const arrowLeft = useRef()
    const arrowRight = useRef()

    // NEED REDEVELOP
    useEffect(() => {
        if (listEvents.length) imgPrevSlider()
        changeAnimationSlide()
    }, [numberOfSlide, loading])

    const imgPrevSlider = () => {
        (numberOfSlide === listEvents.length - 1) ?
            setPrevSlide(0) : (numberOfSlide === 0)
                ? setPrevSlide(listEvents.length - 1) : setPrevSlide(numberOfSlide - 1)
    }

    const setRoundPos = (e) => {
        if (e.target === arrowLeft.current) {
            setPositionOverArrow(arrowLeft)
        } else if (e.target === arrowRight.current) {
            setPositionOverArrow(arrowRight)
        } else {
            if (e.clientY <= 120) {
                setStyleOfRound({
                    ...styleOfRound,
                    opacity: 0
                })
            }
            if (e.clientY > 120) {
                setStyleOfRound({
                    ...styleOfRound,
                    opacity: 1,
                    left: e.clientX - 17.5 + 'px',
                    top: e.clientY - 17.5 + 'px',
                    width: 35 + "px",
                    height: 35 + "px"
                })
            }

        }

    }

    const setPositionOverArrow = (arrow) => {
        setStyleOfRound({
            ...styleOfRound,
            left: arrow.current.getBoundingClientRect().left - 2 + 'px',
            top: arrow.current.getBoundingClientRect().top - 2 + 'px',
            width: arrow.current.getBoundingClientRect().width + 4 + "px",
            height: arrow.current.getBoundingClientRect().height + 4 + "px",
        })
    }

    const clearTextDescAnimationBeforeRender = () => {
        const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
        arrTextSlide.map(el => {
            el.style.animationName = "none"
        })
        return arrTextSlide;
    }
    const changeAnimationSlide = () => {
        let getMainSlide = document.getElementById("main_slide")
        let getBeforeSlide = document.getElementById("slide_before")


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

    return (
        <div id="slider_block" onMouseMove={setRoundPos} className="slider_block">
            <RoundAnimation styleOfRound={styleOfRound}/>
            <div className="right_pixel_decoration"/>

            {
                (loading) ? <Slides path="url(../../img/loading.png)"/>
                    : (error) ? <Slides path="url(../../img/error.png)"/>
                        : <Slides path={listEvents[numberOfSlide].imgPath} prevSlide={listEvents[prevSlide].imgPath}/>
            }

            <TextDesc clearAnimation={clearTextDescAnimationBeforeRender}/>
            <SlidePagination clearAnimation={clearTextDescAnimationBeforeRender}/>
            <Arrows leftArrow={arrowLeft} rightArrow={arrowRight} clearAnimation={clearTextDescAnimationBeforeRender}/>
        </div>
    )
    // }
}
export default SliderBlock;

//
// const SliderBlock = () => {
//     const [pos, setPos] = useState({posX: 500, posY: 500})
//     const {numberOfSlide, listEvents, error} = useSelector(state => state.numberOfSlideReducer)
//     const {loading} = useSelector(state => state.IsLoadingEventsReducer)
//     const [prevSlide, setPrevSlide] = useState(0)
//     const [styleOfRound, setStyleOfRound] = useState({})
//
//
//     // NEED REDEVELOP
//     useEffect(() => {
//         if (listEvents.length) {
//             if (numberOfSlide === listEvents.length-1){
//                 setPrevSlide(0)
//             } else if(numberOfSlide === 0) {
//                 setPrevSlide(listEvents.length-1)
//             } else {
//                 setPrevSlide(numberOfSlide - 1)
//             }
//         }
//
//         changeAnimationSlide()
//     }, [numberOfSlide, loading, prevSlide])
//
//
//     const setRoundPos = (e) => {
//         const round = document.getElementById("round_animation");
//         const arrowRight = document.getElementById("arrow_right_cover")
//         const arrowLeft = document.getElementById("arrow_left_cover")
//
//         if (e.clientY > 120) {
//             setPos({
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
//             setPosition(arrowLeft, round)
//         } else if (e.target.id === "arrow_right_cover") {
//             setPosition(arrowRight, round)
//         }
//     }
//     const setPosition = (arrow, round) => {
//         setPos({
//             posX: arrow.getBoundingClientRect().left + 15,
//             posY: arrow.getBoundingClientRect().top + 15,
//         })
//         round.style.width = arrow.getBoundingClientRect().width + 4 + "px";
//         round.style.height = arrow.getBoundingClientRect().height + 4 + "px";
//     }
//
//     const clearTextDescAnimationBeforeRender = () => {
//         const arrTextSlide = Array.from(document.getElementsByClassName("text_description_slide"))
//         arrTextSlide.map(el => {
//             el.style.animationName = "none"
//         })
//         return arrTextSlide;
//     }
//     const changeAnimationSlide = () => {
//         let getMainSlide = document.getElementById("main_slide")
//         let getBeforeSlide = document.getElementById("slide_before")
//
//
//         getMainSlide.style.animationName = "none"
//         getBeforeSlide.classList.remove("slider_before_appear")
//         getBeforeSlide.classList.add("slider_block_hide")
//         getMainSlide.classList.remove("slider_block_appear")
//         getMainSlide.classList.add("slider_block_hide")
//
//         setTimeout(() => {
//             getBeforeSlide.classList.remove("slider_block_hide")
//             getBeforeSlide.classList.add("slider_before_appear")
//             getMainSlide.classList.remove("slider_block_hide")
//             getMainSlide.classList.add("slider_block_appear")
//         }, 200)
//     }
//
//
//     // let appearancePrevSlide = listEvents.length - 1;
//     // numberOfSlide > 0 ? appearancePrevSlide = numberOfSlide - 1 : numberOfSlide == listEvents.length ? appearancePrevSlide = 0 : appearancePrevSlide
//
//     return (
//         <div id="slider_block" onMouseMove={setRoundPos} className="slider_block">
//             <RoundAnimation posX={pos.posX} posY={pos.posY} styleOfRound={styleOfRound}/>
//             <div className="right_pixel_decoration"/>
//
//             {
//                 (loading) ? <Slides path="url(../../img/loading.png)"/>
//                     : (error) ? <Slides path="url(../../img/error.png)"/>
//                         : <Slides path={listEvents[numberOfSlide].imgPath} prevSlide={listEvents[prevSlide].imgPath} />
//             }
//
//             <TextDesc clearAnimation={clearTextDescAnimationBeforeRender}/>
//             <SlidePagination clearAnimation={clearTextDescAnimationBeforeRender}/>
//             <Arrows clearAnimation={clearTextDescAnimationBeforeRender}/>
//         </div>
//     )
//     // }
// }
// export default SliderBlock;
//
