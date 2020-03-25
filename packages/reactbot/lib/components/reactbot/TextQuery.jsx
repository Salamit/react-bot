import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';



const TextQuery = ({currentUser}) => { 
    
    return  JSON.stringify(<p>TextQuery</p>)  //JSON.stringify({'do' :'text_query'})

}
   
    // <div style={ { maxWidth: '500px', margin: '20px auto' } }>

    //     {/* {<p>}TextQuery</p> */}
        


    // </div>
      


registerComponent({name: 'TextQuery', component: TextQuery, hocs: [withCurrentUser]});