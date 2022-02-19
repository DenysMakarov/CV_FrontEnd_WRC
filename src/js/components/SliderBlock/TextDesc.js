import React, {Fragment, useEffect, useState} from 'react';
import {useSelector} from "react-redux";


const TextDesc = () => {
    const {numberOfSlide, listEvents, error} = useSelector(state => state.numberOfSlideReducer)
    const {loading} = useSelector(state => state.IsLoadingEventsReducer)
    const [styleText, setStyleText] = useState({animationName : "text_slider_appear"})
    //  had to created 'desc' => to set line animation
    const [desc, setDesc] = useState({
        title: '',
        titleDesc: '',
        date: ''
    })

    useEffect(() => {
        setStyleText({animationName : "none"})
        setTimeout(() => {
            setStyleText({animationName : "text_slider_appear"})
            if(listEvents.length){
                setDesc({
                    title:  listEvents[numberOfSlide].title,
                    titleDesc:  listEvents[numberOfSlide].titleDesc,
                    date:  listEvents[numberOfSlide].date
                })
            }

        }, 50)
    }, [numberOfSlide, listEvents.length])


    return (
        (loading) ? <h1>LOADING...</h1>
            : (error) ? <h1>ERROR</h1>
                :
                <Fragment>
                    <div className="text_description_block">

                        <h5 style={styleText} className={`text_description_slide text_description_slide_top `}>{desc.titleDesc}</h5>
                        <h5 style={styleText} className={`text_description_slide text_description_slide_center `}>Strategy decision <br/>
                            {new Date(desc.date).getDate()}
                            <span
                                style={{color: "red"}}> / </span> {new Date(desc.date).getMonth() + 1}
                            <span style={{color: "red"}}> / </span> {new Date(desc.date).getFullYear()}<br/>
                        </h5>
                        <h1 style={styleText} className={`text_description_slide text_description_slide_bottom `}>{desc.title}</h1>
                        {/*<BtnEvent/>*/}
                    </div>
                    <h1 id="text_description_slide_behind"
                        className={`text_description_slide_behind `}>{desc.title}</h1>
                </Fragment>
    )
}

export default TextDesc;
