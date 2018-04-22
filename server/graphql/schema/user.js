const type = `
	type User {
		username: String,
		email: String,
		name: String,
		uid: String
		posts: [Post],
		comments: [Comment]
	}
`;

module.exports = type;