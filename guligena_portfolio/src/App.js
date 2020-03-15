import React from 'react';
import { Route, Switch } from 'react-router'
import './App.css';
import Mp4 from './Love-Coding.mp4'
import { Container } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Projects from './Components/Project';
import Resume from './Components/Resume'
import { Link as RouterLink } from 'react-router-dom';

class App extends React.Component {
 
  handleClick = (evt) => {
    evt.preventDefault()
   console.log('clicked')
 }

 
  
 render() {
  return (
    
    <div className="App">
      <Switch>
       <Route exact path="/" component={ About }></Route>
       <Route exact path="/blogs" component={ Blog }></Route>
       <Route exact path="/contact" component={ Contact }></Route>
       <Route exact path="/projects" component={ Projects }></Route>
       <Route exact path="/resume" component={ Resume }></Route>
      </Switch>
      <video autoPlay muted loop id="myVideo">
        <source src={Mp4} type="video/mp4"/>
      </video>
      <Container className="content">
        <h1>GULIGENA AIERKEN</h1>
          <p>Full Stack Developer | Software Engineer</p>
      </Container>
      <Container className="navbar">
        <Breadcrumbs aria-label="breadcrumb">
          <RouterLink className="navfont navcolor" to="/" >
            Bio
          </RouterLink>
          <RouterLink className="navfont navcolor" to="/projects" >
            Projects
          </RouterLink>
          <RouterLink  className="navfont navcolor" to="/blogs">Blog</RouterLink>
          <RouterLink  className="navfont navcolor" to="/contact">Contact me</RouterLink>
          <RouterLink  className="navfont navcolor" to="/resume">Resume</RouterLink>
      </Breadcrumbs>
      </Container>
      
    </div>
    );
  }
}

export default App;
