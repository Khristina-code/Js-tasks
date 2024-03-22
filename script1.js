let button = document.querySelector('button');
let elems  = document.querySelectorAll('input');
let sum = 0;

for (let elem of elems) {
	sum += Number(elem.value);
}

button.addEventListener('click', function() {
	console.log(sum);
});
