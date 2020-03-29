import React from 'react'
import { Button, Container } from '@material-ui/core'
import YouTube from 'react-youtube-embed'

export default function ProjectDetail(props) {
    console.log("working", props.project)
    return (
        <React.Fragment>
            <Container maxWidth='sm' style={{position: 'fixed', top: 300}}><YouTube id={props.project.youtube_id} /></Container>
            <Button style={{position: 'fixed', top: 620}}onClick={props.handleBackClick} color="primary" >Back</Button>
        </React.Fragment>
    )
}
