import React from 'react';

const CongratulationsBlock = ({styleBlockCongratulations, hideCongratulationsBlock, textDesc={textDesc} }) => {
    return (
        <div style={{animationName: styleBlockCongratulations}} className='congratulations-block'>
            <p>
                {textDesc}
                {/*Congratulations! <br/>*/}
                {/*Now you can enter in your account*/}
            </p>
            <button onClick={hideCongratulationsBlock}  className='congratulations-btn'>OK</button>
        </div>
    );
};

export default CongratulationsBlock;