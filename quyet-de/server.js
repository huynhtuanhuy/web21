const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

// data-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
	// get random question
	const questionList = JSON.parse(
		fs.readFileSync("./questions.json", { encoding: "utf-8" })
	);
	// 0 <= randomIndex < questionList.length
	const randomIndex = Math.floor(Math.random()*questionList.length);
	const question = questionList[randomIndex];
	res.send(`
		<h1>${question.content}</h1>
		<div>
			<a href="/vote/${question.id}/no">
				<button>Sai / Không / Trái</button>
			</a>
			<a href="/vote/${question.id}/yes">
				<button>Đúng / Có / Phải</button>
			</a>
		</div>
		<div>
			<button>Kết quả vote</button>
			<button>Câu hỏi khác</button>
		</div>
	`);
});

// /vote/1/yes
app.get("/vote/:questionId/:vote", (req, res) => {
	// const questionId = req.params.questionId;
	// const vote = req.params.vote;
	const { questionId, vote } = req.params;

	const questionList = JSON.parse(
		fs.readFileSync("./questions.json", { encoding: "utf-8" })
	);
	
	// for(let i = 0; i < questionList.length; i++) {
	// 	if (questionList[i].id == questionId) {
	// 		if(vote == "yes") {
	// 			questionList[i].yes++;
	// 		} else questionList[i].no++;
	// 	}
	// }
	
	questionList[questionId][vote]++;

	fs.writeFileSync("./questions.json", JSON.stringify(questionList));

	res.redirect("/");
	// res.redirect("https://google.com.vn");
});

app.get("/ask", function(req, res) {
	res.sendFile(__dirname + "/views/ask.html");
});

app.post("/addquestion", function(req, res) {
	// req.on("data", function(data) {
	// 	console.log((data+"").split("="));
	// });
	// const question = req.body.question;
	const questionList = JSON.parse(
		fs.readFileSync("./questions.json", { encoding: "utf-8" })
	);
	const { question } = req.body;
	const newQuestion = {
		content: question,
		yes: 0,
		no: 0,
		id: questionList.length,
	}
	questionList.push(newQuestion);
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	res.send("Success");
});

app.listen(6969, function(err) {
	if(err) console.log(err)
	else console.log("Server start success!");
});