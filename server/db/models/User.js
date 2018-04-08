require('dotenv').config({path: 'configs/.env'});

const bookshelf = require('../bookshelf');
const Post = require('./Post');
const Comment = require('./Comment');

/*
const User = bookshelf.Model.extend({
	tableName: 'users',
	hasTimeStamps: true,

	verifyPassword: function(password) {
		return this.get('password') === password;
	},

});

*/

class User extends bookshelf.Model {
	get tableName() {
		return 'users';
	}
	get hasTimeStamps() {
		return true;
	}
	get idAttribute() {
		return 'uid';
	}

	posts() {
		return this.hasMany(Post, 'author_id');
	}

	comments() {
		return this.hasMany(Comment, 'author_id');
	}

	verifyPassword(pass) {
		return this.get('password') === pass;
	}

	createPost(title, content) {
		const uid = this.get('uid');
		const post = new Post({
			title,
			content,
			author_id: uid,
		});
		return post.save()
			.then(post => console.log('created post'))
			.catch(e => {throw e;});
	}

}


/*
example:
user = new User({name: 'venu', username:'venu', email:'v@d.com',password:'1234'})

user.save().then((a) => console.log('done', a) ).catch(e => console.log(e));

User.forge({name: 'venu'}).fetch().then(...);

comments = user.comments();
comments.model.forge().fetchAll()... // fetch all comments
*/
module.exports = User;