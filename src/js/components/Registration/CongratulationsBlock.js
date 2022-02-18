import React from 'react';

const CongratulationsBlock = ({styleBlockCongratulations, hideCongratulationsBlock, textDesc={textDesc} }) => {
    return (
        <div style={{animationName: styleBlockCongratulations}} className='congratulations-block'>
            <p>
                {textDesc}
            </p>
            <button onClick={hideCongratulationsBlock}  className='congratulations-btn'>OK</button>
        </div>
    );
};

export default CongratulationsBlock;