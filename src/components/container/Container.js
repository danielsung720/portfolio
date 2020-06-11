import React from 'react';
import Calender from '../calendar/Calendar';
import Resume from '../resume/Resume';
import '../../scss/container.scss';

const Container = () => {
    

    return (
        <div className="container_wrapper">
            <Calender />
            <Resume />
        </div>
    )
}

export default Container;