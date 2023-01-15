import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSlide} from "../../store/actions/eventsActions";


const SlidePagination = () => {
    const {numberOfSlide, listEvents} = useSelector(state => state.numberOfSlideReducer)
    const dispatch = useDispatch()

    const setSlider = (e) => {
        if (+e.target.dataset.id !== numberOfSlide) {
            dispatch(setSlide(+e.target.dataset.id))
        }
    }

    const cls = (index) => (index == numberOfSlide) ? 'pagination_panel_number pagination_panel_number_active' : 'pagination_panel_number'

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
                        className={cls(index)}>{"0" + (index + 1)}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default SlidePagination
