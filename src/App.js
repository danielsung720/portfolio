import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Calender from './components/calendar/Calendar';
import Resume from './components/resume/Resume';
import './scss/app.scss';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Calender />
            <Route path="/resume" exact component={Resume} />
            {/* <Route path="/books" component={Books} /> */}
        </div>
    );
}

export default App;
