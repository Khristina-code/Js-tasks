let start = document.querySelector('#start')

start.addEventListener('click', function () {
	let i = 100

let timerId = setInterval(function () {
	console.log(--i)
}, 1000)
})

