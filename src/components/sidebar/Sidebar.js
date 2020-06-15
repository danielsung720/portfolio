import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo.png';
import '../../scss/sidebar.scss';

const navData = ['Resume', 'Todo List', 'PomodoroTimer', 'Seadch(API)'];

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
                    <img src={Logo} alt="isME"></img>
                </div>
                <div className="title">
                    <h2>Daniel's</h2>
                    <p>-Portfolio-</p>
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