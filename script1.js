let elem = document.querySelector('#elem');
let paragraph = document.querySelector('#paragraph')

elem.addEventListener('change', function() {
	paragraph.textContent = elem.value
});


