'use strict'

const dialogflow = require('dialogflow');
import structjson from '../../imports/structjson.js'; 
const config = require('../../config/keys.js');



const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    client_email: config.googleClientEmail,
    private_key:
    config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

module.exports = {
    textQuery: async function(text, parameters = {}) {
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                // The query to send to the dialogflow agent
                text: text,
                // The language used by the client (en-US)
                languageCode: languageCode,
              },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        let responses = await sessionClient.detectIntent(request);
        console.log('Detected intent');
        const result = responses[0].queryResult;
        console.log(`  Query: ${result.queryText}`);
        console.log(`  Response: ${result.fulfillmentText}`);
        if (result.intent) {
          console.log(`  Intent: ${result.intent.displayName}`);
        } else {
          console.log(`  No intent matched.`);
        }
    
        responses = await self.handleAction(responses);
    
        return responses;

    },
    eventQuery: async function(event, parameters = {}) {
      let self = module.exports;
      const request = {
          session: sessionPath,
          queryInput: {
            event: {
              // The query to send to the dialogflow agent
              name: event,
              parameters: structjson.jsonToStructProto(parameters),
              // The language used by the client (en-US)
              languageCode: languageCode,
            },
          },
 
      };
      let responses = await sessionClient.detectIntent(request);
      console.log('Detected intent');
      const result = responses[0].queryResult;
      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
      } else {
        console.log(`  No intent matched.`);
      }
  
      responses = await self.handleAction(responses);
  
      return responses;

  },
    
    handleAction: function(responses){
        return responses
    }

    
}