let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
let sum = 0;

for (let elem of elems) {
	sum += Number(elem.textContent);
	
	button.addEventListener('click', function() {
		console.log(sum);
	});
}
