const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const QuestionModel = require("./models/questionModel");

mongoose.connect(
	"mongodb://localhost/quyet-de-21",
	{ useNewUrlParser: true },
	function(err) {
		if(err) console.log(err)
		else console.log("DB connect ok!");

		// QuestionModel.find({}, function(err, docs) {
		// 	if(err) console.log(err)
		// 	else console.log("Questions: ", docs);
		// });
	}
);

// data-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
	// res.send(`
	// 	<h1>${question.content}</h1>
	// 	<div>
	// 		<a href="/vote/${question.id}/no">
	// 			<button>Sai / Không / Trái</button>
	// 		</a>
	// 		<a href="/vote/${question.id}/yes">
	// 			<button>Đúng / Có / Phải</button>
	// 		</a>
	// 	</div>
	// 	<div>
	// 		<button>Kết quả vote</button>
	// 		<button>Câu hỏi khác</button>
	// 	</div>
	// `);
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/randomquestion", (req, res) => {
	// get random question
	// const questionList = JSON.parse(
	// 	fs.readFileSync("./questions.json", { encoding: "utf-8" })
	// );
	// // 0 <= randomIndex < questionList.length
	// const randomIndex = Math.floor(Math.random()*questionList.length);
	// const question = questionList[randomIndex];
	// res.send(question);
	// QuestionModel.find({}, (err, docs) => {
	// 	if(err) console.log(err)
	// 	else {
	// 		const randomIndex = Math.floor(Math.random()*docs.length);
	// 		const question = docs[randomIndex];
	// 		res.json(question);
	// 	}
	// });
	QuestionModel.count({}, (err, totalDoc) => {
		if(err) console.log(err)
		else {
			const randomIndex = Math.floor(Math.random()*totalDoc);
			QuestionModel
				.findOne({})
				.skip(randomIndex)
				.exec((err, question) => {
					if(err) console.log(err)
					else res.json(question);
				});
		}
	});
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

app.get("/question/:id", (req, res) => {
	res.sendFile(__dirname + "/views/question.html");
});

app.get("/getinfo/:id", (req, res) => {
	// TODO: Lấy thông tin của câu hỏi rồi trả về.
});

app.post("/addquestion", function(req, res) {
	const { question } = req.body;
	QuestionModel.create({
		content: question,
	}, function(err, docCreated) {
		if(err) console.log(err)
		else res.redirect("/");
	});
});

app.listen(6969, function(err) {
	if(err) console.log(err)
	else console.log("Server start success!");
});