let elem = document.querySelector('div');
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')

button1.addEventListener('click', function () {
	elem.style.color = 'red'
})

button2.addEventListener('click', function () {
	elem.style.color = ''
})



