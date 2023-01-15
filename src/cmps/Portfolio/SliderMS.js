import React from "react"

function goToLink () {
    alert("This is library of MagicSlider which had been developed by me for 'Codester' market. This link from www.codester.com where library is selling now. This slider works as a library. You can connect it in your personal code where you want. Instructions included into folder 'LIBRARY' of Git link");
    document.location = "http://www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html"
}

function SliderMS () {
    return (
        <div onClick={goToLink} className="block_of_works block_of_works_cover block_of_works_cover_slider" data-name="Magic Slider">
            <div className="slider_block" data-name="Magic Slider">
            </div>
        </div>
    )
}

export default SliderMS