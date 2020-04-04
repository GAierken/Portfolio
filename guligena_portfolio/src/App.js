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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
class App extends React.Component {
 
  state = {
    menuClicked: false,
    anchorEl: ''
  }

 handleClick = (evt) => {
   
   this.setState({
     menuClicked: !this.state.menuClicked,
     anchorEl: evt.currentTarget
   })
 }
  
 handleClose = () => {
   this.setState({
     menuClicked: !this.state.menuClicked,
     anchorEl: null
   })
 }
 
 render() {
   console.log(this.state.menuClicked)
   
  return (
    <React.Fragment>
        <div className="App">
      
        <video autoPlay muted loop id="myVideo">
         <source src={Mp4} type="video/mp4"/>
        </video>
        <Typography className="content name" align='center' variant="h1">Guligena Aierken</Typography>
        <Typography className="content title" align='center' variant="h3">Full Stack Web Developer | Software Engineer</Typography>
       
          <IconButton 
            className="menu icon button"
            aria-label="more"
            aria-haspopup="true"
            onClick={this.handleClick}
           >
            <MoreVertIcon className='menu icon button'/>
          </IconButton>
          <Menu
            open={this.state.menuClicked}
            anchorEl={this.state.anchorEl}
            keepMounted
            onClose={this.handleClose}
            >
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
          </Menu>
          


        <Contact/>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
