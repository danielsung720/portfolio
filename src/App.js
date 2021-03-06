import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Calender from './components/calendar/Calendar';
import Resume from './components/resume/Resume';
import TodoList from './components/todolist/TodoList';
import PomodoroTimer from './components/pomodorotimer/PomodoroTimer';
import Search from './components/search/Search';
import CtrlBar from './components/ctrlbar/CrtlBar';
import './scss/app.scss';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Calender />
            <CtrlBar />
            <Route path="/" exact component={Resume} />
            <Route path="/todo_list" component={TodoList} />
            <Route
                path="/pomodoro_timer"
                render={(props) => <PomodoroTimer workingTime={25} restingTime={5} {...props} />}
            />
            <Route path="/search_api" component={Search} />
        </div>
    );
}

export default App;
