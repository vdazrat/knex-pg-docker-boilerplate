require('dotenv').config({path: 'configs/.env'});
const config      = require('../knexfile.js');  
const env         = process.env.NODE_ENV;
const mode		  = process.env.MODE;
const knex        = require('knex')(config[env]);

if (mode === 'latest') {
	knex.migrate.latest([config])
		.then(() => {
			console.log('migrated latest version.');
			process.exit();
		}).catch((err) => {
			console.log('Migrations failed');
			console.log(err);
			process.exit();
		});
}
if (mode === 'rollback') {
	knex.migrate.rollback()
		.then(() => {
			console.log('rolled back latest version.');
			process.exit();
		}).catch((err) => {
			console.log('rollback failed');
			console.log(err);
			process.exit();
		});
}