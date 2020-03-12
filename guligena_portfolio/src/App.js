import React from 'react';
// import { Route, Switch } from 'react-router'
import './App.css';
import Mp4 from './Love-Coding.mp4'
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


class App extends React.Component {
 
  handleClick = (evt) => {
    evt.preventDefault()
   console.log('clicked')
 }
  
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
          <Link  className="navfont navcolor" href="/" onClick={this.handleClick}>
            Bio
          </Link>
          <Link  className="navfont navcolor" href="/getting-started/installation/" onClick={this.handleClick}>
            Projects
          </Link>
          <Link  className="navfont navcolor" onClick={this.handleClick}>Blog</Link>
          <Link  className="navfont navcolor" onClick={this.handleClick}>Contact me</Link>
      </Breadcrumbs>
      </Container>
      
    </div>
    );
  }
}

export default App;
