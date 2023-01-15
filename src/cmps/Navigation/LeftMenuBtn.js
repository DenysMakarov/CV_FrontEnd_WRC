import React from 'react';

const LeftMenuBtn = ({operatorMenu, animationBtn}) => {
    return (
        <div className='menu-block'>
            <div className="btn_menu_block" style={{zIndex: '1000'}}>
                <div onClick={operatorMenu} className='btn_menu_block-cover'>
                    <div style={animationBtn(45)} className={`menu-btn-line-left menu-btn-line`}/>
                    <div style={animationBtn(-45)} className={`menu-btn-line-right menu-btn-line`}/>
                </div>
            </div>
        </div>
    );
};

export default LeftMenuBtn;