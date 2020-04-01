import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';



const EventQuery = ({currentUser}) => 
   
    <div style={ { maxWidth: '500px', margin: '20px auto' } }>

        <p>EventQuery</p>


    </div>
      ;


registerComponent({name: 'EventQuery', component: EventQuery, hocs: [withCurrentUser]});