let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	console.log(parseInt(elem.style.width))
	console.log(parseInt(elem.style.height))
})

