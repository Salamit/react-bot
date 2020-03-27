// Components
import './components.js';

// Routes
import './routes.js';
// import './dialogFlow.js';
//Meteor chatbot
import './chatbot-meteor/index.js'
//Apollo chatbot
import './chatbot-apollo/index.js'




// const dialogflow = require('dialogflow');
// const config = require('../config/keys');
// const { ApolloServer, gql } = require('apollo-server-express');
// import bodyParser from 'body-parser';

// import Express from 'express';

// const { URLSearchParams } = require('url');
// // const params = new URLSearchParams();
// const app = new Express();
// const restRoutes = Express.Router();
// // require('./routes/dialogFlowRoutes');

// const projectId = config.googleProjectID;
// const sessionId = config.dialogFlowSessionID;
// const languageCode = config.dialogFlowSessionLanguageCode;

// const credentials = {
//     client_email: config.googleClientEmail,
//     private_key:
//     config.googlePrivateKey,
// };

// const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
// const sessionPath = sessionClient.sessionPath(projectId, sessionId);
// // params.append('a', 1);





// const path = '/'

// const message = `
//   type Query {
//     message: String,
//   }
// `;
// const typeDefs = [
//     message
// ]


// const resolvers = {
//     Query: {
//         // message: () => 'Hello World!'
//         message: () => 'Hello World!'
        
//     }
    
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });



// app.use('/', restRoutes)
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.send({'hello': 'there'})
// })

// app.post('/api/df_text_query', async (req, res) => {
//     const request = {
//         session: sessionPath,
//         queryInput: {
//           text: {
//             // The query to send to the dialogflow agent
//             text: req.body.text,
//             // The language used by the client (en-US)
//             languageCode: languageCode,
//           },
//         },
//     };
//     const responses = await sessionClient.detectIntent(request);
//     console.log('Detected intent');
//     const result = responses[0].queryResult;
//     console.log(`  Query: ${result.queryText}`);
//     console.log(`  Response: ${result.fulfillmentText}`);
//     if (result.intent) {
//       console.log(`  Intent: ${result.intent.displayName}`);
//     } else {
//       console.log(`  No intent matched.`);
//     }

  

//     res.send(responses[0].queryResult);
// });

// app.post('/api/df_event_query', (req, res) => {
//     res.send({'do': 'event query'})
// });










// server.applyMiddleware({ app, path });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )






