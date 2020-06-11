import React, { useState, useEffect } from 'react';
import '../../scss/calendar.scss';

const Calendar = () => {

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let [date, setDate] = useState(new Date());
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const weekday = date.getDay();
    const nowTime = date.toTimeString().split(' ')[0];

    useEffect(() => {
        let timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, [date]);

    return (
        <div className="calendar_wrapper">
            <div className="title">
                <span>CALENDAR</span>
            </div>
            <div className="calendar">
                <div className="year">
                    <span>{year}</span>
                </div>
                <div className="date">
                    <span>{month} / {day}</span>
                </div>
                <div className="weekday">
                    <span>{week[weekday]}</span>
                </div>
                <div className="time_now">
                    <span>{nowTime}</span>
                </div>
            </div>
        </div>
    )
}

export default Calendar;