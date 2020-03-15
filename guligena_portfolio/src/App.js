import React from 'react';
import { Route, Switch } from 'react-router'
import './App.css';
import Mp4 from './Love-Coding.mp4'
import { Container } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import About from './Components/About';
import Blogs from './Components/Blog';
import Contact from './Components/Contact';
import Projects from './Components/Project';
import Resume from './Components/Resume'
import { Link as RouterLink } from 'react-router-dom';


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
      </Container>
      <Container className="navbar">
        <Breadcrumbs aria-label="breadcrumb">
          <RouterLink className="navfont navcolor" to="/" onClick={this.handleClick}>
            About Me
          </RouterLink>
          <RouterLink className="navfont navcolor" to="/projects" onClick={this.handleClick} >
            Projects
          </RouterLink>
          <RouterLink  className="navfont navcolor" to="/blogs" onClick={this.handleClick}>Blogs</RouterLink>
          <RouterLink  className="navfont navcolor" to="/contact" onClick={this.handleClick}>Contact Me</RouterLink>
          <RouterLink  className="navfont navcolor" to="/resume" onClick={this.handleClick}>Resume</RouterLink>
      </Breadcrumbs>
      </Container>
      <Switch>
       <Route exact path="/" component={ About }></Route>
       <Route exact path="/blogs" component={ Blogs }></Route>
       <Route exact path="/contact" component={ Contact }></Route>
       <Route exact path="/projects" component={ Projects }></Route>
       <Route exact path="/resume" component={ Resume }></Route>
      </Switch>
    </div>
    );
  }
}

export default App;
