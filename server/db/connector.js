require('dotenv').config({path: 'configs/.env'});

var config = require('./knexfile.js');  
var env = process.env.NODE_ENV;  
var knex = require('knex')(config[env]);

knex.raw('select 1+1 as result')
	.then(() => console.log('valid connection'))
	.catch(e => console.log(e));

module.exports = knex; 
