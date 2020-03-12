import React from 'react';
// import { Route, Switch } from 'react-router'
import './App.css';
import Mp4 from './Love-Coding.mp4'

function App() {
 
  return (
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src={Mp4} type="video/mp4"/>
      </video>
      <div class="content">
        <h1>GULIGENA AIERKEN</h1>
          <p>Full Stack Developer | Software Engineer</p>
      </div>
    </div>
  );
}

export default App;
