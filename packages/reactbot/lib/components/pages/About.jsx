import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';


const About = ({currentUser}) => 
   
    <div style={ { maxWidth: '500px', margin: '20px auto' } }>

        <h1>About us</h1> 


    </div>
      


registerComponent({name: 'About', component: About, hocs: [withCurrentUser]});