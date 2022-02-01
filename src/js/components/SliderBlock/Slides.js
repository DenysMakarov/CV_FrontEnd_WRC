import React from 'react';

const Slides = ({path}) => {
    return (
        <React.Fragment>
            <div id="main_slide" className="main_slide"
                 style={{backgroundImage: path}}/>

            <div id="slide_before" className="slide_before"
                 style={{backgroundImage: path}}>
            </div>
        </React.Fragment>
    );
};

export default Slides;