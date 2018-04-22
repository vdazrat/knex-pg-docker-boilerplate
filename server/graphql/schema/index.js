// export shchemas
const User = require('./user');
const Comment = require('./comment');
const Post = require('./post');

const Schema = `
	schema {
		query: RootQuery
		mutation: Mutation
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

const MutationType = `
	type Mutation {
		addPost(author_id: ID!, title: String!, content: String!): Post
		addComment(author_id: ID!, post_id: ID!, body: String!): Comment
	}
`;

module.exports = [Schema, RootQuery, MutationType, User, Comment, Post];