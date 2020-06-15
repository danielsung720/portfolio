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
            <Route path="/" exact component={Resume} />
            <Route path="/todo_list" component={TodoList} />
            <Route component={() => (<div>404 Not found </div>)} />
        </div>
    );
}

export default App;
