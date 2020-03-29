import React from 'react'
import { Button, Grid } from '@material-ui/core'
import YouTube from 'react-youtube-embed'

export default function ProjectDetail(props) {
    console.log("working", props.project)
    return (
        <React.Fragment>
            <Grid><YouTube id={props.project.youtube_id} /></Grid>
            <Button onClick={props.handleBackClick} color="primary" style={{top: 500}}>Detail</Button>
        </React.Fragment>
    )
}
