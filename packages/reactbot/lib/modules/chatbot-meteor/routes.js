import bodyParser from 'body-parser';
import { WebApp } from 'meteor/webapp';
import  chatbot  from './chatbot.js';
// const chatbot = require('./chatbot');

//Hold's webApp routes.

import Express from 'express';
const app = new Express();



WebApp.connectHandlers.use(app);
WebApp.connectHandlers.use(bodyParser.json());
WebApp.connectHandlers.use( bodyParser.urlencoded({ extended: true }));
WebApp.connectHandlers.use( async (req, res, next) => {

    
    res.setHeader('Content-Type', 'application/json')
    // if(req.url === '/'){
    //     res.write(JSON.stringify({'hello': 'there'}))
    //     res.end()

    // } else 
    if (req.url === "/api/df_text_query" ){  
        console.log('here')  
        let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
        console.log('responses')   
        await res.write(JSON.stringify(responses[0].queryResult))
        res.end()

    } else if (req.url === "/api/df_event_query" ){
        let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
        res.write(JSON.stringify(responses[0].queryResult))
        res.end()
    }
   
    
})
