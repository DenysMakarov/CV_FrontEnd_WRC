import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Arrow = ({changeSlide, icon, id, classN, childId, childClass, refArrow}) => {
    return (
        <div id={id} className={classN}>
            <div ref={refArrow} onClick={changeSlide} id={childId} className={childClass}/>
            <FontAwesomeIcon icon={icon}/>
        </div>
    );
};

export default Arrow;