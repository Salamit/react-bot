import '../modules/index.js';
// const dialogflow = require('dialogflow');
// const config = require('../config/keys');
// const { URLSearchParams } = require('url');
// const params = new URLSearchParams();
// const sessionClient = new dialogflow.SessionsClient()

// const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);


// // async function runSample() {
//     // A unique identifier for the given session
//     // const sessionId = uuid.v4();
//     params.append('a', 1);
//     // Create a new session
//     // const sessionClient = new dialogflow.SessionsClient();
//     // const sessionPath = sessionClient.sessionPath(projectId, sessionId);
   
//     // The text query request.
//     const request = {
//       session: sessionPath,
//       queryInput: {
//         text: {
//           // The query to send to the dialogflow agent
//           text: params,
//           // The language used by the client (en-US)
//           languageCode: config.dialogFlowSessionLanguageCode,
//         },
//       },
//     };
   
//     // Send request and log result
//     sessionClient.detectIntent(request)
//     .then(response => {
//         console.log('Detected intent');
//         const result = responses[0].queryResult;
//         console.log(`  Query: ${result.queryText}`);
//         console.log(`  Response: ${result.fulfillmentText}`);
//         if (result.intent) {
//         console.log(`  Intent: ${result.intent.displayName}`);
//         } else {
//         console.log(`  No intent matched.`);
//         }
//     }).catch(err => {
//         console.log('ERROR', err)
//     });
    
    
//   }


// const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         // The query to send to the dialogflow agent
//         text: params, //req.body.text,
//         // The language used by the client (en-US)
//         languageCode: config.dialogFlowSessionLanguageCode,
//       },
//     },
//   };


// let responses = await sessionClient
//     .detectIntent(request)
//     .then(responses => {
//         console.log('Detected intent');
//         const result = responses[0].queryResult;
//         console.log(`  Query: ${result.queryText}`);
//         console.log(`  Response: ${result.fulfillmentText}`);
//         if (result.intent) {
//           console.log(`  Intent: ${result.intent.displayName}`);
//         } else {
//           console.log(`  No intent matched.`);
//         }

//     })
//     .catch(err => {
//         console.log('ERROR', err)
//     });

