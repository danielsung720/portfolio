import React from 'react';
import Logo from '../../images/logo.png';
import '../../scss/sidebar.scss';

const navData = [
    {
        text: 'Resume',
        url: '/resume/#/',
    },
    {
        text: 'Todo List',
        url: '/resume/#/todo_list',
    },
    {
        text: 'PomodoroTimer',
        url: '/pomodoro_timer',
    },
    {
        text: 'Search(API)',
        url: '/search_api',
    }
]

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
                                    <a href={item.url}>{item.text}</a>
                                </li>
                                )
                        })}
                    </ul>
                </div>
                <div className="remarks">
                    <p>一個立志成為</p>
                    <p>前端大師的北漂兒</p>
                    <p>在此用高雄的溫度</p>
                    <p>來寫下對於前端的熱情</p>
                    <p>（～￣▽￣～）</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;