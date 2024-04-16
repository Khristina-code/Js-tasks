let elem = document.querySelector('#elem');
let elems = elem.children;

for (let one of elems) {
	console.log(one.textContent += '!');
}
