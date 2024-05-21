function removeDuplicates(arr) {
	let set = new Set(arr)
	let array = Array.from(set)
	return array
}

let arr = [1, 2, 3, 1, 3, 4];
console.log(removeDuplicates(arr))