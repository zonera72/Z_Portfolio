import React, {Component} from 'react';
import { Tabs, Tab , Grid ,Cell ,  Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import myImage from '../images/react.png';
import { CallFunc } from './CallFunc';
import { CallFunc1 } from './CallFunc1';
import { CallFunc2 } from './CallFunc2';
import { CallFunc3 } from './CallFunc3';



class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
          return(
            <CallFunc/>
          )
        } else if(this.state.activeTab === 1) {
          return (
            <CallFunc1/>
          )
        } else if(this.state.activeTab === 2) {
          return (
            <CallFunc2/>
          )
        } else if(this.state.activeTab === 3) {
          return (
            <CallFunc3/>
          )
        }
      }


render() {
    return(
               <div >
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
               <Tab>React</Tab>
               <Tab>Angular</Tab>
               <Tab>VueJS</Tab>
               <Tab>MongoDB</Tab>
               </Tabs>

        
                <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>

                 </div>
    )
}
    }
    
    
export default Projects;