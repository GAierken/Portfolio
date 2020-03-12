import React from 'react';
// import { Route, Switch } from 'react-router'
import './App.css';
import Mp4 from './Love-Coding.mp4'

function App() {
  console.log(Mp4)
  return (
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src={Mp4} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
