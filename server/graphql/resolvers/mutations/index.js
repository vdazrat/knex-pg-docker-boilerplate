const resolver = {
	Mutation: {
		addPost: (root, { author_id, title, content }, context) => {
			const { Post } = context;
			const post = new Post({ author_id, title, content});
			return post.save().then(post => {
				return {
					id: post.get('id'),
					title: post.get('title')
				};
			});
		},
		addComment: (root, { author_id, post_id, body }, context) => {
			const { Comment } = context;
			const comment = new Comment({ author_id, body, post_id });
			return comment.save().then(comment => {
				return {
					id: comment.get('id'),
					body: comment.get('body'),
				};
			});
		}
	}
};

module.exports = resolver;