const express = require('express');
const app = express();

// http://localhost:6969/main.css
app.use("/static", express.static('html&css'));

app.get('/', function(req, res) {
	console.log(__dirname)
	// res.send("<h1>Hello world!</h1>");
	res.sendFile(__dirname + "/html&css/index.html");
});

app.get('/about', function(req, res) {
	res.send("Hello world!");
});

// app.get('/main.css', function(req, res) {
// 	res.sendFile(__dirname + "/html&css/main.css");
// });

// http://localhost:6969/number/3
// params
// http://localhost:6969/number/asdasd
app.get('/number/:number', function(req, res) {
	const number = req.params.number;
	res.send(number);
});

// web12.json => http://localhost:6969/web12
// http://localhost:6969/number?number=3&age=19
// query
// ?number=3&age=19 => { number: 3, age: 19 }
app.get('/number', function(req, res) {
	const number = req.query.number;
	res.send(number);
});

// Middleware
// app.use(function(req, res) {
// 	res.send("404 Not found!!!");
// });

app.listen(6969, function(error) {
	if(error) console.log(error)
	else console.log("Server start success!");
});