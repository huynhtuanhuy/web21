const express = require('express');
const bcrypt = require('bcrypt');
const Router = express();

const userModel = require('../models/user');

Router.get('/', (req, res) => {
	if(req.session.user) {
		res.json({ success: true, message: 'Success!', user: req.session.user });
	} else {
		res.json({ success: false, message: 'Fail!' });
	}
});

Router.post('/login', (req, res) => {
	const { username, password } = req.body;

	userModel.findOne({ username }, (err, user) => {
		if(err) console.log(err)
		else if (!user) res.json({ success: false, message: 'User not exist!' })
		else {
			if(bcrypt.compareSync(password, user.password)) {
				req.session.user = { username, id: user._id };
				res.json({ success: true, message: 'Login success!', user });
			} else res.json({ success: false, message: 'Wrong password!' });
		}
	});
});

module.exports = Router;