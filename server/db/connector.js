const config = require('./knexfile.js');  
const env = process.env.NODE_ENV;  
const knex = require('knex')(config[env]);

knex.raw('select 1+1 as result')
	.then(() => console.log('valid connection'))
	.catch(e => console.log(e));

module.exports = knex; 
