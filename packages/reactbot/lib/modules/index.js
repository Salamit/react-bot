import './http-requests.js';


// Components
import './components.js';

// Routes
import './routes.js';
import './dialogFlow.js';


// var express = require('express');
// const bodyParser = require('body-parser');
// import { graphqlExpress } from 'apollo-server-express';

// // var express_grapqhl = require('express-graphql');
// // var {buildSchema} = require('graphql');

// const typeDefs = gql`
//     type Query {
//         message: String!
//     }

// `
// const { typeDefs, resolvers } = require('./schema');
// https://spectrum.chat/apollo/apollo-server/using-express-alongside-apollo-server~0da4a3f3-e441-46b8-987e-de3374fb3e66


const dialogflow = require('dialogflow');
const config = require('../config/keys');
const { ApolloServer, gql } = require('apollo-server-express');


import Express from 'express';
const { URLSearchParams } = require('url');
const params = new URLSearchParams();
const app = new Express();

const restRoutes = Express.Router();




const path = '/'

const message = `
  type Query {
    message: String,
  }
`;
const typeDefs = [
    message
]


const resolvers = {
    Query: {
        // message: () => 'Hello World!'
        message: () => 'Hello World!'
        
    }
    
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use('/', restRoutes)
params.append('a', 1);


app.get('/', (req, res) => {
    res.send({'hello': 'there'})
})

const sessionClient = new dialogflow.SessionsClient()

const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);

app.post('/api/df_text_query', async function  (req, res) {
        // console.log(req)
        const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: params, //req.body.text,
            // The language used by the client (en-US)
            languageCode: config.dialogFlowSessionLanguageCode,
          },
        },
      };


    let responses = await sessionClient
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

        })
        .catch(err => {
            console.log('ERROR', err)
        });

   


    return res.send(responses[0].queryResult);
})

app.get('/api/df_event_query', function (req, res) {
    return res.send({
        'do': 'event query'
    })
})

server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)



// console.log(app)


// app.use();
// app.get('/express', (req, res) => {
//     res.send({'hello': 'Johnny'})
// });

// function Profile (){
//     const {data, error } = useSWR('https://baconipsum.com/api/?type=meat-and-filler', fetch)

//     console.log(data);
// }

// Profile()




