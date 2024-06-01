let elems = document.getElementsByTagName('p')

let iter = elems[Symbol.iterator]();

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
