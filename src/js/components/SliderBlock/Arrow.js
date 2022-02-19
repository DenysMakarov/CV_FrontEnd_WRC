import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Arrow = ({changeSlide, icon,  classN, childClass, refArrow}) => {
    return (
        <div className={classN}>
            <div ref={refArrow} onClick={changeSlide}  className={childClass}/>
            <FontAwesomeIcon icon={icon}/>
        </div>
    );
};

export default Arrow;