import React from 'react';
import Logo from '../../images/logo.png';
import '../../scss/sidebar.scss';

const navData = [
    {
        text: 'Resume',
        url: '/portfolio/#/',
    },
    {
        text: 'Todo List',
        url: '/portfolio/#/todo_list',
    },
    {
        text: 'PomodoroTimer',
        url: '/portfolio/#/pomodoro_timer',
    },
    {
        text: 'Search(API)',
        url: '/portfolio/#/search_api',
    }
]

const handleScroll = () => {
    window.scrollTo(0,0);
}

const Sidebar = () => {
    return (
        <div className="sidebar_wrapper">
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
                            return(
                                <li key={i}>
                                    <a href={item.url} onClick={handleScroll}>{item.text}</a>
                                </li>
                                )
                        })}
                    </ul>
                </div>
                <div className="remarks">
                    <p>一個立志成為</p>
                    <p>編碼大師的北漂兒</p>
                    <p>在此用高雄的溫度</p>
                    <p>來寫下對於前端的熱情</p>
                    <p>（～￣▽￣～）</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;