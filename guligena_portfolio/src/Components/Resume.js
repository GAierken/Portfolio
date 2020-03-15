import React, { Component } from 'react';
import PDF from "react-pdf-js";
import MyResume from './Guligena_Aierken_Resume.pdf'


export default class Resume extends Component {
    render() {
        return (
            <div>
               <PDF file={MyResume}/>
            </div>
        )
    }
}
