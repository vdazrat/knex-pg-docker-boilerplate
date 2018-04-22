const type = `
	type Post {
		author: User,
		id: String,
		content: String,
		title: String,
		comments: [Comment]
	}
`;

module.exports = type;