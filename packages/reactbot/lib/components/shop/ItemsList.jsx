import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';


const ItemsList = ({currentUser}) => 
   
    <div>
        Here goes a list of items

       


    </div>
      


registerComponent({name: 'ItemsList', component: ItemsList, hocs: [withCurrentUser]});