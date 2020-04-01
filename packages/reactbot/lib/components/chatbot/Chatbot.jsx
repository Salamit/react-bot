import React, { useState, useEffect, Component, createContext }from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';
import axios from 'axios/index';
import useSWR from 'swr'


// const Chatbot = ({currentUser}) => 
   
//     <div style={ { maxWidth: '500px', margin: '20px auto' } }>

//         <h2>Chatbot will be here</h2>


//     </div>
// function Profile () {
//     const { data, error } = useSWR('/api/user', fetcher)
   
//     if (error) return <div>failed to load</div>
//     if (!data) return <div>loading...</div>
//     return <div>hello {data.name}!</div>

//   }

export const MessageContext = createContext(null)

  //event queries
  async function df_event_query(event) {
    const { messages, setMessages } = React.useContext(MessageContext)
    const request = '/api/df_event_query'; //path to the api

    //using SWR to make the request
    const { res, error } = useSWR(request, () => axios.post(request, {event})
    .then(function (response){
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
        })
    )

    if (error) return <div>failed to load</div>
    if (!res) return <div>loading...</div>
    for (let msg of res.data.fulfillmentMessages) {
        //for each text in the returned data add them to the says object in 
        //our state
        let says = {
            speaks: 'bot',//the bot is the speaker
            msg: msg
        }
        setMessages([...messages, says])

    }
    
}

    //text queries
    async function df_text_query(text) {
        const { messages, setMessages } = React.useContext(MessageContext)

        let says = {
            speaks: 'me',
            msg: {
                text: {
                    text: text //what the user says
                }
            }
        }
        //adding the says to messages state
        setMessages([...messages, says])

        const request = '/api/df_text_query'; //path to the api

        //using SWR to make the request
        const { res, error } = useSWR(request, () => axios.post(request, {text})
        .then(function (response){
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
            })
        )
    
        if (error) return <div>failed to load</div>
        if (!res) return <div>loading...</div>
        for (let msg of res.data.fulfillmentMessages) {
            //for each text in the returned data add them to the says object in 
            //our state
            says = {
                speaks: 'bot',//the bot is the speaker
                msg: msg
            }
            setMessages([...messages, says])

        }

        

    }


const Chatbot = (props) => {
    const [messages, setMessages] = useState([]); 

    

    useEffect(() => {
        df_event_query('welcome');
    }, []);

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         messages: []
    //     }
    // }
    const store = {
        messages: [messages, setMessages]
    }



  

    //This component is a welcome component. It will be rendered after the person visits
    //the page. So after the componenet is mounted. So we use componentDidMount

    // componentDidMount() {
    //     this.df_event_query('welcome');
    // }

    function renderMessages(stateMessages) {
        if (stateMessages){
            return stateMessages.map((message, i ) => {
                return <Components.Message key={i} speaks={message.speaks} text={message.msg.text.text} />;
            });
        } else {
            return null;
        }
    }

  
        return (
            <MessageContext.Provider value={store}>
                <div style={{ height: 400, width: 400, float: 'right'}}>
                    <div id='chatbot' style={{ height: '100%', width: '100%', overflow: 'auto'}}>
                        <h2>Chatbot</h2>
                        {renderMessages(messages)}
                        <input type="text" />
                    </div>
                </div>
            </MessageContext.Provider>
        )
    
}
      


registerComponent({name: 'Chatbot', component: Chatbot, hocs: [withCurrentUser]});