import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default class About extends Component {
    render() {
        return (
            <React.Fragment><List>
            <ListItem alignItems="center" style={{top: 250}}>
                <ListItemAvatar>
                    <Avatar alt="redux" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="ruby" src="https://cdn.iconscout.com/icon/free/png-256/ruby-45-1175100.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="rails" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="postgreSQL" src="https://cdn.iconscout.com/icon/free/png-512/postgresql-11-1175122.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="SQL" src="https://image.flaticon.com/icons/svg/2306/2306022.svg" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="javascript" src="https://cdn.worldvectorlogo.com/logos/javascript.svg" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="html" src="https://cdn.iconscout.com/icon/free/png-256/html-272-848746.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="css" src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="jwt" src="https://cdn.auth0.com/blog/jwtc/jwt_05.jpg" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="restful api" src="https://lh3.googleusercontent.com/proxy/fwYNxSiHwPC2KnqAzQz_h82VMVeva_w3e8uBsN3Baghh57-38HV0qTPZ7kPLC26eAssYEYIGHrfTWq7qY1ouN1TmKEUuBXPqxfIBss2qCKsGA5-w6ap07Q" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="git" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar alt="oop" src="https://zir0-93.github.io/images/badges_csharp_objects_stage01.png" />
                </ListItemAvatar>
            </ListItem>
        </List>
        <Container  className="about">Focused and detail oriented full-stack web developer, who is multi-human-lingual and also multi-programming-lingual, passionate about problem solving. Strategic and goal oriented engineer who thrives in high growth environments. Committed and collaborative team player skilled at empowering teams and helping businesses be innovative.</Container>
        </React.Fragment>
            
        )
    }
}
