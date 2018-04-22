const User = require('../db/models/User');
const Comment = require('../db/models/Comment');
const Post = require('../db/models/Post');

const getContext = () => {
	return {
		User,
		Comment,
		Post,
	};
};
module.exports = getContext;