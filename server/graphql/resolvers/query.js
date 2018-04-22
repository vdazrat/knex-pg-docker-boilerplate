const curryParams = (func, root, extraParams) => {
	return function(...args){
		const [params, context, info] = args;
		return func.call(null,root,{ ...params, ...extraParams }, context, info);
	};
};

const resolver = {
	RootQuery: {
		users: (root, params, context, info) => {
			const getUser = user => ({
				username: user.get('username'),
				email: user.get('email'),
				name: user.get('name'),
				uid: user.get('uid'),
				posts: curryParams(resolver.RootQuery.posts, root, { author_id: user.get('uid') }), // called without root
			});
			// context has all the models
			const { User } = context;
			if (params.uid) {
				return [User.forge().fetch({ uid: params.uid })
					.then(getUser)];
			}
			return User.forge().fetchAll()
				.then(res => {
					return res.models.map(getUser);
				})
		},
		user: (root, params, context, info) => {
			const getUser = user => ({
				username: user.get('username'),
				email: user.get('email'),
				name: user.get('name'),
				uid: user.get('uid'),
				posts: curryParams(resolver.RootQuery.posts, root, { author_id: user.get('uid') }), // called without root
			});
			const { User } = context;
			if (params.uid) {
				return User.forge().fetch({ uid: params.uid })
					.then(getUser);
			}
			return null;
		},
		posts: (root, params, context) => {
			const { Post } = context;
			return Post.where(params).fetchAll()
				.then(res => {
					return res.models.map(post => ({
						id: post.get('id'),
						content: post.get('content'),
						title: post.get('title'),
						author: curryParams(resolver.RootQuery.user, root, { uid: post.get('author_id') }),
						comments: curryParams(resolver.RootQuery.comments, root, { post_id: post.get('id') })
					}));
				});
		},
		comments: (root, params, context) => {
			const { Comment } = context;
			return Comment.where({ post_id: params.post_id }).fetchAll()
				.then(res => {
					return res.models.map(comment => ({
						id: comment.get('id'),
						body: comment.get('body'),
						user: curryParams(resolver.RootQuery.user, root, { uid: comment.get('author_id') }),
					}));
				});
		},
	},

};

module.exports = resolver;