import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Calender from './components/calendar/Calendar';
import Resume from './components/resume/Resume';
import TodoList from './components/todolist/TodoList';
import './scss/app.scss';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Calender />
            <Route path="/resume" exact component={Resume} />
            <Route path="/todo_list" component={TodoList} />
        </div>
    );
}

export default App;
