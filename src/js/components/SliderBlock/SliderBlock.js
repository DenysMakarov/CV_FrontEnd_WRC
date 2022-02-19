import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
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
    }, [numberOfSlide, listEvents.length])

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


    return (
        listEvents.length
            ? <div id="slider_block" onMouseMove={setRoundPos} className="slider_block">
                <RoundAnimation styleOfRound={styleOfRound}/>
                <div className="right_pixel_decoration"/>
                {
                    listEvents.length &&
                    <Slides numberOfSlide={numberOfSlide}
                            firstSlideImg={listEvents[numberOfSlide].imgPath}
                            prevSlideImg={listEvents[prevSlide].imgPath}
                    />
                }
                <TextDesc/>
                <SlidePagination/>
                <Arrows leftArrow={arrowLeft} rightArrow={arrowRight}/>
            </div>
            : <h1 className='slider-loading' >Loading...</h1>
    )
    // }
}
export default SliderBlock;
