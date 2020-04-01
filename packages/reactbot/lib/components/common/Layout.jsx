import React from 'react';
import {replaceComponent, registerComponent, Components} from 'meteor/vulcan:core';
import { BrowserRouter, Route } from 'react-router-dom';
// import Helmet from 'react-helmet';
// import 'materialize-css/dist/css/materialize.min.css';


const Layout = ({children}) => {

    return (
        <div className="container">
               {/* <Helmet>
   
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    
                    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Helmet> */}

            <Components.Header/>
            
            <div className="main">
                
                {children}

            </div>

            <Components.Chatbot/>

        </div>
      

    )
}
   



replaceComponent('Layout', Layout);