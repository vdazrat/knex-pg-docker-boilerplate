var knex  = require('./connector');
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;