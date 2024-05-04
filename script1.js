let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId; 

start.addEventListener('click', function () {
	let i = 100
	timerId = setInterval(function () {
		console.log(--i)
		if (i == 0) {
		clearInterval(timerId);
	}
	}, 1000);
});

stop.addEventListener('click', function () {
		clearInterval(timerId);
});

