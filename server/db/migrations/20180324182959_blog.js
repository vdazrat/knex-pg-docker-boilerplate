
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('users', function(table) {
  		table.increments('uid').primary();
  		table.string('username');
  		table.string('password');
  		table.string('name');
  		table.string('email');
  		table.timestamps();
  	}),

  	knex.schema.createTable('posts', function(table) {
  		table.increments('id').primary();
  		table.string('content');
  		table.string('title');
  		table.integer('author_id')
  			.references('uid')
  			.inTable('users');
  		table.dateTime('postDate');
  	}),

  	knex.schema.createTable('comments', function(table) {
  		table.increments('id').primary();
  		table.string('body');
  		table.dateTime('postDate');
  		table.integer('author_id')
  			.references('uid')
  			.inTable('users');
  		table.integer('post_id')
  			.references('id')
  			.inTable('posts');
  	}),

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('comments'),
  	knex.schema.dropTable('posts'),
  	knex.schema.dropTable('users'),
  ]);
};
