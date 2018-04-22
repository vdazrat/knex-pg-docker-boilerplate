// export shchemas
const User = require('./user');
const Comment = require('./comment');
const Post = require('./post');

const Schema = `
	schema {
		query: RootQuery
	}
`;
const RootQuery = `
	type RootQuery {
		users(uid: ID): [User],
		comments: [Comment],
		posts: [Post],
		user: User
	}
`;

module.exports = [Schema, RootQuery, User, Comment, Post];