import React from 'react';

const NoticeRemoveBlock = ({hideRemoveNotice, removeTicket}) => {

    return (
        <div className={'wrapper_notice-block'}>
            <div className='notice-block'>
                <button className='notice-btn notice-btn-red' onClick={removeTicket}>YES</button>
                <button className='notice-btn notice-btn-green' onClick={hideRemoveNotice}>NO</button>
            </div>
        </div>
    );

};

export default NoticeRemoveBlock;