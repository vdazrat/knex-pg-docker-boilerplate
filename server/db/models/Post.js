require('dotenv').config({path: 'configs/.env'});

const bookshelf = require('../bookshelf');
const User = require('./User');
const Comment = require('./Comment');

class Post extends bookshelf.Model {
	get tableName() {
		return 'posts';
	}

	author() {
		return this.belongsTo(User, 'author_id');
	}

	comments() {
		return this.hasMany(Comment);
	}

	createComment(body, user) {
		const comment = new Comment({
			body,
			author_id: user.get(user.idAttribute),
			postDate: new Date(),
		});
		return comment.save();
	}
}

module.exports = Post;