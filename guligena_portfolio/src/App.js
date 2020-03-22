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


class App extends React.Component {
 

 
  
 render() {
   
   
  return (
    
    <div className="App">
      
      <video autoPlay muted loop id="myVideo">
        <source src={Mp4} type="video/mp4"/>
      </video>
      <Container className="content">
        <h1>GULIGENA AIERKEN</h1>
          <p>Full Stack Developer | Software Engineer</p>
          <Contact/>
      </Container>
      <Container className="navbar">
        <Breadcrumbs aria-label="breadcrumb">
          <RouterLink className="navfont navcolor" to="/" onClick={this.handleClick}>
            About Me
          </RouterLink>
          <RouterLink className="navfont navcolor" to="/projects" onClick={this.handleClick} >
            Projects
          </RouterLink>
      </Breadcrumbs>
      </Container>
      <Switch>
       <Route exact path="/" component={ About }></Route>
       <Route exact path="/projects" component={ ProjectContainer }></Route>
       <Route exact path="/resume" render={() => <PDFViewer backend={PDFJSBackend} src='../public/Guligena_Aierken_Resume.pdf'/>}></Route>
      </Switch>
    </div>
    );
  }
}

export default App;
