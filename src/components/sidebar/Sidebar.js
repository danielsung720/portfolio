import React, { useEffect, useState } from 'react';
import HeadShot from '../../images/head_shot.jpg';
import '../../scss/sidebar.scss';

const navData = [ 'Resume', 'Todo List', 'PomodoroTimer', 'Seadch(API)'];

const Sidebar = () => {

    const [documentHeight, setDocumentHeight] = useState(document.documentElement.clientHeight);

    useEffect(() => {
        window.addEventListener('load', () => {
            setDocumentHeight(document.body.scrollHeight);
        })
    })

    return (
        <div className="sidebar_wrapper" style={{ height: documentHeight - 0.1 + 'px' }}>
            <div className="sidebar">
                <div className="photo">
                    <img src={HeadShot} alt="isME"></img>
                </div>
                <div className="title">
                    <h2>Daniel</h2>
                    <p>來自高雄的熱血男子</p>
                </div>
                <div className="nav">
                    <ul>
                        {navData.map((item, i) => {
                            return <li key={i}>
                                        <button>{item}</button>
                                    </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;