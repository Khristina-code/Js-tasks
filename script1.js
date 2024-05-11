let elem = document.querySelector('div');
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let widthPx = elem.style.width
	let widthNm = parseInt(widthPx)
	let heightPx = elem.style.height
	let heightNm = parseInt(heightPx)

	elem.style.width = (widthNm * 1.1) + 'px'
	elem.style.height = (heightNm * 1.1) + 'px'
})



