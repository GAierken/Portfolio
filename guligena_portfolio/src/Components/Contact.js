import React, { Component } from 'react'
import { Grid, GridList, Container } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
              <GridList >
                <Grid><GitHubIcon style={{ fontSize: 60, position: 'fixed', color: '#ed6663', top: 300 }}  className="contacts"/></Grid>
                <Grid><LinkedInIcon style={{ fontSize: 60, position: 'fixed', color: '#ed6663', top: 400 }} className="linkedin"/></Grid>
                <Grid><EmailIcon style={{ fontSize: 60, position: 'fixed', color: '#ed6663', top: 500 }}  className="email"/></Grid>
              </GridList>
            </React.Fragment>
            
        )
    }
}
