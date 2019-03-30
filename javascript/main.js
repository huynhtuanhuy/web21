// console.log("Hello world");

// const constVar = "Hi";
// // constVar = 5;

// let a = 5;

// a = true;

// console.log(a);

// var b = null;

// // console.log(typeof c);
// console.log(typeof b);

// b = true;

// console.log(typeof b);

// b = 100;

// console.log(typeof b);

// const obj = {
// 	name: "Huỳnh Tuấn Huy",
// 	age: 18,
// 	obj2: {
// 		name: "Nguyễn Văn A",
// 		age: 20,
// 	}
// };

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj.obj2.name);
// console.log(obj["obj2"]["name"]);

// obj.b = 100;

// console.log(obj);

// delete obj.obj2;

// console.log(obj);

// obj.age = 20;

// console.log(obj);

// const arr = [ 1, 23, 43, "Hello" ];

// console.log(arr);
// console.log(arr.length);

// arr.push(100);

// console.log(arr);

// arr.pop();

// console.log(arr);

// aFunc("Hello", 6);

// function aFunc(a, b) {
// 	console.log(a, b);
// }

// const bFunc = function() {
// 	console.log("B");
// }
// bFunc();

// const cFunc = () => {
// 	console.log("C");
// }
// cFunc();

// console.log("sdaIUHsdakjJsadJisd".toLowerCase());
// console.log((1234.273).toFixed(1));

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

// console.log(/([A-Z])\w+/g.test('ssdisaid'));
// console.log(/([A-Z])\w+/g.test('Asdisaid'));

// throw new Error("This is error");

// Function scope

// var a = 10;

// function print() {
// 	var b = 50;

// 	function printA() {
// 		var c = 100;

// 		console.log(a); // 10
// 		console.log(b); // 50
// 		console.log(c); // 100
// 	}

// 	printA();

// 	console.log(a); // 10
// 	console.log(b); // 50
// 	console.log(c); // 50
// }

// print();

// console.log(a); // 10
// console.log(b); // undefined
// console.log(c); // 50

// Block scope {  }

// let aBlock = 10;

// function printBlock() {
// 	let bBlock = 300;

// 	if (true) {
// 		let cBlock = 1000;
// 		var c = 2332;

// 		console.log(cBlock); // 1000
// 		console.log(c); // 2332
// 	}

// 	console.log(aBlock); // 10
// 	console.log(bBlock); // 50
// 	// console.log(cBlock); // undefined
// 	console.log(c); // 2332 
// }

// printBlock();

// console.log(aBlock); // 10
// console.log(bBlock); // 50

// const print = function(num, time) {
// 	setTimeout(function() {
// 		console.log(num);
// 	}, 1000*time);
// }

// const countDown = function(count) {
// 	// var i; // -1
// 	for(var i = count; i >= 0; i--) {
// 		print(i, count - i);
// 	}
// }

// countDown(5);

// const print = function(message) {
// 	console.log(message);
// }

// const aFunc = function(cb) {
// 	cb("Hello word!");
// }

// aFunc(print);

console.log("Start");

const run = function() {
	console.log("Async");
}

setTimeout(run, 0);

function setTimeout(callback, waitTime){
	// waits for waitTime milliseconds
	callback();
}

console.log("End");