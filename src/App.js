import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/container/Container';
import './scss/app.scss';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Container />
        </div>
    );
}

export default App;
