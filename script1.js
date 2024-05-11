let elem = document.querySelector('div');
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let widthPx = elem.style.width
	let widthNm = parseInt(widthPx)
	elem.style.width = (widthNm + 50) + 'px'

	let heightPx = elem.style.height
	let heightNm = parseInt(heightPx)
	elem.style.height = (heightNm + 50) + 'px'
})



