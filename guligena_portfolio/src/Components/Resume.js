import React, { Component } from 'react';
import PDF from "react-pdf-js";
import MyResume from './Guligena_Aierken_Resume.pdf'
import { Container } from '@material-ui/core';


export default class Resume extends Component {
    render() {
        return (
            <Container className="resume"><PDF file={MyResume}/></Container>    
        )
    }
}
