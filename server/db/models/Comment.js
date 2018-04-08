require('dotenv').config({path: 'configs/.env'});

const bookshelf = require('../bookshelf');
const User = require('./User');
const Post = require('./Post');

class Comment extends bookshelf.Model {
	get tableName() {
		return 'comments';
	}

	user() {
		return this.belongsTo(User, 'author_id');
	}

	post() {
		return this.belongsTo(Post);
	}
}

module.exports = Comment;