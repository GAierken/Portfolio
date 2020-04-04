import React from 'react';
import { Route, Switch } from 'react-router'
import './App.css';
import Mp4 from './Love-Coding.mp4'
import { Container } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import About from './Components/About';
import Contact from './Components/Contact';
import ProjectContainer from './Components/ProjectContainer';
import { Link as RouterLink } from 'react-router-dom';
import PDFViewer from './Components/PDFViewer/PDFViewer';
import PDFJSBackend from './backends/pdfjs.js'
import { Typography } from '@material-ui/core';

class App extends React.Component {
 

 
  
 render() {
   
   
  return (
    <React.Fragment>
        <div className="App">
      
        <video autoPlay muted loop id="myVideo">
         <source src={Mp4} type="video/mp4"/>
        </video>
        <Typography variant="h1">Guligena Aierken</Typography>
        <Contact/>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
