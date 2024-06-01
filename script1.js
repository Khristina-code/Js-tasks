let map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

let iter = map[Symbol.iterator]();

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())