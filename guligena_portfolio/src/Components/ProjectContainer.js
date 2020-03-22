import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import MediaCard from './MediaCard'

export default class ProjectContainer extends Component {
    render() {
        return (
         <React.Fragment>
           <Container className="projects">Projects</Container>
           <MediaCard />
         </React.Fragment>
        )
    }
}
