import React, {useEffect, useState} from 'react';

const Slides = ({firstSlideImg, prevSlideImg, numberOfSlide}) => {

    const [secondSlideAnimate, setSecondSlideAnimate] = useState({animationName: 'first_animate_prevSlider', backgroundImage: firstSlideImg})
    const [mainSlideAnimate, setMainSlideAnimate] = useState({animationName: 'first_animate_Slider', backgroundImage: prevSlideImg})

    useEffect(() => {
        setMainSlideAnimate({animationName: 'none',})
        setSecondSlideAnimate({animationName: 'none'})
        setTimeout(() => {
            setMainSlideAnimate({animationName: 'first_animate_Slider', backgroundImage: firstSlideImg})
            setSecondSlideAnimate({ animationName: 'first_animate_prevSlider', backgroundImage: prevSlideImg})
        }, 50)
    }, [numberOfSlide])

    return (
        <React.Fragment>
            <div id="main_slide" className={`main_slide `} style={{ ...mainSlideAnimate}}/>
            <div id="slide_before" className={`slide_before `} style={{ ...secondSlideAnimate}}/>
        </React.Fragment>
    );
};

export default Slides;