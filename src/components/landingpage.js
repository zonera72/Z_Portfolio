import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component{
render(){
    return(
        <div style={{ width:"100%", margin:"auto"}}>
        <Grid className='landing-grid'>
        <Cell col={12}>
        <img src="https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg" 
        alt="Avatar" 
        className="avatar-img" />
        <div className="banner-text">
        <h1> Full Stack Web Developer </h1>
        <hr/>
            <p>HTML/CSS | BootStarp | JavaScript | React | React-Native | NodeJS | Express | MonogoDB</p>
            <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
         

          {/* Github */}
          <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            </a>
       

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>
          

          {/* Youtube */}
          <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>
          

        </div>
            </div>
        </Cell>
        </Grid>

            <h1>Landing-Page</h1>
            </div>

    )
}
}
export default Landing;