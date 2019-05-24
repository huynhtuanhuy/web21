const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.connect('mongodb://localhost/tk-hotgirl-21', (err) => {
	if(err) console.log(err)
	else console.log("DB connect success!");
});

const app = express();

app.use(session({
	secret: 'uaidsuoaisdidsjaisakl',
	saveUninitialized: false,
	resave: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7
	}
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userApiRouter = require('./routers/userApi');
const postApiRouter = require('./routers/postApi');
const authApiRouter = require('./routers/authApi');

app.use('/api/auth', authApiRouter);

app.use((req, res, next) => {
	console.log(req.session);
	// console.log(req.sessionID);
	// req.session.user = "abc";
	// res.send("Hello middleware");
	next();
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/views/login.html');
});

app.use('/api/users', userApiRouter);
app.use('/api/posts', postApiRouter);

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start success");
});