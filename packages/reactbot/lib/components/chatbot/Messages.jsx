//responsible for rendering text messages
import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';



const Message = (props) => 
   
    <div clasName="col s12 m8 offset-m2 offset-l3" style={{ maxWidth: '500px', margin: '20px auto' }}>

        <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
                {/* All the messages go here */}
                {props.speaks==='bot' && 
                        <div className="col 2">
                            <a className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                        </div>
                }
                <div className="col s10">
                    <span className="black-text">
                        {props.text}
                    </span>
                </div>
                {props.speaks==='me' && 
                        <div className="col 2">
                            <a className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                        </div>
                }
                

            </div>
        </div>


    </div>
      ;


registerComponent({name: 'Message', component: Message, hocs: [withCurrentUser]});