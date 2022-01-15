import React from 'react';



export default function InformPage () {
    return (
        <div id="informPage_cover" className="informPage_cover">
            <div id="informPage" className="informPage">
                <h2 id="informPageText" className="informPageText">Hello</h2>
                <button onClick={(e)=>{document.getElementById("informPage_cover").style.display = "none"}} id="informPageBtn" className="informPageBtn">OK</button>
            </div>
        </div>

    )
}