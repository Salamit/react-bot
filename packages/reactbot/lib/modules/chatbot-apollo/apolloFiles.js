const { ApolloServer, gql } = require('apollo-server-express');

const chatbot = require('./chatbot');
import bodyParser from 'body-parser';
import Express from 'express';
const app = new Express();
const restRoutes = Express.Router();

//TODO - refactor and split up schema from routes


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


const path = '/'
app.use('/', restRoutes)
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({'hello': 'there'})
})

app.post('/api/df_text_query', async (req, res) => {
    let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
    res.send(responses[0].queryResult);
});

app.post('/api/df_event_query', async (req, res) => {
  let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
  res.send(responses[0].queryResult);
});



server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
