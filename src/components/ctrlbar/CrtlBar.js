import React from 'react';
import GoTop from '../../images/gotop.png';
import GoBack from '../../images/goback.png';
import '../../scss/ctrlbar.scss';

const goTop = () => {
    window.scrollTo(0,0);
}

const goBack = () => {
    window.history.back();
}

const CtrlBar = () => {
    return (
        <div className="ctrl_bar">
            <div onClick={goTop}>
                <img src={GoTop} alt="goTop"/>        
            </div>
            <div onClick={goBack}>
                <img src={GoBack} alt="goBack"/>                    
            </div>
        </div>
    )
}

export default CtrlBar;