import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
render(){
    return(
        <div>
        <Grid>
            <Cell col={4}>
             <div style={{textAlign: 'center'}}>
              <img
                src="https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>
            <h2 style={{paddingTop: '2em'}}>Zonera Shaikh</h2>
            <h4 style={{color:"Grey"}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> It is easy to believe that programming as a profession is one which is both in rude health, and for which the future is incredibly bright. Increased automation, the mind bending world of machine learning, and the ever more intuitive ways in which software impacts our lives all suggest that programming is the career to be in, and one of the few careers which one can safely guarantee will still be around in 50 years irrespective of automation or many of the other issues that threaten the future workforce.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            </Cell>

            <Cell className="resume-right-col" col={8}>
             <h2>Education</h2>
             <Education
            startYear={2003}
            endYear={2016}
            schoolName="Hayat Girls Higher Secondary School"
            schoolDescription="Hayat is an institution designed to provide learning spaces and learning environments for the teaching of students (or pupils) under the direction of teachers"
             />
             <Education
               startYear={2016}
               endYear={2020}
               schoolName="Mehran UET, Jamshoro, Pakistan"
               schoolDescription=" Mehran University or MUET) is a public research university located in Jamshoro, Sindh, Pakistan focused on STEM education.[1]

               Established in July 1976, as a campus of the University of Sindh, and a year later was chartered as an independent university.[2] It was ranked 6th in engineering category of Higher Education Institutions in the (5th Ranking of Pakistani Higher Education Institutions) in 2016.[3][4]"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Internship"
              jobDescription="Internship at CIC hub, Auto Bahn, Latifabad. Enrolled as a Mern-Stack Internee"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={30}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />

             </Cell>
           
            </Grid>

            </div>

    )
}
}
export default Resume;