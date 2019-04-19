const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

// _id
const QuestionSchema = new Schema({
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	content: { type: String, required: true }
}, {
	// _id: false,
	// versionKey: false,
	timestamps: true // createdAt & updatedAt
});

const QuestionModel = model("question", QuestionSchema);

module.exports = QuestionModel;