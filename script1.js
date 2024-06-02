let obj = { a: 1, b: 2, c: 3 };

obj[Symbol.iterator] = function *() {
	for (let key in this) {
    yield { key: key, val: this[key]};
	}
}

for (let elem of obj) {
	console.log(elem);
}