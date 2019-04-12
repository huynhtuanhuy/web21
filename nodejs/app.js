// console.log("Hello world");

const fs = require('fs');

const obj = {
	name: "Huynh Tuan Huy",
	age: 18
}

const jsonObj = JSON.stringify(obj);

console.log(jsonObj + "");

// console.log("Begin");
// fs.writeFile(
// 	"test.txt",
// 	jsonObj,
// 	function(error) {
// 		if(error) console.log(error)
// 		else console.log("Write file done!");
// 	}
// );
// console.log("End");

// console.log("Begin");
// fs.readFile(
// 	"test.txt",
// 	{ encoding: 'utf-8' },
// 	function(error, data) {
// 		if(error) console.log(error)
// 		else console.log(data);
// 		console.log("End");
// 	});

console.log("Begin");
const data = fs.readFileSync("test.txt", { encoding: 'utf-8' });
try {
	console.log(JSON.parse(data).name);
} catch (error) {
	console.log(error);
}
console.log("End");