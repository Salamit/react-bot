import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';


const Landing = ({currentUser}) => 
   
    <div style={ { maxWidth: '500px', margin: '20px auto' } }>

        <h1>Selling you great stuff</h1> with the help of a chatbot


    </div>
      


registerComponent({name: 'Landing', component: Landing, hocs: [withCurrentUser]});