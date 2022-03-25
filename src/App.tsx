import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Education from './components/Education';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Header />
            <About />
            <br />
            <Education />
            <br />
            <ProjectList />
            <body className='App-body'>

            </body>
            {/*
            <body className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.tsx</code> and save to reload. Fuck
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                Learn React
                </a>
    </body>*/}
        </div>
    );
}

export default App;
