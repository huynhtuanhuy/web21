const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function(req, res) {
	res.send(`
		<ul>
			<li>
				<a href="/web13">Web 13</a>
			</li>
			<li>
				<a href="/web14">Web 14</a>
			</li>
			<li>
				<a href="/web15">Web 15</a>
			</li>
			<li>
				<a href="/web16">Web 16</a>
			</li>
			<li>
				<a href="/web17">Web 18</a>
			</li>
		</ul>
	`);
});

app.get("/:name", function(req, res) {
	// const name = req.params.name;
	const { name } = req.params;
	const fileData = fs.readFileSync(
		`./data/${name}.json`,
		{ encoding: 'utf-8' }
	);
	const dataArr = JSON.parse(fileData);
	// let html = "<ul>";
	// for(let i = 0; i < dataArr.length; i++) {
	// 	let item = dataArr[i];
	// 	html = html + `<li>${item}</li>`;
	// }
	// html = html + "</ul>";
	const html = dataArr.map(function(item) {
		return `<li>${item}</li>`;
	});
	res.send(`<ul>${html.join("")}</ul>`);
});

app.listen(6969, function(err) {
	if(err) console.log(err)
	else console.log("Server start success");
});