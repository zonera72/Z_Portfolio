import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component{
render(){
    return(
        <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
        <h1>Zonera Aleen</h1>
        <img
              src="https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Zonera Aleem. BE in Computer System Engineering form Mehran UET. Adress:Main street # 100 Hyderabad</p>
        </Cell>
        



        <Cell col={6}>
        <h2>Contact Me</h2>
        <hr/>
        <div className="contact-list">

        <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    someone@example.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
        
        
        </Cell>
        </Grid>
            </div>

    )
}
}
export default Contact;