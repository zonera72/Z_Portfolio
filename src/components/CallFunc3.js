import React from 'react';
import { Tabs, Tab , Grid ,Cell ,  Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import myImage from '../images/mongo.png';

export const CallFunc3=(props)=>{
    return(

        <div className="projects-grid">
        {props.CallFunc3}
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'Black', height: '176px', background: "url("+myImage+") center / cover"}} >MONGODB #1</CardTitle>
                <CardText>
                Demo Project
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'Black', height: '176px', background: "url("+myImage+") center / cover"}} >MONGODB #2</CardTitle>
                <CardText>
                Demo Project
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'Black', height: '176px', background:"url("+myImage+") center / cover"}} >MONGODB #3</CardTitle>
                <CardText>
                Demo Project
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
    );

};