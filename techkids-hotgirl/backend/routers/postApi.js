const express = require('express');
const PostApiRouter = express.Router();

const PostModel = require('../models/post');

// Get list post
PostApiRouter.get('/', async (req, res) => {
	// PostModel.find({})
	// 	.populate('author', '-password')
	// 	.then(posts => {
	// 		res.json({ success: true, data: posts });
	// 	})
	// 	.catch(err => {
	// 		res.json({ success: false, err })
	// 	})

	try {
		const posts = await PostModel.find({}).populate('author', '-password');
		res.json({ success: true, data: posts });
	} catch (err) {
		res.json({ success: false, err });
	}
});

// Create post
PostApiRouter.post('/', (req, res) => {
	PostModel.create(req.body, (err, postCreated) => {
		if(err) res.json({ success: false, err })
		else res.json({ success: true, data: postCreated });
	});
});

// Update post
PostApiRouter.put('/:id', (req, res) => {
	const id = req.params.id;

	PostModel.findById(id, (err, postFound) => {
		if (err) res.json({ success: false, err })
		else if (!postFound) res.json({ success: false, err: 'Not found' })
		else {
			for(let key in req.body) {
				let value = req.body[key];
				if(value !== null) {
					postFound[key] = value;
				}
			}

			postFound.save((err, postUpdated) => {
				if (err) res.json({ success: false, err })
				else res.json({ success: true, data: postUpdated });
			});
		}
	});
});

// Delete post
PostApiRouter.delete('/:id', (req, res) => {
	const id = req.params.id;

	PostModel.findByIdAndDelete(id, (err) => {
		if (err) res.json({ success: false, err })
		else res.json({ success: true });
	});
});

module.exports = PostApiRouter;