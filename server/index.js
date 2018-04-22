require('dotenv').config({path: 'configs/.env'});

const express = require('express');
var db  = require('./db/connector');

const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const getContext = require('./graphql/context');
const queryResolvers = require('./graphql/resolvers/query');
const querySchema = require('./graphql/schema');

const User = require('./db/models/User');

const context = getContext();
const schema = makeExecutableSchema({ typeDefs: querySchema, resolvers: queryResolvers });
const app = express();
const port = 4000;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port);
console.log('Started server in mode: ',process.env.NODE_ENV,'. Listening on port', port);