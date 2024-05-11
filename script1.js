let elem = document.querySelector('#elem');
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let computedStyle = getComputedStyle(elem)
		console.log(computedStyle.width)
		console.log(computedStyle.height)
})



