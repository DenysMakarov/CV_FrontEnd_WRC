import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSlide} from "../../redux/actions/actions";

const SlidePagination = ({clearAnimation}) => {
    const {numberOfSlide, listEvents} = useSelector(state => state.numberOfSlideReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (listEvents.length) setActivePag()
    }, [numberOfSlide, listEvents.length])


    const setSlider = (e) => {
        if (+e.target.dataset.id !== numberOfSlide) {
            dispatch(setSlide(+e.target.dataset.id))
            clearAnimation()
        }
    }

    const setActivePag = () => {
        const arrPag = Array.from(document.getElementsByClassName("pagination_panel_number"))
        arrPag.map(el => el.classList.remove("pagination_panel_number_active"))
        arrPag[numberOfSlide].classList.add("pagination_panel_number_active")
    }

    return (
        <div>
            <ul className="slide_pagination_panel">
                {listEvents.length &&
                listEvents.map((el, index) => (
                    <li
                        key={index}
                        onClick={setSlider}
                        data-id={index}
                        style={{height: 100 / listEvents.length + "%"}}
                        className="pagination_panel_number">{"0" + (index + 1)}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default SlidePagination
