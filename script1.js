function *func() {
	yield 5;
	yield 4;
  yield 3;
  yield 2;
  yield 1;
}

let iter = func()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())