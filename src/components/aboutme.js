import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class AboutMe extends Component{
render(){
    return(
        <div className="aboutme-color" style={{ width:"100%", margin:"auto",textAlign: 'center'}}>
           <Grid>
           <Cell col={12}>
           <h1 style={{paddingTop: '1em' }}> Welcome To My Site!</h1>
</Cell>

           <Cell col={2}>
           <h3 >...My Favourite Quote...</h3>
           <h6 style={{color:"FireBrick"}}>
            “The true ENTREPRENEUR is a risk taker, not an excuse maker.” 
             ―VDEXTERS</h6></Cell>  
           <Cell col={8}>
           <img
                src="https://www.multidots.com/wp-content/uploads/2018/01/Full_stack_developer-1-1.jpg"
                alt="avatar"
                class="center"
                style={{height: '340px'}}
                 />
            </Cell>  
           <Cell col={2}><h3>
               =Fast </h3>
               <h8>Fast load times and lag free interaction, my highest priority.</h8>
               <h3>=Responsive</h3>
               <h8>My layouts will work on any device, big or small.</h8>
               
               </Cell>
          
           <Cell col={12}>
           <p style={{paddingTop: '1em' }}>Thankyou for visiting My site...</p>

           </Cell>
             
           </Grid>
            </div>

    )
}
}
export default AboutMe;