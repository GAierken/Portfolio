import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import MediaCard from './MediaCard'
import Therappoint from './therappoint_image.png'
import Flatiron from './shopping_image.png'
import Museum from './museums_image.png'
import ProjectDetail from './ProjectDetail'


export default class ProjectContainer extends Component {
    state = {
        projects: [
    
        {
            id: 1,
            name: "Therappoint",
            des: "Appointment scheduling app developed especially for early intervention service agencies",
            demo: "https://www.youtube.com/watch?v=QZEsGHZpaoo&feature=youtu.be",
            img: Therappoint,
            position: 0,
            youtube_id: 'QZEsGHZpaoo'
        },

         {
            id: 2,
            name: "Flatiron Baby Shopping",
            des: "E-commerce web-app designed for baby-products",
            demo: "https://www.youtube.com/watch?v=7cNyoHjJjiw&feature=youtu.be",
            img: Flatiron,
            position: 470,
            youtube_id: '7cNyoHjJjiw'
        },

        {
            id: 3,
            name: "NYC Museums",
            des: "Yelp-like web-app for museums in NYC where users can find and review museums",
            demo: "https://www.youtube.com/watch?v=1PeeuhozAIo&feature=youtu.be",
            img: Museum,
            position: 940,
            youtube_id: '1PeeuhozAIo'
        }


    ],
        projectCardClicked: false,
        clickedPro: {}
    }
    
    handleProjectsShow = () => {
     
       return  this.state.projects.map((project) => {
             
            return <MediaCard handleCardClicked={this.handleCardClick} key={project.id} project={project}/>
        }
        )
    }

    
    
    handleCardClick = (project) => {
        
        this.setState({
            ...this.state,
            projectCardClicked: !this.state.projectCardClicked,
            clickedPro: project
        })
    }
    
    
    
    render() {
        
        return (
         <React.Fragment>
           <Container style={{margin: '0px 10px'}} className="projects">Projects</Container>
           {this.state.projectCardClicked ? <ProjectDetail project={this.state.clickedPro} handleBackClick={this.handleCardClick}/> : this.handleProjectsShow()}
        
         </React.Fragment>
        )
    }
}
