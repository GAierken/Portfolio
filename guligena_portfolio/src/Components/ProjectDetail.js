import React from 'react'
import { Button } from '@material-ui/core'

export default function ProjectDetail(props) {
    console.log("working")
    return (
        <Button onClick={props.handleBackClick} color="primary" style={{top: 500}}>Detail</Button>
       
    )
}
