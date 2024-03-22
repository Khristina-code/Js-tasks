let inputs = document.querySelectorAll('input')
let button = document.querySelector('#btn')

let texts = [
	'text1',
	'text2',
	'text3',
];

button.addEventListener('click', function() {
	for (let input of inputs) {
		for (let text of texts) {
			if (inputs.value === text.texts) {
				input.classList.add('right')
			} else {
				input.classList.add('wrong')
			}
		}
	}
});
