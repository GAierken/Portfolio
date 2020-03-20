import React, { Component } from 'react'
import { Grid, GridList } from '@material-ui/core'
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

    handleFacebookClick = () => {
        window.location.assign('https://www.facebook.com/people/G%C3%BClgin%C3%A4-%C3%84rkin/1253246231');
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
                <Grid><GitHubIcon onClick={this.handleGitHubClick} style={{ fontSize: 23, position: 'fixed', color: '#ffffff', top: 0, left: 0 }}  className="contacts"/></Grid>
                <Grid><LinkedInIcon onClick={this.handleLinkedInClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 40 }} className="linkedin"/></Grid>
                <Grid><DescriptionIcon onClick={this.handleDesClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 80 }} className="linkedin"/></Grid>
                <Grid><EmailIcon onClick={this.handleMailClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 120 }}  className="email"/></Grid>
                <Grid><AssignmentIndIcon  onClick={this.handleResumeClick} style={{ fontSize: 25, position: 'fixed', color: '#ffffff', top: 0, left: 160 }} /></Grid>
              </GridList>
            </React.Fragment>
            
        )
    }
}
