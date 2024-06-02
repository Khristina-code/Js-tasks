function *func(obj) {
	for (let key in obj) {
		yield [key, obj[key]];
	}
}

let iter = func({a: 1, b: 2, c: 3});

for (let elem of iter) {
	console.log(elem);
}