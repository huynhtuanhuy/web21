const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'user' },
	post: String,
	view: {
		type: Number,
		default: 0
	},
	title: {
		type: String,
		required: true
	},
	like: {
		type: Number,
		default: 0
	},
	image: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('post', PostSchema);