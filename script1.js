let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	console.log(parseFloat(elem.style.fontSize))
})

