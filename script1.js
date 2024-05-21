let set = new Set;

function addToSet(item) {
	if (set.has(item)) {
		console.log('дубль')
	} else {
		set.add(item)
		console.log('елемнт доданий')
	}
}

addToSet(1);
addToSet(1);
addToSet(2);
addToSet(3);
addToSet(3);

console.log(set)
