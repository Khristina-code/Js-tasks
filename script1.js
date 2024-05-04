let button = document.querySelector('#button')
let paragraph = document.querySelector('#paragraph')

let timerId
button.addEventListener('click', function () {
	let i= 10
	timerId = setInterval(function () {
		paragraph.textContent = --i
		if (i === 0) {
			clearInterval(timerId)
		}
}, 1000);
});

