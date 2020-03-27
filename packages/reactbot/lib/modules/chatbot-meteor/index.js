import './chatbot.js';
import './routes.js';


// import bodyParser from 'body-parser';
// import { WebApp } from 'meteor/webapp';
// // import './chatbot.js';



// import Express from 'express';
// const app = new Express();



// WebApp.connectHandlers.use(app);
// WebApp.connectHandlers.use(bodyParser.json());
// WebApp.connectHandlers.use( bodyParser.urlencoded({ extended: true }));
// WebApp.connectHandlers.use( async (req, res, next) => {

//     let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
//     res.setHeader('Content-Type', 'application/json')
//     if(req.url === '/'){
//         res.write(JSON.stringify({'hello': 'there'}))
//         res.end()

//     } else if (req.url === "/api/df_text_query" ){       
//         res.write(JSON.stringify(responses[0].queryResult))
//         res.end()

//     } else if (req.url === "/api/df_event_query" ){
//         res.write(JSON.stringify({'do': 'event query'}))
//         res.end()
//     }
   
    
// })
