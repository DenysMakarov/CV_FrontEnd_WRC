import React, {Fragment, useEffect, useState} from 'react';
import {useSelector} from "react-redux";


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
