import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';



const Index = ({currentUser}) => 
   
    <div style={ { maxWidth: '500px', margin: '20px auto' } }>

        <p>Test page</p>


    </div>
      ;


registerComponent({name: 'Index', component: Index, hocs: [withCurrentUser]});