const dialogflow = require('dialogflow');
const config = require('../config/keys');
const fetch = require('node-fetch');
import bodyParser from 'body-parser';
import { WebApp } from 'meteor/webapp';



const { URLSearchParams } = require('url');

import Express from 'express';
const app = new Express();

// const params = new URLSearchParams();

const sessionClient = new dialogflow.SessionsClient()

const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);
WebApp.connectHandlers.use(app);
WebApp.connectHandlers.use(bodyParser.json());
WebApp.connectHandlers.use( bodyParser.urlencoded({ extended: true }));
WebApp.connectHandlers.use( async (req, res, next) => {
    // res.writeHead(200);
    // res.send({'hello': 'there'})
    // console.log(res)
    res.setHeader('Content-Type', 'application/json')
    if(req.url === '/'){
        res.write(JSON.stringify({'test': 'there'}))
        res.end()

    } else if (req.url === "/api/df_text_query" ){
        // res.end(JSON.stringify(req.body, null, 2))
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: config.dialogFlowSessionLanguageCode,
              },
            },
        };

        sessionClient
        .detectIntent(request)
        .then(responses => {
            console.log('Detected intent');
            const result = responses[0].queryResult;
            console.log(`  Query: ${result.queryText}`);
            console.log(`  Response: ${result.fulfillmentText}`);
            if (result.intent) {
              console.log(`  Intent: ${result.intent.displayName}`);
            } else {
              console.log(`  No intent matched.`);
            }
        }).catch(err => {
            console.log('ERROR:', err);
        })

        res.write(JSON.stringify({'do': 'text query'}))
        res.end()
    } else if (req.url === "/api/df_event_query" ){
        res.write(JSON.stringify({'do': 'event query'}))
        res.end()
    }
    // res.end();
    
})
// WebApp.connectHandlers.use("/api/df_text_query", bodyParser.json());
// WebApp.connectHandlers.use("/api/df_text_query", bodyParser.urlencoded({ extended: true }));

// WebApp.connectHandlers.use('/api/df_text_query', (req, res, next) => {
//     // res.writeHead(200);
//     // res.send({'hello': 'there'})
//     // console.log(res)
//     // res.write(JSON.stringify({'do': 'text query'}))
//     // res.end(JSON.stringify({'do': 'text query'}));
//     // res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//     // res.writeHead(200);
// })

// WebApp.connectHandlers.use('/api/df_event_query', (req, res, next) => {
    
//     // res.send({'hello': 'there'})
//     // console.log(res)
//     res.write(JSON.stringify({'do': 'event query'}))
//     // res.writeHead(200);
//     res.end();
// })
// WebApp.connectHandlers.use("/", (req, res, next) => {
//     // res.end({'hello': 'Johnny'})
//     ('/api/df_text_query', async function  (req, res) {
//         console.log(req)
//         const request = {
//         session: sessionPath,
//         queryInput: {
//           text: {
//             // The query to send to the dialogflow agent
//             text: params, //req.body.text,
//             // The language used by the client (en-US)
//             languageCode: config.dialogFlowSessionLanguageCode,
//           },
//         },
//       };


//     let responses = await sessionClient
//         .detectIntent(request)
//         .then(responses => {
//             console.log('Detected intent');
//             const result = responses[0].queryResult;
//             console.log(`  Query: ${result.queryText}`);
//             console.log(`  Response: ${result.fulfillmentText}`);
//             if (result.intent) {
//               console.log(`  Intent: ${result.intent.displayName}`);
//             } else {
//               console.log(`  No intent matched.`);
//             }

//         })
//         .catch(err => {
//             console.log('ERROR', err)
//         });
        
//     res.end(`Hello world from: ${Meteor.release}`);
// });

// WebApp.connectHandlers.use('/api/df_text_query', async (req, res, next) => {
//     console.log(req)

//     const request = {
//         session: sessionPath,
//         queryInput: {
//           text: {
//             // The query to send to the dialogflow agent
//             text: req.body.text,
//             // The language used by the client (en-US)
//             languageCode: config.dialogFlowSessionLanguageCode,
//           },
//         },
//       };


//     let responses = await sessionClient
//         .detectIntent(request)
        // .then(responses => {
        //     console.log('Detected intent');
        //     const result = responses[0].queryResult;
        //     console.log(`  Query: ${result.queryText}`);
        //     console.log(`  Response: ${result.fulfillmentText}`);
        //     if (result.intent) {
        //       console.log(`  Intent: ${result.intent.displayName}`);
        //     } else {
        //       console.log(`  No intent matched.`);
        //     }

        // })
        // .catch(err => {
        //     console.log('ERROR', err)
        // });

//     res.send(responses[0].queryResult)
//   });

// fetch('https://baconipsum.com/api/?type=meat-and-filler')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
// params.append('a', 1);





  //How to send a response from a route
  



// fetch('http://localhost:3000/api/df_text_query', {
//         method: 'post',
//         body:    JSON.stringify(request),
//         // headers: { 'Content-Type': 'application/json' },
    
//     })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   }).catch(e => console.log(e))

//   const body = { a: 1 };


 
// fetch('https://httpbin.org/post', {
//         method: 'post',
//         body:    JSON.stringify(body),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     .then(res => res.json())
//     .then(json => console.log(json));
  


