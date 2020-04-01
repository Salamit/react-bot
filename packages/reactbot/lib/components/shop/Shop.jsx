import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';


const Shop = ({currentUser}) => 
   
    <div style={ { maxWidth: '500px', margin: '20px auto' } }>

        <h1>Shop</h1>
        <Components.ItemsList/> 


    </div>
      


registerComponent({name: 'Shop', component: Shop, hocs: [withCurrentUser]});