let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = {e: 4, f: 5, g: 6}

let sym = Symbol.for('sum')

function func () {
	let sum = 0

	for (let key in this) {
		sum += this[key]
	}
	return sum
}

obj1[sym] = func
obj2[sym] = func
console.log(obj1[sym]())
console.log(obj2[sym]())

