// const trung = (disom) => {
// 	return new Promise((resolve, reject) => {
// 		if(disom) resolve({message: "Chúc mừng Trung"})
// 		else reject("Lừa đấy");
// 	});
// };

// trung(true)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

// function nguday(cb) {
// 	setTimeout(function() {
// 		console.log("Ngủ dậy");
// 		cb();
// 	}, 2000);
// }

// function danhrang(cb) {
// 	setTimeout(function() {
// 		console.log("Đánh răng");
// 		cb();
// 	}, 2500);
// }

// function ruamat() {
// 	setTimeout(function() {
// 		console.log("Rửa mặt");
// 	}, 1000);
// }

// nguday(function() {
// 	danhrang(function() {
// 		ruamat();
// 	});
// });

function nguday() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log("Ngủ dậy");
			resolve()
		}, 2000);
	});
}

function danhrang() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log("Đánh răng");
			resolve({message: 'Success'});
		}, 2500);
	});
}

function ruamat() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log("Rửa mặt");
		}, 1000);
	});
}

// nguday()
// 	.then(() => {
// 		return danhrang();
// 	})
// 	.then(() => {
// 		ruamat();
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

async function asyncFunc () {
	try {
		await nguday();
		const data = await danhrang();
		console.log(data);
		await ruamat();
	} catch (error) {
		console.log(error);
	}
}

asyncFunc();