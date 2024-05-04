let button = document.querySelector('#button')
let paragraph = document.querySelector('#paragraph')

button.addEventListener('click', function () {
	let self = this
	let number = Number(self.textContent)
	setInterval(function () {
		number++
		self.textContent = number
	}, 1000);
});

