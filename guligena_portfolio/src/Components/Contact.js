import React, { Component } from 'react'
import { Grid, GridList, Tooltip } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


export default class Contact extends Component {
    
    handleGitHubClick = () => {
        window.location.assign('https://github.com/GAierken');
    }
    
    handleLinkedInClick = () => {
        window.location.assign('https://www.linkedin.com/in/guligena-aierken/');
    }

    
    handleMailClick = () => {
        window.location.assign('mailto:g.aierken@gmail.com')
    }
    
    handleDesClick = () => {
        window.location.assign('https://medium.com/@g.aierken')
    }
    
    handleResumeClick = () => {
        console.log('clicked')
        
    }
    
    render() {
       
        return (
            <React.Fragment>
              <GridList >
                <Grid><Tooltip title="GitHub"><GitHubIcon onClick={this.handleGitHubClick} style={{ fontSize: 23, position: 'fixed', color: '#ffffff', top: 0, left: 0 }}  className="contacts"/></Tooltip></Grid>
                <Grid><Tooltip title="LinkedIn"><LinkedInIcon onClick={this.handleLinkedInClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 40 }} className="linkedin"/></Tooltip></Grid>
                <Grid><Tooltip title="Blog"><DescriptionIcon onClick={this.handleDesClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 80 }} className="linkedin"/></Tooltip></Grid>
                <Grid><Tooltip title="Email"><EmailIcon onClick={this.handleMailClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 120 }}  className="email"/></Tooltip></Grid>
                <Grid><Tooltip title="Resume"><AssignmentIndIcon  onClick={this.handleResumeClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 160 }} /></Tooltip></Grid>
              </GridList>
            </React.Fragment>
            
        )
    }
}
