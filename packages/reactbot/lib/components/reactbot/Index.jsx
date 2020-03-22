import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Index = ({currentUser}) => 
   
    <div style={ { maxWidth: '500px', margin: '20px auto' } }>

        <p>Test page</p>


    </div>
      ;


registerComponent({name: 'Index', component: Index, hocs: [withCurrentUser]});